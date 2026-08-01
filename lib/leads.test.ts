import { describe, expect, it } from "vitest";

import { contactLeadSchema, leadSchema, waitlistLeadSchema } from "@/lib/leads";

const waitlist = {
  type: "waitlist" as const,
  name: "Amara Okeke",
  email: "amara@brightfield.edu.ng",
  school: "Brightfield International",
  role: "Head of Department" as const,
};

const contact = {
  type: "contact" as const,
  name: "Amara Okeke",
  email: "amara@brightfield.edu.ng",
  message: "We run twelve JSS classes and would like a demo.",
};

describe("waitlist variant", () => {
  it("accepts a complete submission", () => {
    expect(waitlistLeadSchema.safeParse(waitlist).success).toBe(true);
  });

  it("requires school and role", () => {
    const { school, role, ...withoutSchoolAndRole } = waitlist;
    void school;
    void role;

    const result = waitlistLeadSchema.safeParse(withoutSchoolAndRole);
    expect(result.success).toBe(false);
    const paths = result.error!.issues.map((issue) => issue.path[0]);
    expect(paths).toContain("school");
    expect(paths).toContain("role");
  });

  it("treats message as optional", () => {
    expect(waitlistLeadSchema.safeParse({ ...waitlist, message: undefined }).success).toBe(
      true,
    );
  });

  it("rejects an unrecognised role", () => {
    expect(
      waitlistLeadSchema.safeParse({ ...waitlist, role: "Janitor" }).success,
    ).toBe(false);
  });
});

describe("contact variant", () => {
  it("accepts a submission with no school or role", () => {
    expect(contactLeadSchema.safeParse(contact).success).toBe(true);
  });

  it("requires a message of at least 10 characters", () => {
    expect(contactLeadSchema.safeParse({ ...contact, message: "hi" }).success).toBe(false);
  });
});

describe("normalisation", () => {
  it("trims and lowercases the email", () => {
    const result = leadSchema.parse({ ...waitlist, email: "  Amara@Brightfield.EDU.ng " });
    expect(result.email).toBe("amara@brightfield.edu.ng");
  });

  it("trims surrounding whitespace from the name", () => {
    expect(leadSchema.parse({ ...waitlist, name: "  Amara Okeke  " }).name).toBe(
      "Amara Okeke",
    );
  });

  it("rejects a malformed email", () => {
    expect(leadSchema.safeParse({ ...waitlist, email: "amara@" }).success).toBe(false);
  });

  it("rejects a name shorter than two characters", () => {
    expect(leadSchema.safeParse({ ...waitlist, name: "A" }).success).toBe(false);
  });
});

describe("error messages are user-facing", () => {
  const messageFor = (input: unknown, field: string) => {
    const result = leadSchema.safeParse(input);
    return result.error?.issues.find((issue) => issue.path[0] === field)?.message;
  };

  // A missing field must not leak Zod's "expected string, received undefined".
  it("uses the friendly message when a required field is absent", () => {
    const { school, ...withoutSchool } = waitlist;
    void school;
    expect(messageFor(withoutSchool, "school")).toBe("Please enter your school name.");
  });

  it("uses the same message when a required field is blank", () => {
    expect(messageFor({ ...waitlist, school: "   " }, "school")).toBe(
      "Please enter your school name.",
    );
  });

  it("uses the friendly message when name is absent", () => {
    const { name, ...withoutName } = waitlist;
    void name;
    expect(messageFor(withoutName, "name")).toBe("Please enter your full name.");
  });

  it("uses the friendly message when email is absent", () => {
    const { email, ...withoutEmail } = waitlist;
    void email;
    expect(messageFor(withoutEmail, "email")).toBe(
      "Please enter a valid email address.",
    );
  });

  it("uses the friendly message when a contact message is absent", () => {
    const { message, ...withoutMessage } = contact;
    void message;
    expect(messageFor(withoutMessage, "message")).toBe(
      "Please tell us a little more (10+ characters).",
    );
  });
});

describe("discriminated union", () => {
  it("routes to the contact schema, so school stays optional", () => {
    expect(leadSchema.safeParse(contact).success).toBe(true);
  });

  it("routes to the waitlist schema, so a bare message is not enough", () => {
    const { type, ...contactFields } = contact;
    void type;
    expect(leadSchema.safeParse({ ...contactFields, type: "waitlist" }).success).toBe(
      false,
    );
  });

  it("rejects an unknown type", () => {
    expect(leadSchema.safeParse({ ...waitlist, type: "newsletter" }).success).toBe(false);
  });

  it("carries the honeypot field through when present", () => {
    const result = leadSchema.parse({ ...waitlist, company_website: "http://spam.example" });
    expect(result.company_website).toBe("http://spam.example");
  });
});

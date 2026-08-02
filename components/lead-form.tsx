"use client";

import { useId, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { LEAD_ROLES, type LeadResponse, type LeadType } from "@/lib/leads";
import { cn } from "@/lib/utils";

type FieldErrors = Record<string, string[]>;

const COPY: Record<LeadType, { submit: string; pending: string; success: string }> = {
  waitlist: {
    submit: "Join the waitlist",
    pending: "Joining…",
    success: "You're on the list. We'll be in touch soon.",
  },
  // The contact variant renders on /contact, which is the destination for the
  // site-wide "Request a demo" CTA. The label matches the button that leads
  // there so the action keeps one name from click to confirmation.
  contact: {
    submit: "Request a demo",
    pending: "Sending…",
    success: "Request received. We'll be in touch to arrange your walkthrough.",
  },
};

export function LeadForm({
  variant = "waitlist",
  className,
}: {
  variant?: LeadType;
  className?: string;
}) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const fieldId = useId();
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [role, setRole] = useState("");

  const copy = COPY[variant];
  const isWaitlist = variant === "waitlist";
  const id = (field: string) => `${fieldId}-${field}`;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    setPending(true);
    setErrors({});

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: variant,
          name: data.get("name"),
          email: data.get("email"),
          school: data.get("school") || undefined,
          role: role || undefined,
          message: data.get("message") || undefined,
          company_website: data.get("company_website") || undefined,
          source: pathname,
        }),
      });

      const result = (await response.json()) as LeadResponse;

      if (!result.ok) {
        setErrors(result.fieldErrors ?? {});
        toast.error(result.error);
        return;
      }

      form.reset();
      setRole("");
      setDone(true);
      toast.success(copy.success);
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setPending(false);
    }
  }

  if (done) {
    return (
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          "rounded-xl border border-accent-200 bg-accent-50 p-8 text-center",
          className,
        )}
        role="status"
      >
        <p className="font-display text-lg font-semibold text-primary-900">
          Thank you.
        </p>
        <p className="mt-2 text-sm text-slate-600">{copy.success}</p>
        <Button
          variant="link"
          className="mt-4"
          onClick={() => setDone(false)}
        >
          Submit another response
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={cn("space-y-5", className)}>
      <Field
        id={id("name")}
        name="name"
        label="Full name"
        autoComplete="name"
        required
        errors={errors.name}
      />

      <Field
        id={id("email")}
        name="email"
        type="email"
        label="Work email"
        autoComplete="email"
        required
        errors={errors.email}
      />

      <Field
        id={id("school")}
        name="school"
        label="School"
        autoComplete="organization"
        required={isWaitlist}
        optionalHint={!isWaitlist}
        errors={errors.school}
      />

      <div className="space-y-2">
        <Label htmlFor={id("role")}>
          Your role{!isWaitlist && <OptionalHint />}
        </Label>
        <Select value={role} onValueChange={setRole} name="role">
          <SelectTrigger
            id={id("role")}
            className="w-full"
            aria-invalid={Boolean(errors.role)}
            aria-describedby={errors.role ? id("role-error") : undefined}
          >
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            {LEAD_ROLES.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FieldError id={id("role-error")} errors={errors.role} />
      </div>

      <div className="space-y-2">
        <Label htmlFor={id("message")}>
          {isWaitlist ? "Anything we should know?" : "How can we help?"}
          {isWaitlist && <OptionalHint />}
        </Label>
        <Textarea
          id={id("message")}
          name="message"
          rows={4}
          required={!isWaitlist}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? id("message-error") : undefined}
        />
        <FieldError id={id("message-error")} errors={errors.message} />
      </div>

      {/* Honeypot - hidden from users and assistive tech, attractive to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={id("company_website")}>Company website</label>
        <input
          id={id("company_website")}
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Button
        type="submit"
        disabled={pending}
        className="h-11 w-full px-6 text-base sm:w-auto"
      >
        {pending && <Loader2 className="size-4 animate-spin" />}
        {pending ? copy.pending : copy.submit}
      </Button>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required = false,
  optionalHint = false,
  autoComplete,
  errors,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  optionalHint?: boolean;
  autoComplete?: string;
  errors?: string[];
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label}
        {optionalHint && <OptionalHint />}
      </Label>
      <Input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={Boolean(errors)}
        aria-describedby={errors ? `${id}-error` : undefined}
      />
      <FieldError id={`${id}-error`} errors={errors} />
    </div>
  );
}

function FieldError({ id, errors }: { id: string; errors?: string[] }) {
  if (!errors?.length) return null;
  return (
    <p id={id} role="alert" className="text-sm text-destructive">
      {errors[0]}
    </p>
  );
}

function OptionalHint() {
  return <span className="ml-1 text-xs font-normal text-slate-400">(optional)</span>;
}

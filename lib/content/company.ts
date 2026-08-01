import { ph, type Placeholder } from "@/lib/content/placeholder";

/**
 * Guide §1 and §14: real domain, company line, contact email, and registration
 * details where available. Guide §16 lists a free GitHub domain as a
 * disqualifier for serious applications.
 */

export const company: Placeholder & {
  /** Trading name shown in the footer company line. */
  legalName: string;
  registrationNumber?: string;
  jurisdiction?: string;
  /** Production origin. Must be a real custom domain before submission. */
  domain: string;
  contactEmail: string;
  addressLine?: string;
} = {
  legalName: ph("Registered company name Ltd"),
  registrationNumber: ph("RC number"),
  jurisdiction: ph("Nigeria"),
  domain: ph("sifa.africa"),
  contactEmail: ph("hello@sifa.africa"),
  addressLine: ph("Registered office address"),
  placeholder: true,
};

/** Guide §14: data protection posture, required for anything collecting emails. */
export const compliance: Placeholder & {
  dataProtectionStatement: string;
  securityPractices: string[];
} = {
  dataProtectionStatement: ph(
    "How Sifa stores and processes school and teacher data, retention period, and lawful basis.",
  ),
  securityPractices: [
    ph("Encryption in transit and at rest"),
    ph("Role-based access control"),
    ph("Regular backups"),
    ph("No sale of school or student data"),
  ],
  placeholder: true,
};

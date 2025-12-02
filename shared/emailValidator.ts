/**
 * Email validation utility for Hey Maple
 * Only allows @usc.edu and @ucla.edu email addresses
 */

export const ALLOWED_DOMAINS = ["@usc.edu", "@ucla.edu"];

export function isValidCollegeEmail(email: string): { valid: boolean; error?: string } {
  if (!email || !email.includes("@")) {
    return { valid: false, error: "Invalid email format" };
  }

  const hasValidDomain = ALLOWED_DOMAINS.some(domain => email.toLowerCase().endsWith(domain));

  if (!hasValidDomain) {
    return {
      valid: false,
      error: "Only USC (@usc.edu) and UCLA (@ucla.edu) email addresses are allowed"
    };
  }

  return { valid: true };
}

export function getUniversityFromEmail(email: string): "USC" | "UCLA" | null {
  const lowerEmail = email.toLowerCase();
  if (lowerEmail.endsWith("@usc.edu")) return "USC";
  if (lowerEmail.endsWith("@ucla.edu")) return "UCLA";
  return null;
}

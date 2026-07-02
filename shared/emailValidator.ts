/**
 * Email validation utility for Hey Maple.
 * Any valid .edu student email address is accepted.
 *
 * Email -> school/brand resolution (for color theming and university auto-fill)
 * lives in client/src/lib/uscData.ts#getUniversityFromEmail, which is the
 * canonical resolver. This module only validates the address shape.
 */

export function isValidCollegeEmail(email: string): { valid: boolean; error?: string } {
  if (!email || !email.includes("@")) {
    return { valid: false, error: "Invalid email format" };
  }

  if (!email.toLowerCase().endsWith(".edu")) {
    return {
      valid: false,
      error: "Please use a valid .edu student email address",
    };
  }

  return { valid: true };
}

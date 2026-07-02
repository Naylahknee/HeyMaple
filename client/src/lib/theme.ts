import { getUniversityFromEmail } from "@/lib/uscData";
import { hexToHsl, getReadableForeground } from "@/lib/utils";

/**
 * School color theming.
 *
 * When a user provides a recognized school email, we override the `--primary`
 * (and related) CSS variables on the document root so the whole app re-skins to
 * that school's brand color. Unrecognized emails fall back to the default Hey
 * Maple palette defined in index.css.
 *
 * These helpers are the single source of truth used by both the auth hook and
 * the signup form so the behavior stays consistent.
 */

const THEMED_VARS = ["--primary", "--primary-foreground", "--ring"] as const;

/**
 * Applies the school's palette based on the given email.
 * Returns true if a recognized school was themed, false if it reset to default.
 */
export function applyUniversityTheme(email?: string | null): boolean {
  const root = document.documentElement;
  const university = email ? getUniversityFromEmail(email) : undefined;

  if (university) {
    const primaryHsl = hexToHsl(university.colors.primary);
    root.style.setProperty("--primary", primaryHsl);
    root.style.setProperty(
      "--primary-foreground",
      getReadableForeground(university.colors.primary),
    );
    // Keep focus rings in the brand color too.
    root.style.setProperty("--ring", primaryHsl);
    return true;
  }

  resetUniversityTheme();
  return false;
}

/** Clears any school overrides, reverting to the default palette in index.css. */
export function resetUniversityTheme(): void {
  const root = document.documentElement;
  for (const varName of THEMED_VARS) {
    root.style.removeProperty(varName);
  }
}

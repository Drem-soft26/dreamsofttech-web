/** Tiny class-name joiner (keeps the project dependency-free). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

// Prefix files in /public with the base path used on GitHub Pages.
export function withBasePath(path) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}

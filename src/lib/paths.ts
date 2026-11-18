export const basePath = "/PORTFOLIO2";

export function withBase(path: string) {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path === "/" ? "/" : path}`;
}

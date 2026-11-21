export const basePath = "";

export function withBase(path: string) {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path === "/" ? "/" : path}`;
}

export function asset(path) {
  const base = process.env.PUBLIC_URL || "";
  if (!path) return path;
  return path.startsWith("/") ? `${base}${path}` : `${base}/${path}`;
}

export async function fetchJson<T>(path: string): Promise<T> {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Error cargando ${path}`);
  return res.json() as Promise<T>;
}

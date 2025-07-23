export async function get<T>(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = (await response.json()) as unknown;
  // "unknown" is better than "any" because it forces defining the type on data.field access trying
  // (await response.json()) as unknown is safer-> when I'm not 100% abour res obj type ->
  // as TypeScript won’t let me access properties of unknown without a type check or cast.

  return data as T;
}

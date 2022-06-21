export type Keys<
  T extends Record<string, any> | readonly string[],
  W extends string | undefined = undefined,
> = T extends readonly string[]
  ? W extends string ? Exclude<T[number], W> : T[number]
  : W extends string ? Exclude<keyof T & string, W> : keyof T & string;

export type Length<T extends readonly any[]> = T["length"];

/**
 * Type strong implementation of Object.keys() with optional exclusions
 */
export function keys<T extends {}, W extends readonly string[]>(obj: T, ...without: W) {
  const v = without.length > 0
    ? Object.keys(obj).filter(k => !without.includes(k)) as unknown as Array<Exclude<keyof T, Keys<W>>>
    : Object.keys(obj) as unknown as Array<keyof T>;

  return v as unknown as Length<W> extends 0 ? Array<keyof T> : Array<Exclude<keyof T, Keys<W>>>;
}
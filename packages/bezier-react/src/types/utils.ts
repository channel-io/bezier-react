export type RemovePrefix<
  Prefix extends string,
  Value extends string,
> = Value extends `${Prefix}-${infer Rest}` ? Rest : never

export type StartsWithPrefix<
  Prefix extends string,
  Value extends string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
> = Value extends `${Prefix}-${infer Rest}`
  ? Value
  : Value extends Prefix
    ? Value
    : never

export type ExtractKeys<T> = T extends Record<infer K, any> ? K : never

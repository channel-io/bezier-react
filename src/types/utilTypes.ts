export type Extendable<T, V = any> = T & {
  [key: string]: V
}

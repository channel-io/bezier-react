export type ObjectOf<T> = {
  [key: string]: T
}

export type Extendable<T, V = any> = T & {
  [key: string]: V
}

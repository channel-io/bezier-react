export type Entries<Type> = {
  [Key in keyof Type]: [Key, Type[Key]]
}[keyof Type][]

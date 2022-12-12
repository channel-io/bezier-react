export function has(object: unknown, key: string): boolean {
  return object != null && Object.prototype.hasOwnProperty.call(object, key)
}

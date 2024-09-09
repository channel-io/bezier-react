export const toCamelCase = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())

export const extractNumber = (str: string) =>
  str.match(/-?\d+(\.\d+)?/g)?.join('')

export const toCSSDimension = (value: string) =>
  /^0[a-zA-Z]+$/.test(value) ? 0 : value

export const clip = (value: number) => Math.min(Math.max(value, 0), 1)

export const toCamelCase = (str: string) =>
  str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())

export const endsWithNumber = (str: string) => /\d$/.test(str)
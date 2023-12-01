export function isDev() {
  return process.env.NODE_ENV !== 'production'
}

export function warn(message: string) {
  if (isDev()) {
    // eslint-disable-next-line no-console
    console.warn(message)
  }
}

class AssertionException extends Error {
  constructor(message?: string) {
    super()

    this.name = 'AssertionException'
    this.message = message ?? 'assertion failed'
  }
}

export function assert(
  predicate: boolean,
  message?: string,
): asserts predicate {
  if (predicate) {
    return
  }

  if (isDev()) {
    throw new AssertionException(message)
  }
}

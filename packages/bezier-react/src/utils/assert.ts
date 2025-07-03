export function isDev() {
  return process.env.NODE_ENV !== 'production'
}

const devWarningScopes = new Set<string>()

export function warn(message: string): void
export function warn(message: string, scope: string): void
export function warn(message: string, scope?: string) {
  if (isDev()) {
    if (scope) {
      if (!devWarningScopes.has(scope)) {
        devWarningScopes.add(scope)
        // eslint-disable-next-line no-console
        console.warn(message)
      }
    } else {
      // eslint-disable-next-line no-console
      console.warn(message)
    }
  }
}

export class AssertionException extends Error {
  constructor(message?: string) {
    super()

    this.name = 'AssertionException'
    this.message = message ?? 'assertion failed'
  }
}

export function assert(
  predicate: boolean,
  message?: string
): asserts predicate {
  if (predicate) {
    return
  }

  if (isDev()) {
    throw new AssertionException(message)
  }
}

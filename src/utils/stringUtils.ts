/* Internal dependencies */
import { isEmpty, map, trim } from 'lodash-es'

export function mergeClassNames(className?: string, ...otherClassNames: Array<string|undefined>): string | undefined {
  if (!isEmpty(className) || !isEmpty(otherClassNames)) {
    const result: string[] = []
    map([className, ...otherClassNames], (cn) => trim(cn)).forEach((cn) => result.push(cn))
    const joinedResult = result.filter((cn) => !isEmpty(cn)).join(' ')
    if (!isEmpty(joinedResult)) { return joinedResult }
  }
  return undefined
}

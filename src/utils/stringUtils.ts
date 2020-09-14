/* Internal dependencies */
import _ from 'lodash'

export function mergeClassNames(className?: string, ...otherClassNames: Array<string|undefined>): string | undefined {
  if (!_.isEmpty(className) || !_.isEmpty(otherClassNames)) {
    const result: string[] = []
    _.map([className, ...otherClassNames], (cn) => _.trim(cn)).forEach((cn) => result.push(cn))
    const joinedResult = result.filter((cn) => !_.isEmpty(cn)).join(' ')
    if (!_.isEmpty(joinedResult)) { return joinedResult }
  }
  return undefined
}

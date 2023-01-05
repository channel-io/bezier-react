/* External dependencies */
import { omit, pick } from 'lodash-es'

/* Internal dependencies */
import { BezierComponentProps } from '~/src/types/ComponentProps'

const bezierComponentPropsKeys: Array<keyof BezierComponentProps> = [
  'as',
  'testId',
  'style',
  'className',
  'interpolation',
]

export const omitBezierComponentProps = <Props extends BezierComponentProps>(props: Props):
Omit<Props, keyof BezierComponentProps> => omit(props, bezierComponentPropsKeys)

export const pickBezierComponentProps = <Props extends BezierComponentProps>(props: Props):
Pick<Props, keyof BezierComponentProps> => pick(props, bezierComponentPropsKeys)


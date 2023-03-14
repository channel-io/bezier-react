/* Internal dependencies */
import {
  pick,
  omit,
} from '~/src/utils/objectUtils'
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


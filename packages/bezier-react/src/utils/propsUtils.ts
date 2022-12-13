/* Internal dependencies */
import {
  pick,
  omit,
} from 'Utils/objectUtils'
import { BezierComponentProps } from 'Types/ComponentProps'

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


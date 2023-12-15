import {
  type BezierComponentProps,
  type LayoutProps,
  type MarginProps,
} from '~/src/types/ComponentProps'

import { split } from './object'

const bezierComponentProps: Array<keyof BezierComponentProps> = [
  'as',
  'testId',
  'style',
  'className',
  'interpolation',
]

const marginProps: Array<keyof MarginProps> = [
  'm',
  'mx',
  'my',
  'mt',
  'mr',
  'mb',
  'ml',
]

const layoutProps: Array<keyof LayoutProps> = [
  'p',
  'px',
  'py',
  'pt',
  'pr',
  'pb',
  'pl',
  'width',
  'height',
  'maxWidth',
  'minWidth',
  'maxHeight',
  'minHeight',
  'position',
  'inset',
  'top',
  'right',
  'bottom',
  'left',
  'shrink',
  'grow',
  'bgColor',
  'borderColor',
  'borderRadius',
  'borderWidth',
  'borderTopWidth',
  'borderRightWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderStyle',
  'elevation',
  'zIndex',
  'overflow',
  'overflowX',
  'overflowY',
]

export const splitByBezierComponentProps = <Props extends BezierComponentProps>(props: Props) =>
  split(props, bezierComponentProps)

export const splitByMarginProps = <Props extends MarginProps>(props: Props) =>
  split(props, marginProps)

export const splitByLayoutProps = <Props extends LayoutProps>(props: Props) =>
  split(props, layoutProps)

import {
  type BezierComponentProps,
  type LayoutProps,
  type MarginProps,
} from '~/src/types/ComponentProps'
import {
  omit,
  pick,
} from '~/src/utils/object'

const bezierComponentPropsKeys: Array<keyof BezierComponentProps> = [
  'as',
  'testId',
  'style',
  'className',
  'interpolation',
]

export const omitBezierComponentProps = <Props extends BezierComponentProps>(
  props: Props,
): Omit<Props, keyof BezierComponentProps> => omit(props, bezierComponentPropsKeys)

export const pickBezierComponentProps = <Props extends BezierComponentProps>(
  props: Props,
): Pick<Props, keyof BezierComponentProps> => pick(props, bezierComponentPropsKeys)

export const splitByMarginProps = <Props extends MarginProps>(
  { m, mx, my, mt, mr, mb, ml, ...rest }: Props,
): [MarginProps, Omit<Props, keyof MarginProps>] => [{
    m,
    mx,
    my,
    mt,
    mr,
    mb,
    ml,
  }, rest]

export const splitByLayoutProps = <Props extends LayoutProps>(
  {
    p,
    px,
    py,
    pt,
    pr,
    pb,
    pl,
    width,
    height,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    position,
    inset,
    top,
    right,
    bottom,
    left,
    shrink,
    grow,
    bgColor,
    borderColor,
    borderRadius,
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderStyle,
    elevation,
    zIndex,
    overflow,
    overflowX,
    overflowY,
    ...rest
  }: Props,
): [LayoutProps, Omit<Props, keyof LayoutProps>] => [{
    p,
    px,
    py,
    pt,
    pr,
    pb,
    pl,
    width,
    height,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    position,
    inset,
    top,
    right,
    bottom,
    left,
    shrink,
    grow,
    bgColor,
    borderColor,
    borderRadius,
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderStyle,
    elevation,
    zIndex,
    overflow,
    overflowX,
    overflowY,
  }, rest]

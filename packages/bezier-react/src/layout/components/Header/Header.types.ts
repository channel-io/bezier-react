/* Internal dependencies */
import { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'
import { InjectedInterpolation } from 'Types/Foundation'

interface HeaderOptions {
  title: string
  titleSize?: InjectedInterpolation
  titleClassName?: string
  titleImageUrl?: string
  titleImageSize?: number
  actions?: Array<React.ReactNode> | React.ReactNode
  onClickTitle?: React.MouseEventHandler
  onClickActions?: Array<Function>
  /* Navigation cloneElement Props */
  isHover?: boolean
}

export default interface HeaderProps extends
  Omit<BezierComponentProps, 'as'>,
  ChildrenProps,
  HeaderOptions {}

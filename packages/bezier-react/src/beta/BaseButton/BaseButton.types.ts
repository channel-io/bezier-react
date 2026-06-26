import {
  type BezierComponentProps,
  type ChildrenProps,
  type DisableProps,
} from '~/src/types/props'

interface BaseButtonOwnProps extends ChildrenProps, DisableProps {}

export type BaseButtonButtonProps = Omit<
  BezierComponentProps<'button'>,
  keyof BaseButtonOwnProps | 'as'
> & {
  as?: 'button'
}

export type BaseButtonAnchorProps = Omit<
  BezierComponentProps<'a'>,
  keyof BaseButtonOwnProps | 'as' | 'type'
> & {
  as: 'a'
  type?: never
}

export type BaseButtonProps = BaseButtonOwnProps &
  (BaseButtonButtonProps | BaseButtonAnchorProps)

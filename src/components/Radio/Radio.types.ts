/* External dependencies */
import { MouseEvent } from 'react'

/* Internal dependencies */
import { ChildrenComponentProps } from '../../types/ComponentProps'

export default interface RadioProps extends ChildrenComponentProps {
  dotClassName?: string
  watchingValue?: any
  disabled?: boolean
  value?: any
  onClick?: (value: any, e: MouseEvent) => void
}

export interface StyledRadioHandleProps {
  checked: boolean
  disabled: boolean
  hovered: boolean
}

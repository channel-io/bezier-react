/* External dependencies */
import { MouseEvent } from 'react'

/* Internal dependencies */
import { ChildrenComponentProps } from '../../types/ComponentProps'

export default interface RadioProps extends ChildrenComponentProps {
  label?: string
  checked?: boolean
  disabled?: boolean
  value?: any
  onClick?: (value: any, e: MouseEvent) => void
}

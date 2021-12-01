/* External dependencies */
import { css } from 'styled-components'

/* Internal dependencies */
import { ChildrenComponentProps } from '../../types/ComponentProps'

export default interface HeaderProps extends Omit<ChildrenComponentProps, 'as'> {
  title: string
  titleSize?: ReturnType<typeof css>
  titleClassName?: string
  titleImageUrl?: string
  titleImageSize?: number
  actions?: Array<React.ReactNode> | React.ReactNode
  onClickTitle?: () => void
  onClickActions?: Array<Function>
  /* Navigation cloneElement Props */
  isHover?: boolean
}

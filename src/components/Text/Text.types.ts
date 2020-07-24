/* External dependencies */
import { css } from 'styled-components'

/* Internal dependencies */
import { ChildrenComponentProps } from '../../types/ComponentProps'

export default interface TextProps extends ChildrenComponentProps {
  inheritColor?: boolean
  bold?: boolean
  italic?: boolean
  typo?: ReturnType<typeof css>
}

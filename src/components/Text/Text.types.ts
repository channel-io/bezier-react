/* External dependencies */
import { css } from 'styled-components'

/* Internal dependencies */
import { SemanticNames } from 'Foundation'
import { IdentifierProps, ChildrenComponentProps } from 'Types/ComponentProps'

export default interface TextProps extends ChildrenComponentProps, Partial<IdentifierProps> {
  bold?: boolean
  italic?: boolean
  color?: SemanticNames
  typo?: ReturnType<typeof css>
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  marginVertical?: number
  marginHorizontal?: number
  marginAll?: number
  onClick?: () => void
}

/* External dependencies */
import { css } from 'styled-components'

/* Internal dependencies */
import { ContentComponentProps } from '../../types/ComponentProps'

export default interface TextProps extends ContentComponentProps<string> {
  typo?: ReturnType<typeof css>
}

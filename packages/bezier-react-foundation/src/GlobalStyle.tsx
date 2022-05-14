/* External dependencies */
import { get } from 'lodash-es'

/* Internal dependencies */
import { createGlobalStyle, css } from './FoundationStyledComponent'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%; /* 10/16 = 0.625 */
  }

  ${({ foundation }) => {
    const globalStyleObject = get(foundation, 'global')
    if (!globalStyleObject) {
      return undefined
    }

    return css(globalStyleObject)
  }}
`

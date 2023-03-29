/* Internal dependencies */
import {
  createGlobalStyle,
  css,
} from './FoundationStyledComponent'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%; // 10/16 = 0.625
  }

  ${({ foundation }) => {
    const globalStyleObject = foundation?.global
    if (!globalStyleObject) {
      return undefined
    }

    return css(globalStyleObject)
  }}
`

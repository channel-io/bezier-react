/**
 * NOTE:
 * 이 모듈은 Text, Icon 등 뿐 아니라 Colors, Elevation 등에서도 import 하고 있습니다.
 * 이로 인해 Colors(Elevation 등) -> ThemedStyledComponent -> Theme -> Colors(Elevation 등)
 * 의 Circular dependency 가 발생합니다.
 * 하지만 ThemedStyledComponent 에서 사용하는 Theme 은 단순한 interface 로
 * 동작에는 문제가 없으며, type checking 도 올바르게 됩니다.
 */

/* External dependencies */
import * as StyledComponents from 'styled-components'

/* Internal dependencies */
import { Theme } from './index'

export const {
  default: styled,
  css,
  ThemeProvider,
} = StyledComponents as StyledComponents.ThemedStyledComponentsModule<Theme>

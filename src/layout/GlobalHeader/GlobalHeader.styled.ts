/* Internal dependencies */
import { styled } from '../../foundation'
import GlobalHeaderProps from './GlobalHeader.types'

export const StyledGlobalHeader = styled.div<GlobalHeaderProps>`
  position: relative;
  flex: none;
  width: 100%;
  max-width: 100vw;
  height: ${({ isWindows }) => (isWindows ? 32 : 40)}px;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-gnb']};
  ${({ foundation }) =>
    foundation?.border?.getBorder(
      1,
      foundation?.theme?.['bdr-black-light'],
      { top: false, right: false, left: false },
    )};
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('background-color')};
`

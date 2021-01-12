/* Internal dependencies */
import { styled } from '../../foundation'
import GlobalHeaderProps from './GlobalHeader.types'

export const StyledGlobalHeader = styled.div<GlobalHeaderProps>`
  position: relative;
  flex: none;
  width: 100%;
  height: ${({ isWindows }) => (isWindows ? 32 : 40)}px;
  max-width: 100vw;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-gnb']};
  /* stylelint-disable-next-line declaration-colon-newline-after */
  ${({ foundation }) =>
    foundation?.border?.getBorder(
      1,
      foundation?.theme?.['bd-black-light'],
      { top: false, right: false, left: false },
    )};
  ${({ foundation }) => foundation?.transition?.getSingleTransitionCSS('background-color')};
`

/* Internal dependencies */
import { styled } from '../../foundation'
import GNBProps from './GNB.types'

const GNB = styled.div<GNBProps>`
  z-index: 10000;
  display: flex;
  flex: none;
  align-items: center;
  flex-direction: column;
  width: 68px;
  height: 100%;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-gnb']};
  /* stylelint-disable-next-line declaration-colon-newline-after */
  ${({ foundation }) =>
    foundation?.border?.getBorder(
      1,
      foundation?.theme?.['bd-black-light'],
      { top: false, right: true, bottom: false, left: false },
    )};
  ${({ foundation }) => foundation?.transition?.getSingleTransitionCSS('background-color')}
`

export default GNB

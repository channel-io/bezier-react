/* Internal dependencies */
import { styled } from '../../../foundation'
import { Tooltip as BaseTooltip } from '../../Tooltip'
import { Icon } from '../../Icon'

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HelpIcon = styled(Icon)``

export const Tooltip = styled(BaseTooltip)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 6px;

  &:hover {
    > ${HelpIcon} {
      color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};
    }
  }
`

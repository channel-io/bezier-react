/* Internal dependencies */
import { styled } from 'Foundation'
import { Tooltip as BaseTooltip } from 'Components/Tooltip'
import { Text } from 'Components/Text'
import { Icon } from 'Components/Icon'

export const Label = styled(Text)`
  display: block;
  text-align: left;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
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

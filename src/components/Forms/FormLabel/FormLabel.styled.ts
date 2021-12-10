/* Internal dependencies */
import { styled } from 'Foundation'
import { Tooltip as BaseTooltip } from 'Components/Tooltip'
import { Text } from 'Components/Text'
import { Icon } from 'Components/Icon'

export const Label = styled(Text)`
  display: block;
  text-align: left;
`

interface BoxProps {
  marginBottom: number
}

// FIXME: Box 컴포넌트를 만들고, prop을 통해 스타일링 할 수 있도록 개선
export const Box = styled.div<BoxProps>`
  display: flex;
  align-items: center;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
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

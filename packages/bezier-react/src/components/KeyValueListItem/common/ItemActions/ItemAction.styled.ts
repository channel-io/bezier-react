/* External dependencies */
import { isNil } from 'lodash-es'

/* Internal dependencies */
import { css, styled } from 'Foundation'
import { AdditionalColorProps } from 'Types/ComponentProps'
import { Icon } from 'Components/Icon'
import { Tooltip } from 'Components/Tooltip'

export const ItemActionWrapper = styled.div`
  display: flex;
  align-items: center;
`
interface ActionWrapperProps extends AdditionalColorProps<['hoverBackground', 'hoverIcon']> {
  show: boolean
}

export const ActionIcon = styled(Icon)``

export const ActionIconWrapper = styled.div<ActionWrapperProps>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  padding: 2px;
  margin-left: auto;
  cursor: pointer;

  ${({ foundation }) => foundation?.rounding?.round6}

  &:hover {
    ${({ foundation, hoverBackgroundColor }) => !isNil(hoverBackgroundColor) && css`
      background-color: ${foundation?.theme?.[hoverBackgroundColor]};
    `}

    ${ActionIcon} {
      ${({ foundation, hoverIconColor }) => !isNil(hoverIconColor) && css`
        color: ${foundation?.theme?.[hoverIconColor]};
      `}
    }
  }
`

export const ActionIconTooltip = styled(Tooltip)`
  margin-left: auto;
`

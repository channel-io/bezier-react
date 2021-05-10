/* External dependencies */
import { isNil } from 'lodash-es'

/* Internal dependencies */
import { css, ellipsis, SemanticNames, styled } from '../../foundation'
import { WithInterpolation } from '../../types/InjectedInterpolation'
import { Icon } from '../Icon'
import { Tooltip } from '../Tooltip'
import { Text } from '../Text'

const alignRight = css`
  margin-left: auto;
`

interface WrapperProps extends WithInterpolation {}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 28px;
  padding: 4px 6px;

  &:hover {
    background-color: ${({ foundation }) => foundation?.theme?.['bg-black-lighter']};
  }

  ${({ foundation }) => foundation?.rounding?.round6}

  ${({ foundation }) => foundation?.transition.getTransitionsCSS(['background-color', 'color'])}

  ${({ interpolation }) => interpolation}
`

const KeyText = styled(Text)`
  ${ellipsis(1)}
  color: ${({ foundation }) => foundation?.theme?.['txt-black-dark']};
`

interface KeyContentWrapperProps extends WithInterpolation {}

const KeyContentWrapper = styled.div<KeyContentWrapperProps>`
  display: flex;
  align-items: center;
  max-width: 118px;
  padding-left: 8px;

  ${({ interpolation }) => interpolation}
`

interface ValueWrapperProps extends WithInterpolation {}

const ValueWrapper = styled.div<ValueWrapperProps>`
  min-width: 0;
  /* stylelint-disable */
  ${KeyContentWrapper} ~ & {
    margin-left: 8px;
  }
  /* stylelint-enable */

  ${({ interpolation }) => interpolation}
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const ActionIcon = styled(Icon)``

interface ActionWrapperProps {
  hoverBackgroundColor?: SemanticNames
  hoverIconColor?: SemanticNames
  show: boolean
}

const ActionIconTooltip = styled(Tooltip)`
  ${alignRight}
`

const ActionIconWrapper = styled.div<ActionWrapperProps>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  padding: 2px;
  cursor: pointer;

  ${alignRight}

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

export default {
  alignRight,
  Wrapper,
  KeyText,
  KeyContentWrapper,
  ValueWrapper,
  Row,
  ActionIcon,
  ActionIconWrapper,
  ActionIconTooltip,
}

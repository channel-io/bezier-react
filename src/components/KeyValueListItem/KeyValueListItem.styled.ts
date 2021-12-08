/* External dependencies */
import { isNil } from 'lodash-es'

/* Internal dependencies */
import { css, ellipsis, styled } from 'Foundation'
import { InterpolationProps } from 'Types/Foundation'
import { AdditionalColorProps } from 'Types/ComponentProps'
import { Icon } from 'Components/Icon'
import { Tooltip } from 'Components/Tooltip'
import { Text } from 'Components/Text'

const alignRight = css`
  margin-left: auto;
`

interface WrapperProps extends InterpolationProps {
  multiline: boolean
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    background-color: ${({ foundation }) => foundation?.theme?.['bg-black-lighter']};
  }

  ${({ multiline }) => multiline && css`
    padding-bottom: 6px;
  `}

  ${({ foundation }) => foundation?.rounding?.round6}

  ${({ foundation }) => foundation?.transition.getTransitionsCSS(['background-color', 'color'])}

  ${({ interpolation }) => interpolation}
`

const KeyText = styled(Text)`
  ${ellipsis(1)}
  color: ${({ foundation }) => foundation?.theme?.['txt-black-dark']};
`

interface KeyContentWrapperProps extends InterpolationProps {}

const KeyContentWrapper = styled.div<KeyContentWrapperProps>`
  display: flex;
  align-items: center;
  max-width: 118px;
  padding-left: 8px;

  ${({ interpolation }) => interpolation}
`

interface ValueWrapperProps extends InterpolationProps {}

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
  padding: 4px 6px;
`

const MultiValueRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0 6px;
`

const ActionIcon = styled(Icon)``

interface ActionWrapperProps extends AdditionalColorProps<['hoverBackground', 'hoverIcon']> {
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
  MultiValueRow,
  ActionIcon,
  ActionIconWrapper,
  ActionIconTooltip,
}

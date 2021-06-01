/* Internal dependencies */
import disabledOpacity from '../../constants/DisabledOpacity'
import {
  css,
  ellipsis,
  LineHeightAbsoluteNumber,
  styled,
  TransitionDuration,
} from '../../foundation'
import { SemanticNames } from '../../foundation/Colors/Theme'
import { Icon } from '../Icon'
import {
  ListItemColorVariant,
  ListItemSize,
} from './ListItem.types'
import { getStyleOfSize } from './utils'

interface StyledWrapperProps {
  size?: ListItemSize
  active?: boolean
  focused?: boolean
  disabled?: boolean
  colorVariant: ListItemColorVariant
}

const getColorFromColorVariantWithDefaultValue = (
  colorVariant: ListItemColorVariant,
  defaultValue: SemanticNames,
): SemanticNames => {
  switch (colorVariant) {
    case (ListItemColorVariant.Blue):
      return 'bgtxt-blue-normal'
    case (ListItemColorVariant.Red):
      return 'bgtxt-red-normal'
    case (ListItemColorVariant.Green):
      return 'bgtxt-green-normal'
    case (ListItemColorVariant.Cobalt):
      return 'bgtxt-cobalt-normal'
    default:
      return defaultValue
  }
}

const FocusedItemStyle = css<StyledWrapperProps>`
  background-color: ${({ foundation }) => foundation?.theme?.['bg-black-lighter']};
`

const FocusedIconStyle = css<StyledWrapperProps>`
  color: ${({ foundation, active, colorVariant }) => (
    foundation?.theme?.[getColorFromColorVariantWithDefaultValue(
      colorVariant,
      active ? 'bgtxt-blue-normal' : 'txt-black-dark',
    )]
  )};
`

const ActiveItemStyle = css<StyledWrapperProps>`
  color: ${({ foundation, colorVariant }) => (
    foundation?.theme?.[getColorFromColorVariantWithDefaultValue(colorVariant, 'bgtxt-blue-normal')]
  )};
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-lightest']};
`

export const RightContent = styled.div`
  margin-left: 8px;
`

export const TitleWrapper = styled.div`
  display: flex;
  grid-row: 1;
  grid-column: 2;
  align-items: center;

  & span {
    ${({ foundation }) => foundation?.transition?.getTransitionsCSS('color')};
  }
`

export const DescriptionWrapper = styled.div`
  display: flex;
  grid-row: 2;
  grid-column: 2;
  align-items: center;
  width: 100%;
  margin-top: 2px;
  color: ${({ foundation }) => (foundation?.theme['txt-black-darker'])
};
`

export const Title = styled.div`
  ${ellipsis()}
`

interface DescriptionProps {
  descriptionMaxLines?: number
}

export const Description = styled.div<DescriptionProps>`
  ${({ descriptionMaxLines }) => descriptionMaxLines && ellipsis(descriptionMaxLines, LineHeightAbsoluteNumber.Lh16)}
`

interface IconWrapperProps {
  colorVariant: ListItemColorVariant
  active?: boolean
}

export const StyledIcon = styled(Icon)<IconWrapperProps>`
  color: ${({ foundation, colorVariant, active }) => (
    foundation?.theme?.[getColorFromColorVariantWithDefaultValue(colorVariant, active ? 'bgtxt-blue-normal' : 'txt-black-dark')]
  )};
  
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('color', TransitionDuration.M)};
`

export const LeftContentWrapper = styled.div`
  display: flex;
  grid-row: 1;
  grid-column: 1;
  align-items: center;
  margin-right: 8px;
`

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: fit-content(100%) minmax(0, 1fr);
  width: 100%;
`

export const Wrapper = styled.div<StyledWrapperProps>`
  display: flex;
  align-items: center;
  ${({ size }) => getStyleOfSize(size)}

  color: ${({ foundation, colorVariant }) => (
    foundation?.theme?.[getColorFromColorVariantWithDefaultValue(colorVariant, 'txt-black-darkest')]
  )};
  
  text-decoration: none;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? disabledOpacity : 1)};

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color'])};

  ${({ disabled, active, focused }) => !disabled && !active && css`
    ${focused && css`
      ${FocusedItemStyle}

      ${StyledIcon} {
        ${FocusedIconStyle}
      }
    `}

    &:hover {
      ${FocusedItemStyle}
    }

    &:hover ${StyledIcon} {
      ${FocusedIconStyle}
    }
`};

  ${({ active }) => (active && ActiveItemStyle)}
`

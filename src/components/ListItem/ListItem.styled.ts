/* Internal dependencies */
import disabledOpacity from '../../constants/DisabledOpacity'
import {
  css,
  ellipsis,
  LineHeightAbsoluteNumber,
  styled,
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

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['background-color', 'color'])};

  &:hover {
    ${({ foundation, disabled, active }) => (!disabled && !active && `
      background-color: ${foundation?.theme?.['bg-black-lighter']};
    `)}
  }

  &:hover ${StyledIcon} {
    color: ${({ foundation, active, colorVariant }) => (
    foundation?.theme?.[getColorFromColorVariantWithDefaultValue(
      colorVariant,
      active ? 'bgtxt-blue-normal' : 'txt-black-dark',
    )]
  )};
  }

  ${({ active }) => (active && ActiveItemStyle)}
`

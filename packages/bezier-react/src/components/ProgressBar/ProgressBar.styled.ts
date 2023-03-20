/* Internal dependencies */
import {
  styled,
  css,
  type Foundation,
} from '~/src/foundation'
import { toLength } from '~/src/utils/styleUtils'
import type ProgressBarProps from './ProgressBar.types'
import { ProgressBarSize, ProgressBarVariant } from './ProgressBar.types'

const PROGRESS_BAR_HEIGHT: Record<ProgressBarSize, number> = {
  [ProgressBarSize.S]: 4,
  [ProgressBarSize.M]: 6,
}

interface GetProgressBarActiveGradientProps {
  foundation?: Foundation
  variant: ProgressBarVariant
}

const getProgressBarActiveGradient = ({
  foundation,
  variant,
}: GetProgressBarActiveGradientProps) => {
  switch (variant) {
    case ProgressBarVariant.Green: {
      return css`
        background: linear-gradient(
          90deg,
          ${foundation?.theme?.['bgtxt-green-normal']} 0%,
          ${foundation?.subTheme?.['bgtxt-green-normal']} 100%
        );
      `
    }
    case ProgressBarVariant.Monochrome:
    default: {
      return css`
        background: linear-gradient(
          90deg,
          ${foundation?.theme?.['bg-black-light']} 0%,
          ${foundation?.theme?.['bg-black-dark']} 100%
        );
      `
    }
  }
}

interface StyledProgressBarWrapperProps extends ProgressBarProps {
  size: NonNullable<ProgressBarProps['size']>
  width: NonNullable<ProgressBarProps['width']>
}

export const StyledProgressBarWrapper = styled.div<StyledProgressBarWrapperProps>`
  width: ${({ width }) => toLength(width, '36px')};
  height: ${({ size }) => PROGRESS_BAR_HEIGHT[size]}px;

  background-color: ${({ foundation }) => foundation?.theme?.['bg-black-light']};
  ${({ foundation }) => foundation?.rounding?.round3}

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('width')};

  ${({ interpolation }) => interpolation}
`

interface StyledProgressBarActiveProps extends ProgressBarProps {
  variant: NonNullable<ProgressBarProps['variant']>
  value: NonNullable<ProgressBarProps['value']>
}

export const StyledProgressBarActive = styled.div<StyledProgressBarActiveProps>`
  width: ${({ value }) => value * 100}%;
  height: 100%;

  ${getProgressBarActiveGradient}
  ${({ foundation }) => foundation?.rounding?.round3}

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('width')};

  ${({ interpolation }) => interpolation}
`

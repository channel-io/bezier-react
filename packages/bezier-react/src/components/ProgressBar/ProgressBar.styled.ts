/* Internal dependencies */
import {
  styled,
  css,
  type Foundation,
} from 'Foundation'
import type ProgressBarProps from './ProgressBar.types'
import { ProgressBarSize, ProgressBarVariant } from './ProgressBar.types'

const PROGRESS_BAR_BORDER_RADIUS = 3

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
}

// FIXME: width
export const StyledProgressBarWrapper = styled.div<StyledProgressBarWrapperProps>`
  width: 50px;
  height: ${({ size }) => PROGRESS_BAR_HEIGHT[size]}px;

  background-color: ${({ foundation }) => foundation?.theme?.['bg-black-light']};
  border-radius: ${PROGRESS_BAR_BORDER_RADIUS}px;

  ${({ interpolation }) => interpolation}
`

// FIXME: width
interface StyledProgressBarActiveProps extends ProgressBarProps {
  variant: NonNullable<ProgressBarProps['variant']>
}

export const StyledProgressBarActive = styled.div<StyledProgressBarActiveProps>`
  width: 30px;
  height: 100%;

  ${getProgressBarActiveGradient}
  border-radius: ${PROGRESS_BAR_BORDER_RADIUS}px;

  ${({ interpolation }) => interpolation}
`

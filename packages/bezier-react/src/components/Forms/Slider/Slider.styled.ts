import * as SliderPrimitive from '@radix-ui/react-slider'

import {
  css,
  styled,
} from '~/src/foundation'

import DisabledOpacity from '~/src/constants/DisabledOpacity'
import type { InterpolationProps } from '~/src/types/Foundation'

import { focusedInputWrapperStyle } from '~/src/components/Forms/Inputs/mixins'

import type SliderProps from './Slider.types'

const SLIDER_TRACK_RANGE_HEIGHT = 6
const SLIDER_THUMB_SIZE = 20
const SLIDER_GUIDE_WIDTH = 2
const SLIDER_GUIDE_HEIGHT = 8

interface CalculateGuideBottomPosition {
  gap: number
}

function calculateGuideBottomPosition({
  gap,
}: CalculateGuideBottomPosition) {
  return css`
    bottom: calc(${SLIDER_GUIDE_HEIGHT}px + ${SLIDER_GUIDE_HEIGHT / 2}px + ${gap}px);
  `
}

interface CalculateGuideLeftPosition {
  min: number
  max: number
  guideValue: number
}

function calculateGuideLeftPosition({
  min,
  max,
  guideValue,
}: CalculateGuideLeftPosition) {
  const relativePositionPercentage = (guideValue / (max - min)) * 100
  const thumbOffsetPx = (((max + min) / 2) - guideValue) * (SLIDER_THUMB_SIZE / ((max - min)))

  return css`
    left: calc(${relativePositionPercentage}% - ${SLIDER_GUIDE_WIDTH / 2}px + ${thumbOffsetPx}px);
  `
}

export const SliderPrimitiveRoot = styled(SliderPrimitive.Root)<InterpolationProps>`
  --bezier-slider-width: auto;

  position: relative;
  display: flex;
  align-items: center;

  width: var(--bezier-slider-width);
  height: ${SLIDER_THUMB_SIZE}px;

  touch-action: none;
  cursor: pointer;
  user-select: none;

  &[data-disabled] {
    cursor: not-allowed;
    opacity: ${DisabledOpacity};
  }

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['opacity'])};
  ${({ interpolation }) => interpolation}
`

interface SliderTrackProps extends SliderProps {}

export const SliderTrack = styled.div<SliderTrackProps>`
  position: relative;
  flex: 1;
  height: ${SLIDER_TRACK_RANGE_HEIGHT}px;

  ${({ foundation }) => foundation?.rounding?.round3}
  background-color: ${({ foundation }) => foundation?.theme?.['bg-black-dark']};

  ${({ interpolation }) => interpolation}
`

interface SliderRangeProps extends SliderProps {}

export const SliderRange = styled.div<SliderRangeProps>`
  position: absolute;
  height: 100%;

  ${({ foundation }) => foundation?.rounding?.round3}
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-green-normal']};

  ${({ interpolation }) => interpolation}
`

interface SliderGuideProps extends SliderProps {
  min: NonNullable<SliderProps['min']>
  max: NonNullable<SliderProps['max']>
  guideValue: number
}

export const SliderGuide = styled.div<SliderGuideProps>`
  position: absolute;
  ${calculateGuideBottomPosition({ gap: 3 })}
  ${({ min, max, guideValue }) => calculateGuideLeftPosition({ min, max, guideValue })}

  width: ${SLIDER_GUIDE_WIDTH}px;
  height: ${SLIDER_GUIDE_HEIGHT}px;

  ${({ foundation }) => foundation?.rounding?.round1}
  background-color: ${({ foundation }) => foundation?.theme?.['bg-black-light']};

  ${({ interpolation }) => interpolation}
`

export const SliderThumb = styled.div`
  all: unset;
  display: block;

  width: ${SLIDER_THUMB_SIZE}px;
  height: ${SLIDER_THUMB_SIZE}px;

  ${({ foundation }) => foundation?.rounding?.round12}
  ${({ foundation }) => foundation?.elevation?.ev2()}
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-absolute-white-dark']};

  &:hover {
    ${({ foundation }) => foundation?.elevation?.ev3()}
    background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-absolute-white-dark']};
  }

  &:focus-visible {
    ${focusedInputWrapperStyle}
  }

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['box-shadow'])}
`

/* External dependencies */
import * as SliderPrimitive from '@radix-ui/react-slider'
import * as ToolTipPrimitive from '@radix-ui/react-tooltip'

/* Internal dependencies */
import { styled, css } from 'Foundation'
import { toLength } from 'Utils/styleUtils'
import DisabledOpacity from 'Constants/DisabledOpacity'
import { focusedInputWrapperStyle } from 'Components/Forms/Inputs/mixins'
import type SliderProps from './Slider.types'

const SLIDER_TRACK_RANGE_HEIGHT = 6
const SLIDER_THUMB_SIZE = 20
const SLIDER_GUIDE_WIDTH = 2
const SLIDER_GUIDE_HEIGHT = 10

const TOOLTIP_ARROW_HEIGHT = 8

interface CalculateGuideBottomPosition {
  gap: number
}

function calculateGuideBottomPosition({
  gap,
}: CalculateGuideBottomPosition) {
  return css`
    bottom: calc(${SLIDER_THUMB_SIZE / 2}px + ${SLIDER_TRACK_RANGE_HEIGHT / 2}px + ${gap}px);
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

interface SliderRootProps extends SliderProps {
  width: NonNullable<SliderProps['width']>
}

export const SliderRoot = styled.div<SliderRootProps>`
  position: relative;
  display: flex;
  align-items: center;

  width: ${({ width }) => toLength(width, '36px')};
  height: ${SLIDER_THUMB_SIZE}px;

  touch-action: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  user-select: none;

  opacity: ${({ disabled }) => (disabled ? DisabledOpacity : 'initial')};

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['opacity'])};
  ${({ interpolation }) => interpolation}
`

export const SliderTrack = styled.div`
  position: relative;
  flex: 1;
  height: ${SLIDER_TRACK_RANGE_HEIGHT}px;

  ${({ foundation }) => foundation?.rounding?.round3}
  background-color: ${({ foundation }) => foundation?.theme?.['bg-black-dark']};
`

export const SliderRange = styled.div`
  position: absolute;
  height: 100%;

  ${({ foundation }) => foundation?.rounding?.round3}
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-green-normal']};
`

type SliderGuideProps = {
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
`

export const SliderThumb = styled(SliderPrimitive.Thumb)`
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

export const TooltipContent = styled(ToolTipPrimitive.Content)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  padding: 10px;
  margin-bottom: ${TOOLTIP_ARROW_HEIGHT}px;
  color: var(--bgtxt-absolute-white-normal);
  background-color: var(--bgtxt-absolute-black-light);
  border-radius: 4px;

  &::after {
    position: absolute;
    bottom: 0;
    left: 50%;
    content: ' ';
    border-top: ${TOOLTIP_ARROW_HEIGHT}px solid ${({ foundation }) => foundation?.theme['bdr-black-dark']};
    border-right: ${TOOLTIP_ARROW_HEIGHT}px solid transparent;
    border-left: ${TOOLTIP_ARROW_HEIGHT}px solid transparent;
    transform: translateX(-50%);
  }
`

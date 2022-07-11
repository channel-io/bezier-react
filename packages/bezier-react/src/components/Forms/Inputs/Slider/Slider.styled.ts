/* Internal dependencies */
import { styled } from 'Foundation'
import { toLength } from 'Utils/styleUtils'
import DisabledOpacity from 'Constants/DisabledOpacity'
import type SliderProps from './Slider.types'

const SLIDER_TRACK_RANGE_HEIGHT = 6
const SLIDER_THUMB_SIZE = 20

interface SliderWrapperProps extends SliderProps {
  width: NonNullable<SliderProps['width']>
  disabled: NonNullable<SliderProps['disabled']>
}

export const SliderWrapper = styled.div<SliderWrapperProps>`
  position: relative;

  display: flex;
  align-items: center;

  width: ${({ width }) => toLength(width, '36px')};

  opacity: ${({ disabled }) => (disabled ? DisabledOpacity : 'initial')};

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['opacity'])};
  ${({ interpolation }) => interpolation}
`

interface SliderTrackProps extends SliderProps {}

export const SliderTrack = styled.div<SliderTrackProps>`
  width: 100%;
  height: ${SLIDER_TRACK_RANGE_HEIGHT}px;

  ${({ foundation }) => foundation?.rounding?.round3}
  background-color: ${({ foundation }) => foundation?.theme?.['bg-black-dark']};

  ${({ interpolation }) => interpolation}
`

interface SliderRangeProps extends SliderProps {}

export const SliderRange = styled.div<SliderRangeProps>`
  width: 50%;
  height: ${SLIDER_TRACK_RANGE_HEIGHT}px;

  ${({ foundation }) => foundation?.rounding?.round3}
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-green-normal']};

  ${({ interpolation }) => interpolation}
`

interface SliderThumbProps extends SliderProps {
  disabled: NonNullable<SliderProps['disabled']>
}

export const SliderThumb = styled.div<SliderThumbProps>`
  position: absolute;
  left: calc(50% - ${SLIDER_THUMB_SIZE / 2}px);

  width: ${SLIDER_THUMB_SIZE}px;
  height: ${SLIDER_THUMB_SIZE}px;

  ${({ foundation }) => foundation?.rounding?.round12}
  ${({ foundation }) => foundation?.elevation?.ev3()}
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-absolute-white-dark']};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${({ interpolation }) => interpolation}
`

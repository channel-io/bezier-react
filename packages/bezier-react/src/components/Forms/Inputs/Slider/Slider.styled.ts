/* External dependencies */
import {
  Root as RootPrimitive,
  Track as TrackPrimitive,
  Range as RangePrimitive,
  Thumb as ThumbPrimitive,
} from '@radix-ui/react-slider'

/* Internal dependencies */
import { styled } from 'Foundation'
import { toLength } from 'Utils/styleUtils'
import type SliderProps from './Slider.types'

const SLIDER_TRACK_RANGE_HEIGHT = 6
const SLIDER_THUMB_SIZE = 20

interface SliderRootProps extends SliderProps {
  width: NonNullable<SliderProps['width']>
}

export const SliderRoot = styled(RootPrimitive)<SliderRootProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ width }) => toLength(width, '36px')};
  height: ${SLIDER_THUMB_SIZE}px;

  ${({ interpolation }) => interpolation}
`

interface SliderTrackProps extends SliderProps {}

export const SliderTrack = styled(TrackPrimitive)<SliderTrackProps>`
  position: relative;
  flex: 1;
  height: ${SLIDER_TRACK_RANGE_HEIGHT}px;

  ${({ foundation }) => foundation?.rounding?.round3}
  background-color: ${({ foundation }) => foundation?.theme?.['bg-black-dark']};

  ${({ interpolation }) => interpolation}
`

interface SliderRangeProps extends SliderProps {}

export const SliderRange = styled(RangePrimitive)<SliderRangeProps>`
  position: absolute;
  height: 100%;

  ${({ foundation }) => foundation?.rounding?.round3}
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-green-normal']};

  ${({ interpolation }) => interpolation}
`

interface SliderThumbProps extends SliderProps {}

export const SliderThumb = styled(ThumbPrimitive)<SliderThumbProps>`
  all: unset;
  display: block;

  width: ${SLIDER_THUMB_SIZE}px;
  height: ${SLIDER_THUMB_SIZE}px;

  ${({ foundation }) => foundation?.rounding?.round12}
  ${({ foundation }) => foundation?.elevation?.ev3()}
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-absolute-white-dark']};

  ${({ interpolation }) => interpolation}
`

import * as SliderPrimitive from '@radix-ui/react-slider'

import { styled } from '~/src/foundation'

import DisabledOpacity from '~/src/constants/DisabledOpacity'
import type { InterpolationProps } from '~/src/types/Foundation'

import { focusedInputWrapperStyle } from '~/src/components/Forms/Inputs/mixins'

export const SliderPrimitiveRoot = styled(SliderPrimitive.Root)<InterpolationProps>`
  --b-slider-width: auto;
  --b-slider-thumb-size: 20px;

  position: relative;
  display: flex;
  align-items: center;
  width: var(--b-slider-width);
  height: var(--b-slider-thumb-size);
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

export const SliderPrimitiveTrack = styled(SliderPrimitive.Track)`
  position: relative;
  flex: 1;
  height: 6px;
  background-color: var(--bg-black-dark);
  border-radius: 3px;
`

export const SliderPrimitiveRange = styled(SliderPrimitive.Range)`
  position: absolute;
  height: 100%;
  background-color: var(--bgtxt-green-normal);
  border-radius: 3px;
`

export const GuideContainer = styled.div`
  --b-slider-guide-height: 8px;

  position: absolute;
  top: calc(-1 * (var(--b-slider-guide-height) + 3px));
  left: calc(var(--b-slider-thumb-size) / 2);
  width: calc(100% - var(--b-slider-thumb-size));
`

export const SliderGuide = styled.div`
  --b-slider-guide-left: 0;

  position: absolute;
  top: 0;
  left: var(--b-slider-guide-left);
  width: 2px;
  height: var(--b-slider-guide-height);
  background-color: var(--bg-black-light);
  border-radius: 1px;
  transform: translateX(-50%);
`

export const SliderThumb = styled.div`
  all: unset;
  display: block;
  width: var(--b-slider-thumb-size);
  height: var(--b-slider-thumb-size);
  border-radius: 12px;

  ${({ foundation }) => foundation?.elevation?.ev2()}
  /* stylelint-disable order/properties-order */
  /* NOTE: Override the background-color property inside ev mixin */
  background-color: var(--bgtxt-absolute-white-dark);

  &:hover {
    ${({ foundation }) => foundation?.elevation?.ev3()}
    background-color: var(--bgtxt-absolute-white-dark);
  }

  &:focus-visible {
    ${focusedInputWrapperStyle}
  }

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(['box-shadow'])}
`

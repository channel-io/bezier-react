/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { LightFoundation } from 'Foundation'
import { render } from 'Utils/testUtils'
import Slider, {
  SLIDER_TEST_ID,
  SLIDER_THUMB_TEST_ID,
} from './Slider'
import type SliderProps from './Slider.types'

describe('Slider', () => {
  const renderSlider = (props?: Partial<SliderProps>) => render(<Slider {...props} />)

  describe('no props specified', () => {
    it('should render default Slider', () => {
      const { getByTestId, getAllByTestId } = renderSlider()
      const slider = getByTestId(SLIDER_TEST_ID)
      const sliderThumb = getAllByTestId(SLIDER_THUMB_TEST_ID)

      expect(slider).toHaveStyle('position: relative')
      expect(slider).toHaveStyle('display: flex')
      expect(slider).toHaveStyle('align-items: center')
      expect(slider).toHaveStyle('width: 36px')
      expect(slider).toHaveStyle('height: 20px')

      expect(sliderThumb).toHaveLength(1)
      expect(sliderThumb[0]).toHaveStyle('display: block')
      expect(sliderThumb[0]).toHaveStyle('width: 20px')
      expect(sliderThumb[0]).toHaveStyle('height: 20px')
      expect(sliderThumb[0]).toHaveStyle('border-radius: 12px')
      expect(sliderThumb[0]).toHaveStyle(`background-color: ${LightFoundation.theme['bgtxt-absolute-white-dark']}`)
      // eslint-disable-next-line max-len
      expect(sliderThumb[0]).toHaveStyle(`box-shadow: inset 0 0 2px 0 ${LightFoundation.theme['shdw-inner-base']}, 0 0 2px 1px ${LightFoundation.theme['shdw-base']}, 0 2px 6px ${LightFoundation.theme['shdw-small']}`)
    })
  })

  describe('accessibility', () => {
    it('should render thumb with an slider role', () => {
      const { getAllByRole } = renderSlider()
      const sliderThumb = getAllByRole('slider')

      expect(sliderThumb).toHaveLength(1)
      expect(sliderThumb[0]).toBeInTheDocument()
    })

    it('should have proper value on "aria-valuemax", "aria-valuemin", "aria-valuenow" attribute', () => {
      const { getAllByRole } = renderSlider()
      const sliderThumb = getAllByRole('slider')

      expect(sliderThumb).toHaveLength(1)
      expect(sliderThumb[0]).toHaveAttribute('aria-valuemax', '10')
      expect(sliderThumb[0]).toHaveAttribute('aria-valuemin', '0')
      expect(sliderThumb[0]).toHaveAttribute('aria-valuenow', '5')
    })

    it('should have "true" value on "aria-disabled" attribute when disabled prop is true', () => {
      const { getByTestId } = renderSlider({ disabled: true })
      const slider = getByTestId(SLIDER_TEST_ID)

      expect(slider).toHaveAttribute('aria-disabled', 'true')
    })
  })
})

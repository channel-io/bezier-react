/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { LightFoundation } from 'Foundation'
import DisabledOpacity from 'Constants/DisabledOpacity'
import { render } from 'Utils/testUtils'
import {
  Slider,
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

  describe('width', () => {
    it('should render Slider with given width (number)', () => {
      const { getByTestId } = renderSlider({ width: 300 })
      const slider = getByTestId(SLIDER_TEST_ID)

      expect(slider).toHaveStyle('width: 300px')
    })

    it('should render Slider with given width (string)', () => {
      const { getByTestId } = renderSlider({ width: '500px' })
      const slider = getByTestId(SLIDER_TEST_ID)

      expect(slider).toHaveStyle('width: 500px')
    })
  })

  describe('guide', () => {
    // TODO: add test
  })

  describe('disabled', () => {
    it('should render default Slider when disabled is false', () => {
      const { getByTestId } = renderSlider({ disabled: false })
      const slider = getByTestId(SLIDER_TEST_ID)

      expect(slider).toHaveStyle('opacity: initial')
    })

    it('should render disabled Slider when disabled is true', () => {
      const { getByTestId } = renderSlider({ disabled: true })
      const slider = getByTestId(SLIDER_TEST_ID)

      expect(slider).toHaveStyle(`opacity: ${DisabledOpacity}`)
    })
  })

  describe('accessibility', () => {
    describe('role', () => {
      it('should render thumb with "slider" role', () => {
        const { getAllByRole } = renderSlider()
        const sliderThumb = getAllByRole('slider')

        expect(sliderThumb).toHaveLength(1)
        expect(sliderThumb[0]).toBeInTheDocument()
      })

      it('should render multiple thumb when multiple defaultValue is specified', () => {
        const { getAllByRole } = renderSlider({ defaultValue: [4, 5, 6] })
        const sliderThumb = getAllByRole('slider')

        expect(sliderThumb).toHaveLength(3)
        expect(sliderThumb[0]).toBeInTheDocument()
        expect(sliderThumb[1]).toBeInTheDocument()
        expect(sliderThumb[2]).toBeInTheDocument()
      })

      it('should not render thumb when defaultValue is not specified', () => {
        const { queryAllByRole } = renderSlider({ defaultValue: [] })
        const sliderThumb = queryAllByRole('slider')

        expect(sliderThumb).toHaveLength(0)
      })
    })

    describe('aria-valuemax, aria-valuemin', () => {
      it('should have default value on "aria-valuemin", "aria-valuemax" attribute when no props specified', () => {
        const { getAllByRole } = renderSlider()
        const sliderThumb = getAllByRole('slider')

        expect(sliderThumb).toHaveLength(1)
        expect(sliderThumb[0]).toHaveAttribute('aria-valuemin', '0')
        expect(sliderThumb[0]).toHaveAttribute('aria-valuemax', '10')
      })

      it('should have proper value on "aria-valuemin", "aria-valuemax" attribute', () => {
        const { getAllByRole } = renderSlider({ min: -50, max: 70 })
        const sliderThumb = getAllByRole('slider')

        expect(sliderThumb).toHaveLength(1)
        expect(sliderThumb[0]).toHaveAttribute('aria-valuemin', '-50')
        expect(sliderThumb[0]).toHaveAttribute('aria-valuemax', '70')
      })
    })

    describe('aria-valuenow', () => {
      it('should have default value on "aria-valuenow" attribute when no props specified', () => {
        const { getAllByRole } = renderSlider()
        const sliderThumb = getAllByRole('slider')

        expect(sliderThumb).toHaveLength(1)
        expect(sliderThumb[0]).toHaveAttribute('aria-valuenow', '5')
      })

      it('should have proper value on "aria-valuenow" attribute', () => {
        const { getAllByRole } = renderSlider({ defaultValue: [2, 6, 7] })
        const sliderThumb = getAllByRole('slider')

        expect(sliderThumb).toHaveLength(3)
        expect(sliderThumb[0]).toHaveAttribute('aria-valuenow', '2')
        expect(sliderThumb[1]).toHaveAttribute('aria-valuenow', '6')
        expect(sliderThumb[2]).toHaveAttribute('aria-valuenow', '7')
      })
    })

    describe('aria-disabled', () => {
      it('should have "false" value on "aria-disabled" attribute when disabled prop is false', () => {
        const { getByTestId } = renderSlider({ disabled: false })
        const slider = getByTestId(SLIDER_TEST_ID)

        expect(slider).toHaveAttribute('aria-disabled', 'false')
      })

      it('should have "true" value on "aria-disabled" attribute when disabled prop is true', () => {
        const { getByTestId } = renderSlider({ disabled: true })
        const slider = getByTestId(SLIDER_TEST_ID)

        expect(slider).toHaveAttribute('aria-disabled', 'true')
      })
    })
  })

  describe('onValueChange', () => {
    const onValueChange = jest.fn()

    it('should be executed when the `value` prop changes', () => {
      let value = [3]
      const { rerender } = renderSlider({ value, onValueChange })
      expect(onValueChange).toHaveBeenCalledTimes(1)

      // change value with a new array
      value = [5]
      rerender(<Slider {...{ value, onValueChange }} />)

      expect(onValueChange).toHaveBeenCalledTimes(2)

      // change value with the same reference
      value.splice(0, 1, 3)
      rerender(<Slider {...{ value, onValueChange }} />)

      expect(onValueChange).toHaveBeenCalledTimes(2)
    })
  })
})

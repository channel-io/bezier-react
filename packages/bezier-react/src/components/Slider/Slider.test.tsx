import { isInaccessible, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/test'

import { SLIDER_TEST_ID, Slider } from './Slider'
import { type SliderProps } from './Slider.types'

describe('Slider', () => {
  const renderSlider = (props?: Partial<SliderProps>) =>
    render(<Slider {...props} />)

  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup()
  })

  describe('Snapshot', () => {
    it('should match snapshot', () => {
      const { container } = renderSlider({ defaultValue: [5], guide: [5] })
      expect(container).toMatchSnapshot()
    })
  })

  describe('ARIA', () => {
    it('should be accessible', () => {
      const { container } = renderSlider()
      expect(isInaccessible(container)).toBe(false)
    })

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
        expect(sliderThumb[0]).toHaveAttribute('aria-valuenow', '0')
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

  describe('User Interactions', () => {
    it('should focus on the thumb when clicked', async () => {
      const { getByRole } = renderSlider()
      const sliderThumb = getByRole('slider')
      await user.click(sliderThumb)
      expect(sliderThumb).toHaveFocus()
    })

    it('should focus on the thumb when user presses tab key', async () => {
      const { getByRole } = renderSlider()
      const sliderThumb = getByRole('slider')
      await user.tab()
      expect(sliderThumb).toHaveFocus()
    })

    it('should not focus on the thumb when disabled', async () => {
      const { getByRole } = renderSlider({ disabled: true })
      const sliderThumb = getByRole('slider')
      await user.click(sliderThumb)
      expect(sliderThumb).not.toHaveFocus()
      await user.tab()
      expect(sliderThumb).not.toHaveFocus()
    })

    it('should increments/decrements by the step value when user presses Arrow key', async () => {
      const { getByRole } = renderSlider({ defaultValue: [0], step: 2 })
      const sliderThumb = getByRole('slider')
      await user.tab()
      await user.keyboard('[ArrowRight]')
      expect(sliderThumb).toHaveAttribute('aria-valuenow', '2')
      await user.keyboard('[ArrowLeft]')
      expect(sliderThumb).toHaveAttribute('aria-valuenow', '0')
      await user.keyboard('[ArrowUp]')
      expect(sliderThumb).toHaveAttribute('aria-valuenow', '2')
      await user.keyboard('[ArrowDown]')
      expect(sliderThumb).toHaveAttribute('aria-valuenow', '0')
    })

    it('should increments/decrements by the larger step value when user presses PageUp/PageDown key', async () => {
      const { getByRole } = renderSlider({ defaultValue: [0] })
      const sliderThumb = getByRole('slider')
      await user.tab()
      await user.keyboard('[PageUp]')
      expect(sliderThumb).toHaveAttribute('aria-valuenow', '10')
      await user.keyboard('[PageDown]')
      expect(sliderThumb).toHaveAttribute('aria-valuenow', '0')
    })

    it('should increments/decrements by the larger step value when user presses Shift + ArrowUp/Down key', async () => {
      const { getByRole } = renderSlider({ defaultValue: [0] })
      const sliderThumb = getByRole('slider')
      await user.tab()
      await user.keyboard('{Shift>}[ArrowUp]')
      expect(sliderThumb).toHaveAttribute('aria-valuenow', '10')
      await user.keyboard('{Shift>}[ArrowDown]')
      expect(sliderThumb).toHaveAttribute('aria-valuenow', '0')
    })

    it('should set the maximum/minimum value when user presses Home/End key', async () => {
      const { getByRole } = renderSlider({
        defaultValue: [0],
        min: 10,
        max: 100,
      })
      const sliderThumb = getByRole('slider')
      await user.tab()
      await user.keyboard('[End]')
      expect(sliderThumb).toHaveAttribute('aria-valuenow', '100')
      await user.keyboard('[Home]')
      expect(sliderThumb).toHaveAttribute('aria-valuenow', '10')
    })

    it('`onValueChange` function should be executed when the value changes', async () => {
      const onValueChange = jest.fn()
      renderSlider({ onValueChange })
      await user.tab()
      await user.keyboard('[ArrowRight]')
      expect(onValueChange).toHaveBeenCalledTimes(1)
    })

    it('If there are more than one thumb, the steps between them should not be less than `minStepsBetweenThumbs`.', async () => {
      const { getAllByRole } = renderSlider({
        defaultValue: [0, 2],
        minStepsBetweenThumbs: 2,
      })
      const [firstThumb, secondThumb] = getAllByRole('slider')
      await user.tab()
      await user.keyboard('[ArrowRight]')
      expect(firstThumb).not.toHaveAttribute('aria-valuenow', '1')
      await user.tab()
      await user.keyboard('[ArrowLeft]')
      expect(secondThumb).not.toHaveAttribute('aria-valuenow', '1')
    })
  })

  describe('Style', () => {
    it('should render Slider with given width (number)', () => {
      const { getByTestId } = renderSlider({ width: 300 })
      const slider = getByTestId(SLIDER_TEST_ID)
      expect(slider).toHaveStyle('--b-slider-width: 300px')
    })

    it('should render Slider with given width (string)', () => {
      const { getByTestId } = renderSlider({ width: '500px' })
      const slider = getByTestId(SLIDER_TEST_ID)
      expect(slider).toHaveStyle('--b-slider-width: 500px')
    })
  })

  describe('Tooltip', () => {
    // FIXME: Make this test pass
    // it('should show tooltip when user hovers on the thumb', async () => {
    //   const { getByRole, getAllByText } = renderSlider({ defaultValue: [0] })
    //   const sliderThumb = getByRole('slider')
    //   await user.hover(sliderThumb)
    //   await waitFor(
    //     () => {
    //       expect(getAllByText('0')[0]).toBeInTheDocument()
    //     },
    //     { timeout: 10000 }
    //   )
    // })

    it('should show tooltip when user focuses on the thumb', async () => {
      const { getAllByText } = renderSlider({ defaultValue: [0] })
      await user.tab()
      expect(getAllByText('0')[0]).toBeInTheDocument()
    })

    // FIXME: Make this test pass
    // it('should show tooltip when user clicks on the thumb', async () => {
    //   const { getByRole, getAllByText } = renderSlider({ defaultValue: [0] })
    //   const sliderThumb = getByRole('slider')
    //   await user.click(sliderThumb)
    //   await waitFor(
    //     () => {
    //       expect(getByRole('tooltip')).toBeInTheDocument()
    //       expect(getAllByText('0')[0]).toBeInTheDocument()
    //     },
    //     { timeout: 10000 }
    //   )
    // })

    it('should not show tooltip when disableTooltip is true', async () => {
      const { getByRole, queryByRole, queryAllByText } = renderSlider({
        defaultValue: [0],
        disableTooltip: true,
      })
      const sliderThumb = getByRole('slider')
      await user.click(sliderThumb)
      expect(queryByRole('tooltip')).not.toBeInTheDocument()
      expect(queryAllByText('0')[0]).toBeUndefined()
    })
  })
})

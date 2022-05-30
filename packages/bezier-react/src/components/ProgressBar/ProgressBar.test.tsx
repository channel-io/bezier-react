/* External dependencies */
import React from 'react'

/* Interanal dependencies */
import { LightFoundation } from 'Foundation'
import { render } from 'Utils/testUtils'
import ProgressBar, {
  PROGRESS_BAR_TEST_ID,
  PROGRESS_BAR_ACTIVE_TEST_ID,
} from './ProgressBar'
import type ProgressBarProps from './ProgressBar.types'
import { ProgressBarSize, ProgressBarVariant } from './ProgressBar.types'

describe('ProgressBar', () => {
  const renderComponent = (props?: Partial<ProgressBarProps>) => render(
    <ProgressBar {...props} />,
  )

  describe('no props specified', () => {
    it('should render default ProgressBar', () => {
      const { getByTestId } = renderComponent()
      const progressBar = getByTestId(PROGRESS_BAR_TEST_ID)
      const progressBarActive = getByTestId(PROGRESS_BAR_ACTIVE_TEST_ID)

      expect(progressBar).toHaveStyle('width: 36px')
      expect(progressBar).toHaveStyle('height: 6px')
      expect(progressBar).toHaveStyle(`background-color: ${LightFoundation.theme['bg-black-light']}`)
      expect(progressBar).toHaveStyle('border-radius: 3px')
      expect(progressBarActive).toHaveStyle('width: 0%')
      expect(progressBarActive).toHaveStyle('height: 100%')
      expect(progressBarActive).toHaveStyle(`background: linear-gradient(
        90deg,
        ${LightFoundation.theme['bgtxt-green-normal']} 0%,
        ${LightFoundation.subTheme?.['bgtxt-green-normal']} 100%
      )`)
      expect(progressBarActive).toHaveStyle('border-radius: 3px')
    })
  })

  describe('specify size props', () => {
    it('should render ProgressBar with size M', () => {
      const { getByTestId } = renderComponent({
        size: ProgressBarSize.M,
      })
      const progressBar = getByTestId(PROGRESS_BAR_TEST_ID)
      const progressBarActive = getByTestId(PROGRESS_BAR_ACTIVE_TEST_ID)

      expect(progressBar).toHaveStyle('height: 6px')
      expect(progressBarActive).toHaveStyle('height: 100%')
    })

    it('should render ProgressBar with size S', () => {
      const { getByTestId } = renderComponent({
        size: ProgressBarSize.S,
      })
      const progressBar = getByTestId(PROGRESS_BAR_TEST_ID)
      const progressBarActive = getByTestId(PROGRESS_BAR_ACTIVE_TEST_ID)

      expect(progressBar).toHaveStyle('height: 4px')
      expect(progressBarActive).toHaveStyle('height: 100%')
    })
  })

  describe('specify variant props', () => {
    it('should render ProgressBar with variant Green', () => {
      const { getByTestId } = renderComponent({
        variant: ProgressBarVariant.Green,
      })
      const progressBarActive = getByTestId(PROGRESS_BAR_ACTIVE_TEST_ID)

      expect(progressBarActive).toHaveStyle(`background: linear-gradient(
        90deg,
        ${LightFoundation.theme['bgtxt-green-normal']} 0%,
        ${LightFoundation.subTheme?.['bgtxt-green-normal']} 100%
      )`)
    })

    it('should render ProgressBar with variant Monochrome', () => {
      const { getByTestId } = renderComponent({
        variant: ProgressBarVariant.Monochrome,
      })
      const progressBarActive = getByTestId(PROGRESS_BAR_ACTIVE_TEST_ID)

      expect(progressBarActive).toHaveStyle(`background: linear-gradient(
        90deg,
        ${LightFoundation.theme['bg-black-light']} 0%,
        ${LightFoundation.theme['bg-black-dark']} 100%
      )`)
    })
  })

  describe('specify width props', () => {
    it('should render ProgressBar with given width props', () => {
      const { getByTestId } = renderComponent({
        width: 500,
      })
      const progressBar = getByTestId(PROGRESS_BAR_TEST_ID)

      expect(progressBar).toHaveStyle('width: 500px')
    })
  })

  describe('specify percentage props', () => {
    it('should render ProgressBarActive with given value props', () => {
      const { getByTestId } = renderComponent({
        value: 0.75,
      })
      const progressBarActive = getByTestId(PROGRESS_BAR_ACTIVE_TEST_ID)

      expect(progressBarActive).toHaveStyle('width: 75%')
    })

    it('should render ProgressBarActive with 0% width when value is smaller than 0', () => {
      const { getByTestId } = renderComponent({
        value: -0.5,
      })
      const progressBarActive = getByTestId(PROGRESS_BAR_ACTIVE_TEST_ID)

      expect(progressBarActive).toHaveStyle('width: 0%')
    })

    it('should render ProgressBarActive with 100% width when value is bigger than 1', () => {
      const { getByTestId } = renderComponent({
        value: 1.2,
      })
      const progressBarActive = getByTestId(PROGRESS_BAR_ACTIVE_TEST_ID)

      expect(progressBarActive).toHaveStyle('width: 100%')
    })
  })
})

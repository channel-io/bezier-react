import React from 'react'

import { LightFoundation } from '~/src/foundation'

import { render } from '~/src/utils/testUtils'

import {
  PROGRESS_BAR_ACTIVE_TEST_ID,
  ProgressBar,
} from './ProgressBar'
import type ProgressBarProps from './ProgressBar.types'

describe('ProgressBar', () => {
  const renderComponent = (props?: Partial<ProgressBarProps>) => render(
    <ProgressBar {...props} />,
  )

  describe('no props specified', () => {
    it('should render default ProgressBar', () => {
      const { getByRole, getByTestId } = renderComponent()
      const progressBar = getByRole('progressbar')
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
      const { getByRole, getByTestId } = renderComponent({
        size: 'm',
      })
      const progressBar = getByRole('progressbar')
      const progressBarActive = getByTestId(PROGRESS_BAR_ACTIVE_TEST_ID)

      expect(progressBar).toHaveStyle('height: 6px')
      expect(progressBarActive).toHaveStyle('height: 100%')
    })

    it('should render ProgressBar with size S', () => {
      const { getByRole, getByTestId } = renderComponent({
        size: 's',
      })
      const progressBar = getByRole('progressbar')
      const progressBarActive = getByTestId(PROGRESS_BAR_ACTIVE_TEST_ID)

      expect(progressBar).toHaveStyle('height: 4px')
      expect(progressBarActive).toHaveStyle('height: 100%')
    })
  })

  describe('specify variant props', () => {
    it('should render ProgressBar with variant Green', () => {
      const { getByRole, getByTestId } = renderComponent({
        variant: 'green',
      })
      const progressBar = getByRole('progressbar')
      const progressBarActive = getByTestId(PROGRESS_BAR_ACTIVE_TEST_ID)

      expect(progressBar).toHaveStyle(`background-color: ${LightFoundation.theme['bg-black-light']}`)
      expect(progressBarActive).toHaveStyle(`background: linear-gradient(
        90deg,
        ${LightFoundation.theme['bgtxt-green-normal']} 0%,
        ${LightFoundation.subTheme?.['bgtxt-green-normal']} 100%
      )`)
    })

    it('should render ProgressBar with variant Monochrome', () => {
      const { getByRole, getByTestId } = renderComponent({
        variant: 'monochrome',
      })
      const progressBar = getByRole('progressbar')
      const progressBarActive = getByTestId(PROGRESS_BAR_ACTIVE_TEST_ID)

      expect(progressBar).toHaveStyle(`background-color: ${LightFoundation.theme['bg-black-light']}`)
      expect(progressBarActive).toHaveStyle(`background: linear-gradient(
        90deg,
        ${LightFoundation.theme['bg-black-light']} 0%,
        ${LightFoundation.theme['bg-black-dark']} 100%
      )`)
    })
    it('should render ProgressBar with variant GreenAlt', () => {
      const { getByRole, getByTestId } = renderComponent({
        variant: 'green-alt',
      })
      const progressBar = getByRole('progressbar')
      const progressBarActive = getByTestId(PROGRESS_BAR_ACTIVE_TEST_ID)

      expect(progressBar).toHaveStyle(`background-color: ${LightFoundation.theme['bgtxt-absolute-white-normal']}`)
      expect(progressBarActive).toHaveStyle(`background: linear-gradient(
        90deg,
        ${LightFoundation.theme['bgtxt-green-normal']} 0%,
        ${LightFoundation.subTheme?.['bgtxt-green-normal']} 100%
      )`)
    })
  })

  describe('specify width props', () => {
    it('should render ProgressBar with given width props', () => {
      const { getByRole } = renderComponent({
        width: 500,
      })
      const progressBar = getByRole('progressbar')

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

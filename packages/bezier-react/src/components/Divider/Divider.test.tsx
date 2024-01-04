import React from 'react'

import { render } from '~/src/utils/test'

import {
  DIVIDER_TEST_ID,
  Divider,
} from './Divider'
import { type DividerProps } from './Divider.types'

import styles from './Divider.module.scss'

describe('Divider', () => {
  const renderDivider = (props?: Partial<DividerProps>) => render(<Divider {...props} />)

  describe('no props specified', () => {
    it('should render default Divider', () => {
      const { getByTestId } = renderDivider()
      const divider = getByTestId(DIVIDER_TEST_ID)
      expect(divider).toHaveClass(styles.Divider)
      expect(divider).toHaveAttribute('role', 'separator')
    })
  })

  describe('accessibility', () => {
    it('should render with an separator role', () => {
      const { getByTestId } = renderDivider()
      const divider = getByTestId(DIVIDER_TEST_ID)

      expect(divider).toHaveAttribute('role', 'separator')
    })

    it('should render horizontal divider without aria-orientation attribute', () => {
      const { getByTestId } = renderDivider({
        orientation: 'horizontal',
      })
      const divider = getByTestId(DIVIDER_TEST_ID)

      expect(divider).not.toHaveAttribute('aria-orientation')
    })

    it('should render vertical divider with aria-orientation attribute', () => {
      const { getByTestId } = renderDivider({
        orientation: 'vertical',
      })
      const divider = getByTestId(DIVIDER_TEST_ID)

      expect(divider).toHaveAttribute('aria-orientation', 'vertical')
    })

    it('should not have aria attributes when decorative is true', () => {
      const { getByTestId } = renderDivider({
        decorative: true,
      })
      const divider = getByTestId(DIVIDER_TEST_ID)

      expect(divider).toHaveAttribute('role', 'none')
      expect(divider).not.toHaveAttribute('aria-orientation')
    })
  })
})

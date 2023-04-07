import React from 'react'

import { LightFoundation } from '~/src/foundation'

import { render } from '~/src/utils/testUtils'

import Divider, { DIVIDER_TEST_ID } from './Divider'
import type DividerProps from './Divider.types'

describe('Divider', () => {
  const renderDivider = (props?: Partial<DividerProps>) => render(<Divider {...props} />)

  describe('no props specified', () => {
    it('should render default Divider', () => {
      const { getByTestId } = renderDivider()
      const divider = getByTestId(DIVIDER_TEST_ID)

      expect(divider).toHaveStyle('width: calc(100% - 12px)')
      expect(divider).toHaveStyle('height: 1px')
      expect(divider).toHaveStyle('border-radius: 1px')
      expect(divider).toHaveStyle(`background-color: ${LightFoundation.theme['bdr-black-light']}`)
      expect(divider).toHaveStyle('margin: 6px')

      expect(divider).toHaveAttribute('role', 'separator')
    })
  })

  describe('indent', () => {
    describe('horizontal divider', () => {
      it('should have margin by default', () => {
        const { getByTestId } = renderDivider({
          orientation: 'horizontal',
        })
        const divider = getByTestId(DIVIDER_TEST_ID)

        expect(divider).toHaveStyle('margin: 6px')
      })

      it('should not have left, right margin when withoutSideIndent is true', () => {
        const { getByTestId } = renderDivider({
          orientation: 'horizontal',
          withoutSideIndent: true,
        })
        const divider = getByTestId(DIVIDER_TEST_ID)

        expect(divider).toHaveStyle('margin-left: 0')
        expect(divider).toHaveStyle('margin-right: 0')
      })

      it('should not have top, bottom margin when withoutParallelIndent is true', () => {
        const { getByTestId } = renderDivider({
          orientation: 'horizontal',
          withoutParallelIndent: true,
        })
        const divider = getByTestId(DIVIDER_TEST_ID)

        expect(divider).toHaveStyle('margin-top: 0')
        expect(divider).toHaveStyle('margin-bottom: 0')
      })

      it('should not have margin when both withoutSideIndent, withoutParallelIndent are true', () => {
        const { getByTestId } = renderDivider({
          orientation: 'horizontal',
          withoutParallelIndent: true,
          withoutSideIndent: true,
        })
        const divider = getByTestId(DIVIDER_TEST_ID)

        expect(divider).toHaveStyle('margin-top: 0')
        expect(divider).toHaveStyle('margin-bottom: 0')
        expect(divider).toHaveStyle('margin-left: 0')
        expect(divider).toHaveStyle('margin-right: 0')
      })

      it('should not have margin when withoutIndent is true', () => {
        const { getByTestId } = renderDivider({
          orientation: 'horizontal',
          withoutIndent: true,
        })
        const divider = getByTestId(DIVIDER_TEST_ID)

        expect(divider).toHaveStyle('margin: 0')
      })
    })

    describe('vertical divider', () => {
      it('should have margin by default', () => {
        const { getByTestId } = renderDivider({
          orientation: 'vertical',
        })
        const divider = getByTestId(DIVIDER_TEST_ID)

        expect(divider).toHaveStyle('margin: 6px')
      })

      it('should not have top, bottom margin when withoutSideIndent is true', () => {
        const { getByTestId } = renderDivider({
          orientation: 'vertical',
          withoutSideIndent: true,
        })
        const divider = getByTestId(DIVIDER_TEST_ID)

        expect(divider).toHaveStyle('margin-top: 0')
        expect(divider).toHaveStyle('margin-bottom: 0')
      })

      it('should not have left, right margin when withoutParallelIndent is true', () => {
        const { getByTestId } = renderDivider({
          orientation: 'vertical',
          withoutParallelIndent: true,
        })
        const divider = getByTestId(DIVIDER_TEST_ID)

        expect(divider).toHaveStyle('margin-left: 0')
        expect(divider).toHaveStyle('margin-right: 0')
      })

      it('should not have margin when both withoutSideIndent, withoutParallelIndent are true', () => {
        const { getByTestId } = renderDivider({
          orientation: 'vertical',
          withoutParallelIndent: true,
          withoutSideIndent: true,
        })
        const divider = getByTestId(DIVIDER_TEST_ID)

        expect(divider).toHaveStyle('margin-top: 0')
        expect(divider).toHaveStyle('margin-bottom: 0')
        expect(divider).toHaveStyle('margin-left: 0')
        expect(divider).toHaveStyle('margin-right: 0')
      })

      it('should not have margin when withoutIndent is true', () => {
        const { getByTestId } = renderDivider({
          orientation: 'vertical',
          withoutIndent: true,
        })
        const divider = getByTestId(DIVIDER_TEST_ID)

        expect(divider).toHaveStyle('margin: 0')
      })
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

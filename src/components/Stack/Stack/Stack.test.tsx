/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import Stack from './Stack'

describe('Stack', () => {
  describe('Flex layout', () => {
    it('creates a flexbox', () => {
      const { getByTestId } = render(<Stack direction="horizontal" testId="stack" />)

      expect(getByTestId('stack')).toHaveStyle('display: flex')
    })

    it('creates a horizontal flexbox when given direction="horizontal"', () => {
      const { getByTestId } = render(<Stack direction="horizontal" testId="stack" />)

      expect(getByTestId('stack')).toHaveStyle('flex-direction: row')
    })

    it('creates a vertical flexbox when given direction="vertical"', () => {
      const { getByTestId } = render(<Stack direction="vertical" testId="stack" />)

      expect(getByTestId('stack')).toHaveStyle('flex-direction: column')
    })
  })
})

/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { css } from 'Foundation'
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

  describe('Supports BezierComponentProps interface', () => {
    it('supports as prop', () => {
      const { getByTestId } = render(<Stack direction="horizontal" testId="stack" as="main" />)

      expect(getByTestId('stack').tagName).toBe('MAIN')
    })

    it('supports style prop', () => {
      const { getByTestId } = render(<Stack direction="horizontal" testId="stack" style={{ backgroundColor: 'red' }} />)

      expect(getByTestId('stack')).toHaveStyle({ 'background-color': 'red' })
    })

    it('supports className prop', () => {
      const { getByTestId } = render(<Stack direction="horizontal" testId="stack" className="foo" />)

      expect(getByTestId('stack')).toHaveClass('foo')
    })

    it('supports interpolation prop', () => {
      const { getByTestId } = render(<Stack direction="horizontal" testId="stack" interpolation={css`background-color: red;`} />)

      expect(getByTestId('stack')).toHaveStyle({ 'background-color': 'red' })
    })
  })
})

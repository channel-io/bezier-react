/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { css } from '~/src/foundation'
import { render } from '~/src/utils/testUtils'
import { AlphaStack } from './AlphaStack'

describe('alpha-Stack', () => {
  describe('Flex layout', () => {
    it('creates a flexbox', () => {
      const { getByTestId } = render(<AlphaStack direction="horizontal" testId="alpha-stack" />)

      expect(getByTestId('alpha-stack')).toHaveStyle('display: flex')
    })

    it('creates a horizontal flexbox when given direction="horizontal"', () => {
      const { getByTestId } = render(<AlphaStack direction="horizontal" testId="alpha-stack" spacing={10} />)

      expect(getByTestId('alpha-stack')).toHaveStyle('flex-direction: row')
      expect(getByTestId('alpha-stack')).toHaveStyle('gap: 10px')
    })

    it('creates a vertical flexbox when given direction="vertical"', () => {
      const { getByTestId } = render(<AlphaStack direction="vertical" testId="alpha-stack" spacing={10} />)

      expect(getByTestId('alpha-stack')).toHaveStyle('flex-direction: column')
      expect(getByTestId('alpha-stack')).toHaveStyle('gap: 10px')
    })
  })

  describe('Supports BezierComponentProps interface', () => {
    it('supports as prop', () => {
      const { getByTestId } = render(<AlphaStack direction="horizontal" testId="alpha-stack" as="main" />)

      expect(getByTestId('alpha-stack').tagName).toBe('MAIN')
    })

    it('supports style prop', () => {
      const { getByTestId } = render(<AlphaStack direction="horizontal" testId="alpha-stack" style={{ backgroundColor: 'red' }} />)

      expect(getByTestId('alpha-stack')).toHaveStyle({ 'background-color': 'red' })
    })

    it('supports className prop', () => {
      const { getByTestId } = render(<AlphaStack direction="horizontal" testId="alpha-stack" className="foo" />)

      expect(getByTestId('alpha-stack')).toHaveClass('foo')
    })

    it('supports interpolation prop', () => {
      const { getByTestId } = render(<AlphaStack direction="horizontal" testId="alpha-stack" interpolation={css`background-color: red;`} />)

      expect(getByTestId('alpha-stack')).toHaveStyle({ 'background-color': 'red' })
    })
  })
})

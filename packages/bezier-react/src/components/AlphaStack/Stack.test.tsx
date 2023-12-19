import React from 'react'

import { render } from '~/src/utils/test'

import { Stack } from './Stack'

import styles from './Stack.module.scss'

describe('Stack', () => {
  describe('Flex layout', () => {
    it('creates a flexbox', () => {
      const { getByTestId } = render(<Stack direction="horizontal" testId="stack" />)
      expect(getByTestId('stack')).toHaveClass(styles.Stack)
      expect(getByTestId('stack')).toHaveClass(styles['display-flex'])
    })

    it('creates a horizontal flexbox when given direction="horizontal"', () => {
      const { getByTestId } = render(<Stack direction="horizontal" testId="stack" gap={10} />)
      expect(getByTestId('stack')).toHaveClass(styles['direction-horizontal'])
      expect(getByTestId('stack')).toHaveStyle('--b-stack-gap: 10px')
    })

    it('creates a vertical flexbox when given direction="vertical"', () => {
      const { getByTestId } = render(<Stack direction="vertical" testId="stack" gap={10} />)
      expect(getByTestId('stack')).toHaveClass(styles['direction-vertical'])
      expect(getByTestId('stack')).toHaveStyle('--b-stack-gap: 10px')
    })
  })

  describe('Supports BezierComponentProps interface', () => {
    it('supports style prop', () => {
      const { getByTestId } = render(<Stack direction="horizontal" testId="stack" style={{ backgroundColor: 'red' }} />)
      expect(getByTestId('stack')).toHaveStyle({ 'background-color': 'red' })
    })

    it('supports className prop', () => {
      const { getByTestId } = render(<Stack direction="horizontal" testId="stack" className="foo" />)
      expect(getByTestId('stack')).toHaveClass('foo')
    })
  })
})

/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { css } from '~/src/foundation'

import { render } from '~/src/utils/testUtils'

import { StackItem } from '~/src/components/Stack/StackItem'

import { Stack } from './Stack'

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

  it('gives marginBefore attribute to second stackItem if it is given some spacing', () => {
    const spacing = 10

    const { getByTestId } = render(
      <Stack direction="horizontal" spacing={spacing}>
        <StackItem testId="one" />
        <StackItem testId="two" />
        <StackItem testId="three" />
      </Stack>,
    )

    expect(getByTestId('one')).not.toHaveStyle('--margin-before: 10px')
    expect(getByTestId('two')).toHaveStyle('--margin-before: 10px')
    expect(getByTestId('three')).toHaveStyle('--margin-before: 10px')
  })

  it('does not give marginBefore attribute to first stackItem if first node is not a valid ReactNode', () => {
    const spacing = 10

    const { getByTestId } = render(
      <Stack direction="horizontal" spacing={spacing}>
        { false }
        { null }
        abc
        <StackItem testId="one" />
        <StackItem testId="two" />
        <StackItem testId="three" />
      </Stack>,
    )

    expect(getByTestId('one')).not.toHaveStyle('--margin-before: 10px')
    expect(getByTestId('two')).toHaveStyle('--margin-before: 10px')
    expect(getByTestId('three')).toHaveStyle('--margin-before: 10px')
  })
})

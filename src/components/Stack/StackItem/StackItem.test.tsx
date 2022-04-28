/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { css } from 'Foundation'
import { render } from 'Utils/testUtils'
import { Stack } from 'Components/Stack'
import StackItem from './StackItem'

describe('StackItem', () => {
  describe('Supports BezierComponentProps interface', () => {
    it('supports as prop', () => {
      const { getByTestId } = render(<StackItem testId="stack-item" as="main" />)

      expect(getByTestId('stack-item').tagName).toBe('MAIN')
    })

    it('supports style prop', () => {
      const { getByTestId } = render(<StackItem testId="stack-item" style={{ color: 'blue' }} />)

      expect(getByTestId('stack-item')).toHaveStyle({ color: 'blue' })
    })

    it('supports className prop', () => {
      const { getByTestId } = render(<StackItem testId="stack-item" className="foo" />)

      expect(getByTestId('stack-item')).toHaveClass('foo')
    })

    it('supports interpolation prop', () => {
      const { getByTestId } = render(<StackItem testId="stack-item" interpolation={css`visibility: hidden;`} />)

      expect(getByTestId('stack-item')).toHaveStyle({ visibility: 'hidden' })
    })
  })

  it('inherits main axis alignment of parent stack-item component', () => {
    const { getByTestId } = render(
      <Stack direction="horizontal" justify="start">
        <StackItem testId="item">
          <div />
        </StackItem>
      </Stack>,
    )

    expect(getByTestId('item')).toHaveStyle({ 'justify-content': '' })
    expect(getByTestId('item')).toHaveStyle({ 'justify-self': '' })
  })

  it('can override main axis alignment of parent stack component', () => {
    const { getByTestId } = render(
      <Stack direction="horizontal" justify="start">
        <StackItem testId="item-start" justify="start">
          <div />
        </StackItem>

        <StackItem testId="item-center" justify="center">
          <div />
        </StackItem>

        <StackItem testId="item-end" justify="end">
          <div />
        </StackItem>

        <StackItem testId="item-stretch" justify="stretch">
          <div />
        </StackItem>
      </Stack>,
    )

    expect(getByTestId('item-start')).toHaveStyle({ 'justify-self': 'flex-start' })
    expect(getByTestId('item-center')).toHaveStyle({ 'justify-self': 'center' })
    expect(getByTestId('item-end')).toHaveStyle({ 'justify-self': 'flex-end' })
    expect(getByTestId('item-stretch')).toHaveStyle({ 'justify-self': 'stretch' })
  })

  it('inherits cross axis alignment of parent stack component', () => {
    const { getByTestId } = render(
      <Stack direction="horizontal" align="start">
        <StackItem testId="item">
          <div />
        </StackItem>
      </Stack>,
    )

    expect(getByTestId('item')).toHaveStyle({ 'align-items': '' })
    expect(getByTestId('item')).toHaveStyle({ 'align-self': '' })
  })

  it('can override cross axis alignment of parent stack component', () => {
    const { getByTestId } = render(
      <Stack direction="horizontal" align="center">
        <StackItem testId="item-start" align="start">
          <div />
        </StackItem>

        <StackItem testId="item-center" align="center">
          <div />
        </StackItem>

        <StackItem testId="item-end" align="end">
          <div />
        </StackItem>

        <StackItem testId="item-stretch" align="stretch">
          <div />
        </StackItem>
      </Stack>,
    )

    expect(getByTestId('item-start')).toHaveStyle({ 'align-self': 'flex-start' })
    expect(getByTestId('item-center')).toHaveStyle({ 'align-self': 'center' })
    expect(getByTestId('item-end')).toHaveStyle({ 'align-self': 'flex-end' })
    expect(getByTestId('item-stretch')).toHaveStyle({ 'align-self': 'stretch' })
  })
})

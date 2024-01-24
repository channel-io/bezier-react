import React from 'react'

import { render } from '~/src/utils/test'

import { LegacyStack } from '~/src/components/LegacyStack'

import { LegacyStackItem } from './LegacyStackItem'

import styles from './LegacyStackItem.module.scss'

describe('StackItem', () => {
  describe('Supports BezierComponentProps interface', () => {
    it('supports as prop', () => {
      const { getByTestId } = render(<LegacyStackItem testId="stack-item" as="main" />)

      expect(getByTestId('stack-item').tagName).toBe('MAIN')
    })

    it('supports style prop', () => {
      const { getByTestId } = render(<LegacyStackItem testId="stack-item" style={{ color: 'blue' }} />)

      expect(getByTestId('stack-item')).toHaveStyle({ color: 'blue' })
    })

    it('supports className prop', () => {
      const { getByTestId } = render(<LegacyStackItem testId="stack-item" className="foo" />)

      expect(getByTestId('stack-item')).toHaveClass('foo')
    })
  })

  it('inherits main axis alignment of parent stack-item component', () => {
    const { getByTestId } = render(
      <LegacyStack direction="horizontal" justify="start">
        <LegacyStackItem testId="item">
          <div />
        </LegacyStackItem>
      </LegacyStack>,
    )

    expect(getByTestId('item')).not.toHaveClass(styles['justify-start'])
  })

  it('can override main axis alignment of parent stack component', () => {
    const { getByTestId } = render(
      <LegacyStack direction="horizontal" justify="start">
        <LegacyStackItem testId="item-start" justify="start">
          <div />
        </LegacyStackItem>

        <LegacyStackItem testId="item-center" justify="center">
          <div />
        </LegacyStackItem>

        <LegacyStackItem testId="item-end" justify="end">
          <div />
        </LegacyStackItem>

        <LegacyStackItem testId="item-stretch" justify="stretch">
          <div />
        </LegacyStackItem>
      </LegacyStack>,
    )

    expect(getByTestId('item-start')).toHaveClass(styles['justify-start'])
    expect(getByTestId('item-center')).toHaveClass(styles['justify-center'])
    expect(getByTestId('item-end')).toHaveClass(styles['justify-end'])
    expect(getByTestId('item-stretch')).toHaveClass(styles['justify-stretch'])
  })

  it('inherits cross axis alignment of parent stack component', () => {
    const { getByTestId } = render(
      <LegacyStack direction="horizontal" align="start">
        <LegacyStackItem testId="item">
          <div />
        </LegacyStackItem>
      </LegacyStack>,
    )

    expect(getByTestId('item')).not.toHaveClass(styles['align-start'])
  })

  it('can override cross axis alignment of parent stack component', () => {
    const { getByTestId } = render(
      <LegacyStack direction="horizontal" align="center">
        <LegacyStackItem testId="item-start" align="start">
          <div />
        </LegacyStackItem>

        <LegacyStackItem testId="item-center" align="center">
          <div />
        </LegacyStackItem>

        <LegacyStackItem testId="item-end" align="end">
          <div />
        </LegacyStackItem>

        <LegacyStackItem testId="item-stretch" align="stretch">
          <div />
        </LegacyStackItem>
      </LegacyStack>,
    )

    expect(getByTestId('item-start')).toHaveClass(styles['align-start'])
    expect(getByTestId('item-center')).toHaveClass(styles['align-center'])
    expect(getByTestId('item-end')).toHaveClass(styles['align-end'])
    expect(getByTestId('item-stretch')).toHaveClass(styles['align-stretch'])
  })

  describe('dimensions', () => {
    it('should set all of customizable css variables', () => {
      const REQUIRED_CSS_VARS = [
        '--b-main-axis-size',
        '--b-grow-weight',
        '--b-shrink-weight',
        '--b-margin-before',
        '--b-margin-after',
      ]

      const TEST_IDS = ['one', 'two', 'three', 'four']

      const { getByTestId } = render(
        <LegacyStack direction="horizontal">
          <LegacyStackItem testId="one" />
          <LegacyStackItem testId="two" grow shrink weight={1} />
          <LegacyStackItem testId="three" marginBefore={16} shrink weight={2} />
          <LegacyStackItem testId="four" style={{ color: 'red' }} marginAfter={20} size={32} />
        </LegacyStack>,
      )

      TEST_IDS
        .map(id => getByTestId(id))
        .forEach(el => REQUIRED_CSS_VARS
          .forEach(field => expect(el.style.getPropertyValue(field)).not.toBe('')))
    })
  })
})

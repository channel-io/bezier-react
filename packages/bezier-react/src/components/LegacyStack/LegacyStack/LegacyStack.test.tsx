import { render } from '~/src/utils/test'

import { LegacyStackItem } from '~/src/components/LegacyStack/LegacyStackItem'

import { LegacyStack } from './LegacyStack'

import styles from './LegacyStack.module.scss'

describe('Stack', () => {
  describe('Flex layout', () => {
    it('creates a flexbox', () => {
      const { getByTestId } = render(
        <LegacyStack
          direction="horizontal"
          data-testid="stack"
        />
      )

      expect(getByTestId('stack')).toHaveClass(styles.LegacyStack)
    })

    it('creates a horizontal flexbox when given direction="horizontal"', () => {
      const { getByTestId } = render(
        <LegacyStack
          direction="horizontal"
          data-testid="stack"
        />
      )

      expect(getByTestId('stack')).toHaveClass(styles['direction-horizontal'])
    })

    it('creates a vertical flexbox when given direction="vertical"', () => {
      const { getByTestId } = render(
        <LegacyStack
          direction="vertical"
          data-testid="stack"
        />
      )

      expect(getByTestId('stack')).toHaveClass(styles['direction-vertical'])
    })
  })

  describe('Supports BezierComponentProps interface', () => {
    it('supports as prop', () => {
      const { getByTestId } = render(
        <LegacyStack
          direction="horizontal"
          data-testid="stack"
          as="main"
        />
      )

      expect(getByTestId('stack').tagName).toBe('MAIN')
    })

    it('supports style prop', () => {
      const { getByTestId } = render(
        <LegacyStack
          direction="horizontal"
          data-testid="stack"
          style={{ backgroundColor: 'red' }}
        />
      )

      expect(getByTestId('stack')).toHaveStyle({ 'background-color': 'red' })
    })

    it('supports className prop', () => {
      const { getByTestId } = render(
        <LegacyStack
          direction="horizontal"
          data-testid="stack"
          className="foo"
        />
      )

      expect(getByTestId('stack')).toHaveClass('foo')
    })
  })

  it('gives marginBefore attribute to second stackItem if it is given some spacing', () => {
    const spacing = 10

    const { getByTestId } = render(
      <LegacyStack
        direction="horizontal"
        spacing={spacing}
      >
        <LegacyStackItem data-testid="one" />
        <LegacyStackItem data-testid="two" />
        <LegacyStackItem data-testid="three" />
      </LegacyStack>
    )

    expect(getByTestId('one')).not.toHaveStyle('--b-margin-before: 10px')
    expect(getByTestId('two')).toHaveStyle('--b-margin-before: 10px')
    expect(getByTestId('three')).toHaveStyle('--b-margin-before: 10px')
  })

  it('does not give marginBefore attribute to first stackItem if first node is not a valid ReactNode', () => {
    const spacing = 10

    const { getByTestId } = render(
      <LegacyStack
        direction="horizontal"
        spacing={spacing}
      >
        {false}
        {null}
        abc
        <LegacyStackItem data-testid="one" />
        <LegacyStackItem data-testid="two" />
        <LegacyStackItem data-testid="three" />
      </LegacyStack>
    )

    expect(getByTestId('one')).not.toHaveStyle('--b-margin-before: 10px')
    expect(getByTestId('two')).toHaveStyle('--b-margin-before: 10px')
    expect(getByTestId('three')).toHaveStyle('--b-margin-before: 10px')
  })
})

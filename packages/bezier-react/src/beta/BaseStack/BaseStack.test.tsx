import * as React from 'react'


import { render } from '~/src/utils/test'

import { BaseStack } from './BaseStack'
import { type BaseStackProps } from './BaseStack.types'

import styles from './BaseStack.module.scss'


describe('BaseStack', () => {
  const renderBaseStack = (props?: Partial<BaseStackProps>) =>
    render(
      <BaseStack
        direction="horizontal"
        {...props}
      >
        Hello, Channel!
      </BaseStack>
    )

  it('should render with default flex style', () => {
    const { getByText } = renderBaseStack()
    const rendered = getByText('Hello, Channel!')

    expect(rendered).toHaveClass(styles.BaseStack)
    expect(rendered).toHaveClass(styles['display-flex'])
    expect(rendered).toHaveClass(styles['direction-horizontal'])
  })

  it('should render as the given element', () => {
    const { getByText } = renderBaseStack({ as: 'section' })
    const rendered = getByText('Hello, Channel!')

    expect(rendered.tagName).toBe('SECTION')
  })

  it('should forward ref', () => {
    const ref = React.createRef<HTMLElement>()

    render(
      <BaseStack
        ref={ref}
        direction="horizontal"
      />
    )

    expect(ref.current).toBeInTheDocument()
  })

  it('should receive layout styles', () => {
    const { getByText } = renderBaseStack({
      direction: 'vertical',
      justify: 'center',
      align: 'end',
      spacing: 10,
      reverse: true,
      wrap: true,
      className: 'test-class',
    })
    const rendered = getByText('Hello, Channel!')

    expect(rendered).toHaveClass(styles['direction-vertical'])
    expect(rendered).toHaveClass(styles['justify-center'])
    expect(rendered).toHaveClass(styles['align-end'])
    expect(rendered).toHaveClass(styles.reverse)
    expect(rendered).toHaveClass(styles.wrap)
    expect(rendered).toHaveClass('test-class')
    expect(rendered).toHaveStyle('--b-stack-spacing: 10px')
  })

  it('should receive margin and layout props', () => {
    const { getByText } = renderBaseStack({
      width: '100px',
      marginTop: 10,
      style: { backgroundColor: 'red' },
    })
    const rendered = getByText('Hello, Channel!')

    expect(rendered).toHaveStyle('--b-width: 100px')
    expect(rendered).toHaveStyle('--b-margin-top: 10px')
    expect(rendered).toHaveStyle('background-color: red')
  })
})

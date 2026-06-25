import * as React from 'react'


import { render } from '~/src/utils/test'

import { Box } from './Box'
import { type BoxProps } from './Box.types'

import styles from './Box.module.scss'


describe('Box', () => {
  const renderBox = (props?: Partial<BoxProps>) =>
    render(<Box {...props}>Hello, Channel!</Box>)

  it('should render with default style', () => {
    const { getByText } = renderBox()
    const rendered = getByText('Hello, Channel!')

    expect(rendered).toHaveClass(styles.Box)
  })

  it('should render as the given element', () => {
    const { getByText } = renderBox({ as: 'section' })
    const rendered = getByText('Hello, Channel!')

    expect(rendered.tagName).toBe('SECTION')
  })

  it('should forward ref', () => {
    const ref = React.createRef<HTMLElement>()

    render(<Box ref={ref} />)

    expect(ref.current).toBeInTheDocument()
  })

  it('should receive display style', () => {
    const { getByText } = renderBox({ display: 'inline-block' })
    const rendered = getByText('Hello, Channel!')

    expect(rendered).toHaveClass(styles['display-inline-block'])
  })

  it('should receive layout and margin styles', () => {
    const { getByText } = renderBox({
      width: '100px',
      marginTop: 10,
      style: { backgroundColor: 'red' },
      className: 'test-class',
    })
    const rendered = getByText('Hello, Channel!')

    expect(rendered).toHaveStyle('--b-width: 100px')
    expect(rendered).toHaveStyle('--b-margin-top: 10px')
    expect(rendered).toHaveStyle('background-color: red')
    expect(rendered).toHaveClass('test-class')
  })
})

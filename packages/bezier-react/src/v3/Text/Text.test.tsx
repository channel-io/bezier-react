import * as React from 'react'

import { colorTokenCssVar } from '~/src/utils/style'
import { render } from '~/src/utils/test'

import { Text } from './Text'
import { type TextProps } from './Text.types'

import styles from './Text.module.scss'

const TEXT = 'Hello, Channel!'

describe('Text', () => {
  const renderText = (props?: Partial<TextProps>) =>
    render(<Text {...props}>{TEXT}</Text>)

  it('should have default style', () => {
    const { getByText } = renderText()
    const rendered = getByText(TEXT)

    expect(rendered).toHaveClass(styles.Text)
    expect(rendered).toHaveClass(styles['typo-15'])
  })

  it('should render as the given element', () => {
    const { getByText } = renderText({ as: 'p' })
    const rendered = getByText(TEXT)

    expect(rendered.tagName).toBe('P')
  })

  it('should forward ref', () => {
    const ref = React.createRef<HTMLElement>()

    render(<Text ref={ref}>{TEXT}</Text>)

    expect(ref.current).toBeInTheDocument()
  })

  it('should receive color and font weight', () => {
    const { getByText } = renderText({
      color: 'text-neutral',
      fontWeight: '600',
    })
    const rendered = getByText(TEXT)

    expect(rendered).toHaveStyle(
      `--b-text-color: ${colorTokenCssVar('text-neutral')}`
    )
    expect(rendered).toHaveStyle(
      '--b-text-font-weight: var(--typography-font-weight-600)'
    )
  })

  it('should receive text styles', () => {
    const { getByText } = renderText({
      bold: true,
      italic: true,
      align: 'center',
      typo: '24',
    })
    const rendered = getByText(TEXT)

    expect(rendered).toHaveClass(styles.bold)
    expect(rendered).toHaveClass(styles.italic)
    expect(rendered).toHaveClass(styles['align-center'])
    expect(rendered).toHaveClass(styles['typo-24'])
  })

  it('should receive truncated style', () => {
    const { getByText } = renderText({ truncated: true })
    const rendered = getByText(TEXT)

    expect(rendered).toHaveClass(styles.truncated)
  })

  it('should receive multi-line truncated style', () => {
    const { getByText } = renderText({ truncated: 2 })
    const rendered = getByText(TEXT)

    expect(rendered).toHaveClass(styles['multi-line-truncated'])
    expect(rendered).toHaveStyle('--b-text-line-clamp: 2')
  })
})

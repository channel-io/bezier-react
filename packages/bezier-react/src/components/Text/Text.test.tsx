import React from 'react'

import { render } from '~/src/utils/test'

import { Text } from './Text'
import { type TextProps } from './Text.types'

const TEXT = 'Hello, Channel!'

describe('Text', () => {
  let props: TextProps

  beforeEach(() => {
    props = {
      children: TEXT,
    }
  })

  const renderComponent = (optionProps?: TextProps) => render(<Text {...props} {...optionProps} />)

  it('should have default style', () => {
    const { getByText } = renderComponent()
    const rendered = getByText(TEXT)
    expect(rendered).toHaveStyle('color: var(--b-text-color, inherit);')
    expect(rendered).toHaveStyle('font-style: normal;')
    expect(rendered).toHaveStyle('font-weight: var(--font-weight-400);')
    expect(rendered).toHaveStyle('transition: color var(--transition-s);')
  })

  it('should receives bold style', () => {
    const { getByText } = renderComponent({ bold: true })
    const rendered = getByText(TEXT)
    expect(rendered).toHaveStyle('font-weight: var(--font-weight-700);')
  })

  it('should receives italic style', () => {
    const { getByText } = renderComponent({ italic: true })
    const rendered = getByText(TEXT)
    expect(rendered).toHaveStyle('font-style: italic;')
  })

  it('should receives truncated style', () => {
    const { getByText } = renderComponent({ truncated: true })
    const rendered = getByText(TEXT)
    expect(rendered).toHaveStyle('display: block;')
    expect(rendered).toHaveStyle('overflow: hidden;')
    expect(rendered).toHaveStyle('text-overflow: ellipsis;')
    expect(rendered).toHaveStyle('white-space: nowrap;')
  })

  it('should receives style object', () => {
    const { getByText } = renderComponent({ style: { color: 'skyblue' } })
    const rendered = getByText(TEXT)
    expect(rendered).toHaveStyle('color: skyblue;')
  })

  it('should receives typo', () => {
    const { getByText } = renderComponent({ typo: '24' })
    const rendered = getByText(TEXT)
    expect(rendered).toHaveStyle('font-size: var(--typography-size-24-font-size);')
    expect(rendered).toHaveStyle('line-height: var(--typography-size-24-line-height);')
    expect(rendered).toHaveStyle('letter-spacing: var(--typography-size-24-letter-spacing);')
  })
})

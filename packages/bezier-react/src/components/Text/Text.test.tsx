/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { Typography } from 'Foundation'
import { render } from 'Utils/testUtils'
import { Text } from './Text'
import { TextProps } from './Text.types'

const TEXT = 'hello, world'

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
    const renderedText = getByText(TEXT)
    expect(renderedText).toHaveStyle('--bezier-text-font-size: 1.5rem;')
    expect(renderedText).toHaveStyle('font-size: var(--bezier-text-font-size);')
    expect(renderedText).toHaveStyle('--bezier-text-font-weight: normal;')
    expect(renderedText).toHaveStyle('font-weight: var(--bezier-text-font-weight);')
    expect(renderedText).toHaveStyle('--bezier-text-font-style: normal;')
    expect(renderedText).toHaveStyle('font-style: var(--bezier-text-font-style);')
    expect(renderedText).toHaveStyle('--bezier-text-font-color: inherit;')
    expect(renderedText).toHaveStyle('color: var(--bezier-text-font-color);')
  })

  it('should receive bold style', () => {
    const { getByText } = renderComponent({ bold: true })
    const renderedText = getByText(TEXT)
    expect(renderedText).toHaveStyle('--bezier-text-font-weight: bold;')
    expect(renderedText).toHaveStyle('font-weight: var(--bezier-text-font-weight);')
  })

  it('should receive italic style', () => {
    const { getByText } = renderComponent({ italic: true })
    const renderedText = getByText(TEXT)
    expect(renderedText).toHaveStyle('--bezier-text-font-style: italic;')
    expect(renderedText).toHaveStyle('font-style: var(--bezier-text-font-style);')
  })

  it('should receive style object', () => {
    const { getByText } = renderComponent({ style: { color: 'skyblue' } })
    const renderedText = getByText(TEXT)
    expect(renderedText).toHaveStyle('color: skyblue;')
  })

  it('should receive typo from styled component css', () => {
    const { getByText } = renderComponent({ typo: Typography.Size24 })
    const renderedText = getByText(TEXT)
    expect(renderedText).toHaveStyle('--bezier-text-font-size: 2.4rem;')
    expect(renderedText).toHaveStyle('--bezier-text-line-height: 3.2rem;')
    expect(renderedText).toHaveStyle('font-size: var(--bezier-text-font-size);')
    expect(renderedText).toHaveStyle('line-height: var(--bezier-text-line-height);')
  })
})

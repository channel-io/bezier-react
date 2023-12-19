import React from 'react'

import { render } from '~/src/utils/test'

import { Text } from './Text'
import { type TextProps } from './Text.types'

import styles from './Text.module.scss'

const TEXT = 'Hello, Channel!'

describe('Text', () => {
  const renderComponent = (props?: TextProps) => render(<Text {...props}>{ TEXT }</Text>)

  it('should have default style', () => {
    const { getByText } = renderComponent()
    const rendered = getByText(TEXT)
    expect(rendered).toHaveClass(styles.Text)
  })

  it('should receives bold style', () => {
    const { getByText } = renderComponent({ bold: true })
    const rendered = getByText(TEXT)
    expect(rendered).toHaveClass(styles.bold)
  })

  it('should receives italic style', () => {
    const { getByText } = renderComponent({ italic: true })
    const rendered = getByText(TEXT)
    expect(rendered).toHaveClass(styles.italic)
  })

  it('should receives truncated style', () => {
    const { getByText } = renderComponent({ truncated: true })
    const rendered = getByText(TEXT)
    expect(rendered).toHaveClass(styles.truncated)
  })

  it('should receives align style', () => {
    const { getByText } = renderComponent({ align: 'center' })
    const rendered = getByText(TEXT)
    expect(rendered).toHaveClass(styles['align-center'])
  })

  it('should receives typo', () => {
    const { getByText } = renderComponent({ typo: '24' })
    const rendered = getByText(TEXT)
    expect(rendered).toHaveClass(styles['typo-24'])
  })
})

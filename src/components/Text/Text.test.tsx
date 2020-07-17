/* External dependencies */
import React from 'react'
import { render } from '@testing-library/react'

/* Internal dependencies */
import Typography from '../../styling/Typography'
import Text, { TEXT_TEST_ID } from './Text'
import TextProps from './Text.types'

describe('Text test >', () => {
  let props: TextProps

  beforeEach(() => {
    props = {
      children: 'hello, world',
    }
  })

  const renderComponent = (optionProps?: TextProps) => render(<Text {...props} {...optionProps}/>)

  it('Text have default style', () => {
    const { getByTestId } = renderComponent()

    const renderedText = getByTestId(TEXT_TEST_ID)

    expect(renderedText).toHaveStyle('font-size: 15px;')
    expect(renderedText).toHaveStyle('font-weight: normal;')
    expect(renderedText).toHaveStyle('font-style: normal;')
    expect(renderedText).toHaveStyle('color: black;')
  })

  it('Text recieves bold style', () => {
    const { getByTestId } = renderComponent({ bold: true })

    const renderedText = getByTestId(TEXT_TEST_ID)

    expect(renderedText).toHaveStyle('font-weight: bold;')
  })

  it('Text recieves bold style', () => {
    const { getByTestId } = renderComponent({ italic: true })

    const renderedText = getByTestId(TEXT_TEST_ID)

    expect(renderedText).toHaveStyle('font-style: italic;')
  })

  it('Text recieves style object', () => {
    const { getByTestId } = renderComponent({ style: { color: 'skyblue' } })

    const renderedText = getByTestId(TEXT_TEST_ID)

    expect(renderedText).toHaveStyle('color: skyblue;')
  })

  it('Text recieves typo from styled component css', () => {
    const { getByTestId } = renderComponent({ typo: Typography.Size24 })

    const renderedText = getByTestId(TEXT_TEST_ID)

    expect(renderedText).toHaveStyle('font-size: 24px;')
    expect(renderedText).toHaveStyle('line-height: 32px;')
  })
})

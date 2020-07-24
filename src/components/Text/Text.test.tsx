/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from '../../utils/testUtils'
import { Typography } from '../../foundation'
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
  })

  it('Text receives bold style', () => {
    const { getByTestId } = renderComponent({ bold: true })

    const renderedText = getByTestId(TEXT_TEST_ID)

    expect(renderedText).toHaveStyle('font-weight: bold;')
  })

  it('Text receives bold style', () => {
    const { getByTestId } = renderComponent({ italic: true })

    const renderedText = getByTestId(TEXT_TEST_ID)

    expect(renderedText).toHaveStyle('font-style: italic;')
  })

  it('Text receives style object', () => {
    const { getByTestId } = renderComponent({ style: { color: 'skyblue' } })

    const renderedText = getByTestId(TEXT_TEST_ID)

    expect(renderedText).toHaveStyle('color: skyblue;')
  })

  it('Text receives typo from styled component css', () => {
    const { getByTestId } = renderComponent({ typo: Typography.Size24 })

    const renderedText = getByTestId(TEXT_TEST_ID)

    expect(renderedText).toHaveStyle('font-size: 24px;')
    expect(renderedText).toHaveStyle('line-height: 32px;')
  })

  it('Text inherits parent color if recieves option', () => {
    const { getByTestId } = renderComponent({ inheritColor: true })

    const renderedText = getByTestId(TEXT_TEST_ID)

    expect(renderedText).toHaveStyle('color: inherit;')
  })
})

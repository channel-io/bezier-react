/* External dependencies */
import React from 'react'
import { render } from '@testing-library/react'

/* Internal dependencies */
import Text from './Text'
import TextProps from './Text.types'

describe('Text', () => {
  let props: TextProps

  beforeEach(() => {
    props = {
      content: 'hello, world',
    }
  })

  const renderComponent = () => render(<Text {...props} />)

  it('should have primary className with default props', () => {
    const { getByTestId } = renderComponent()

    const testComponent = getByTestId('text')

    expect(testComponent).toHaveStyle('font-size: 15px')
  })
})

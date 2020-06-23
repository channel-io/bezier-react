/* External dependencies */
import React from 'react'
import { render } from '@testing-library/react'

/* Internal dependencies */
import Text from './Text'
import TextProps from './Text.types'

describe('Text 컴포넌트 테스트 >', () => {
  let props: TextProps

  beforeEach(() => {
    props = {
      content: 'hello, world',
    }
  })

  const renderComponent = () => render(<Text {...props} />)

  it('props 가 제공되지 않을 경우 기본 style 을 가지고 있다', () => {
    const { getByTestId } = renderComponent()

    const testComponent = getByTestId('text')

    expect(testComponent).toHaveStyle('font-size: 15px')
  })
})

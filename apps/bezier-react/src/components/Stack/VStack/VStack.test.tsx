/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import VStack from './VStack'

describe('VStack', () => {
  it('creates a vertical flexbox', () => {
    const { getByTestId } = render(<VStack testId="v-stack" />)

    expect(getByTestId('v-stack')).toHaveStyle('display: flex')
    expect(getByTestId('v-stack')).toHaveStyle('flex-direction: column')
  })
})

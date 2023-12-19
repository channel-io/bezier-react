import React from 'react'

import { render } from '~/src/utils/test'

import { VStack } from './VStack'

describe('VStack', () => {
  it('creates a vertical flexbox', () => {
    const { getByTestId } = render(<VStack testId="v-stack" />)

    expect(getByTestId('v-stack')).toHaveStyle('display: flex')
    expect(getByTestId('v-stack')).toHaveStyle('flex-direction: column')
  })
})

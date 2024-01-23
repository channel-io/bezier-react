import React from 'react'

import { render } from '~/src/utils/test'

import { LegacyVStack } from './LegacyVStack'

describe('VStack', () => {
  it('creates a vertical flexbox', () => {
    const { getByTestId } = render(<LegacyVStack testId="v-stack" />)

    expect(getByTestId('v-stack')).toHaveStyle('display: flex')
    expect(getByTestId('v-stack')).toHaveStyle('flex-direction: column')
  })
})

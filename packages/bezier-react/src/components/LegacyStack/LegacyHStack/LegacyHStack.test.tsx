import React from 'react'

import { render } from '~/src/utils/test'

import { LegacyHStack } from './LegacyHStack'

describe('HStack', () => {
  it('creates a horizontal flexbox', () => {
    const { getByTestId } = render(<LegacyHStack testId="h-stack" />)

    expect(getByTestId('h-stack')).toHaveStyle('display: flex')
    expect(getByTestId('h-stack')).toHaveStyle('flex-direction: row')
  })
})

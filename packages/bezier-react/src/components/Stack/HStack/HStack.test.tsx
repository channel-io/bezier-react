import React from 'react'

import { render } from '~/src/utils/testUtils'

import { HStack } from './HStack'

describe('HStack', () => {
  it('creates a horizontal flexbox', () => {
    const { getByTestId } = render(<HStack testId="h-stack" />)

    expect(getByTestId('h-stack')).toHaveStyle('display: flex')
    expect(getByTestId('h-stack')).toHaveStyle('flex-direction: row')
  })
})

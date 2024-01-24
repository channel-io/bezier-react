import React from 'react'

import { render } from '~/src/utils/test'

// eslint-disable-next-line no-restricted-imports
import styles from '../LegacyStack/LegacyStack.module.scss'

import { LegacyVStack } from './LegacyVStack'

describe('VStack', () => {
  it('creates a vertical flexbox', () => {
    const { getByTestId } = render(<LegacyVStack testId="v-stack" />)

    expect(getByTestId('v-stack')).toHaveClass(styles['direction-vertical'])
  })
})

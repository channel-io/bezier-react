import React from 'react'

import { render } from '~/src/utils/test'

// eslint-disable-next-line no-restricted-imports
import styles from '../LegacyStack/LegacyStack.module.scss'

import { LegacyHStack } from './LegacyHStack'

describe('HStack', () => {
  it('creates a horizontal flexbox', () => {
    const { getByTestId } = render(<LegacyHStack testId="h-stack" />)

    expect(getByTestId('h-stack')).toHaveClass(styles['direction-horizontal'])
  })
})

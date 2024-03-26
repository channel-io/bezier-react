import React from 'react'

import { render } from '~/src/utils/test'

import { BADGE_TEST_ID, Badge } from './Badge'
import { type BadgeProps } from './Badge.types'

describe('Badge test >', () => {
  let props: BadgeProps

  beforeEach(() => {
    props = {}
  })

  const renderBadge = (optionProps?: BadgeProps) =>
    render(
      <Badge
        {...props}
        {...optionProps}
      />
    )

  it('Snapshot >', () => {
    const { getByTestId } = renderBadge()
    const badge = getByTestId(BADGE_TEST_ID)

    expect(badge).toMatchSnapshot()
  })
})

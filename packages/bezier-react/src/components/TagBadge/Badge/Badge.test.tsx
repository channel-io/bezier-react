/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { RoundAbsoluteNumber } from '~/src/foundation'
import { render } from '~/src/utils/testUtils'
import {
  TagBadgeSize,
  getProperTagBadgePadding,
} from '~/src/components/TagBadge/TagBadgeCommon'
import { TAGBADGE_VERTICAL_PADDING } from '~/src/components/TagBadge/TagBadgeCommon/constants/TagBadgeStyle'
import {
  Badge,
  BADGE_TEST_ID,
} from './Badge'
import type BadgeProps from './Badge.types'

describe('Badge test >', () => {
  let props: BadgeProps

  beforeEach(() => {
    props = {}
  })

  const renderBadge = (optionProps?: BadgeProps) => render(<Badge {...props} {...optionProps} />)

  it('Snapshot >', () => {
    const { getByTestId } = renderBadge()
    const badge = getByTestId(BADGE_TEST_ID)

    expect(badge).toMatchSnapshot()
  })

  describe('Size Test >', () => {
    it('xs', () => {
      const size = TagBadgeSize.XS
      const { getByTestId } = renderBadge({ size })
      const xsBadge = getByTestId(BADGE_TEST_ID)

      expect(xsBadge).toHaveStyle(`padding: ${TAGBADGE_VERTICAL_PADDING}px ${getProperTagBadgePadding(size)}px`)
      expect(xsBadge).toHaveStyle(`border-radius: ${RoundAbsoluteNumber.R4}px`)
    })

    it('s', () => {
      const size = TagBadgeSize.S
      const { getByTestId } = renderBadge({ size })
      const xBadge = getByTestId(BADGE_TEST_ID)

      expect(xBadge).toHaveStyle(`padding: ${TAGBADGE_VERTICAL_PADDING}px ${getProperTagBadgePadding(size)}px`)
      expect(xBadge).toHaveStyle(`border-radius: ${RoundAbsoluteNumber.R6}px`)
    })
    it('m', () => {
      const size = TagBadgeSize.M
      const { getByTestId } = renderBadge({ size })
      const mBadge = getByTestId(BADGE_TEST_ID)

      expect(mBadge).toHaveStyle(`padding: ${TAGBADGE_VERTICAL_PADDING}px ${getProperTagBadgePadding(size)}px`)
      expect(mBadge).toHaveStyle(`border-radius: ${RoundAbsoluteNumber.R6}px`)
    })
    it('l', () => {
      const size = TagBadgeSize.L
      const { getByTestId } = renderBadge({ size })
      const lBadge = getByTestId(BADGE_TEST_ID)

      expect(lBadge).toHaveStyle(`padding: ${TAGBADGE_VERTICAL_PADDING}px ${getProperTagBadgePadding(size)}px`)
      expect(lBadge).toHaveStyle(`border-radius: ${RoundAbsoluteNumber.R6}px`)
    })
  })
})

import React from 'react'

import userEvent from '@testing-library/user-event'

import { RoundAbsoluteNumber } from '~/src/foundation'

import { render } from '~/src/utils/test'

import {
  TagBadgeSize,
  getProperTagBadgePadding,
} from '~/src/components/TagBadge/TagBadgeCommon'
import { TAGBADGE_VERTICAL_PADDING } from '~/src/components/TagBadge/TagBadgeCommon/constants/TagBadgeStyle'

import {
  TAG_DELETE_TEST_ID,
  TAG_TEST_ID,
  Tag,
} from './Tag'
import type TagProps from './Tag.types'

describe('Tag test >', () => {
  const user = userEvent.setup()
  let props: TagProps

  beforeEach(() => {
    props = {}
  })

  const renderTag = (optionProps?: TagProps) => render(<Tag {...props} {...optionProps} />)

  it('Snapshot >', () => {
    const { getByTestId } = renderTag()
    const tag = getByTestId(TAG_TEST_ID)

    expect(tag).toMatchSnapshot()
  })

  describe('Size Test >', () => {
    it('xs', () => {
      const size = TagBadgeSize.XS
      const { getByTestId } = renderTag({ size })
      const xsTag = getByTestId(TAG_TEST_ID)

      expect(xsTag).toHaveStyle(`padding: ${TAGBADGE_VERTICAL_PADDING}px ${getProperTagBadgePadding(size)}px`)
      expect(xsTag).toHaveStyle(`border-radius: ${RoundAbsoluteNumber.R4}px`)
    })

    it('s', () => {
      const size = TagBadgeSize.S
      const { getByTestId } = renderTag({ size })
      const sTag = getByTestId(TAG_TEST_ID)

      expect(sTag).toHaveStyle(`padding: ${TAGBADGE_VERTICAL_PADDING}px ${getProperTagBadgePadding(size)}px`)
      expect(sTag).toHaveStyle(`border-radius: ${RoundAbsoluteNumber.R6}px`)
    })
    it('m', () => {
      const size = TagBadgeSize.M
      const { getByTestId } = renderTag({ size })
      const mTag = getByTestId(TAG_TEST_ID)

      expect(mTag).toHaveStyle(`padding: ${TAGBADGE_VERTICAL_PADDING}px ${getProperTagBadgePadding(size)}px`)
      expect(mTag).toHaveStyle(`border-radius: ${RoundAbsoluteNumber.R6}px`)
    })
    it('l', () => {
      const size = TagBadgeSize.L
      const { getByTestId } = renderTag({ size })
      const lTag = getByTestId(TAG_TEST_ID)

      expect(lTag).toHaveStyle(`padding: ${TAGBADGE_VERTICAL_PADDING}px ${getProperTagBadgePadding(size)}px`)
      expect(lTag).toHaveStyle(`border-radius: ${RoundAbsoluteNumber.R6}px`)
    })
  })

  describe('Click Event Test >', () => {
    it('onClick function should be called when the tag is clicked', async () => {
      const onClickFn = jest.fn()
      const { getByTestId } = renderTag({ onClick: onClickFn })

      await user.click(getByTestId(TAG_TEST_ID))

      expect(onClickFn).toBeCalled()
    })

    it('onDelete function should be called when the delete icon is clicked', async () => {
      const onClickFn = jest.fn()
      const onDeleteFn = jest.fn()
      const { getByTestId } = renderTag({ onClick: onClickFn, onDelete: onDeleteFn })

      await user.click(getByTestId(TAG_DELETE_TEST_ID))

      expect(onDeleteFn).toBeCalled()
    })

    it('onClick function should not be called when the delete icon is clicked', async () => {
      const onClickFn = jest.fn()
      const onDeleteFn = jest.fn()
      const { getByTestId } = renderTag({ onClick: onClickFn, onDelete: onDeleteFn })

      await user.click(getByTestId(TAG_DELETE_TEST_ID))

      expect(onClickFn).not.toBeCalled()
    })
  })
})

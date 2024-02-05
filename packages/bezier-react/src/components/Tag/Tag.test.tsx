import React from 'react'

import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/test'

import {
  TAG_DELETE_TEST_ID,
  TAG_TEST_ID,
  Tag,
} from './Tag'
import { type TagProps } from './Tag.types'

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

  describe('Click Event Test >', () => {
    it('onClick function should be called when the tag is clicked', async () => {
      const onClickFn = jest.fn()
      const { getByTestId } = renderTag({ onClick: onClickFn })

      await user.click(getByTestId(TAG_TEST_ID))

      expect(onClickFn).toHaveBeenCalled()
    })

    it('onDelete function should be called when the delete icon is clicked', async () => {
      const onClickFn = jest.fn()
      const onDeleteFn = jest.fn()
      const { getByTestId } = renderTag({ onClick: onClickFn, onDelete: onDeleteFn })

      await user.click(getByTestId(TAG_DELETE_TEST_ID))

      expect(onDeleteFn).toHaveBeenCalled()
    })

    it('onClick function should not be called when the delete icon is clicked', async () => {
      const onClickFn = jest.fn()
      const onDeleteFn = jest.fn()
      const { getByTestId } = renderTag({ onClick: onClickFn, onDelete: onDeleteFn })

      await user.click(getByTestId(TAG_DELETE_TEST_ID))

      expect(onClickFn).not.toHaveBeenCalled()
    })
  })
})

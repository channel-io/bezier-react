import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/test'

import { Tag } from './Tag'
import { type TagProps } from './Tag.types'

describe('Tag test >', () => {
  const user = userEvent.setup()
  let props: TagProps

  beforeEach(() => {
    props = {}
  })
  const text = 'test'

  const renderTag = (optionProps?: TagProps) =>
    render(
      <Tag
        {...props}
        {...optionProps}
      >
        {text}
      </Tag>
    )

  describe('Click Event Test >', () => {
    it('onClick function should be called when the tag is clicked', async () => {
      const onClickFn = jest.fn()
      const { getByText } = renderTag({ onClick: onClickFn })

      await user.click(getByText(text))

      expect(onClickFn).toHaveBeenCalled()
    })

    it('onDelete function should be called when the delete icon is clicked', async () => {
      const onClickFn = jest.fn()
      const onDeleteFn = jest.fn()
      const { getByLabelText } = renderTag({
        onClick: onClickFn,
        onDelete: onDeleteFn,
      })

      await user.click(getByLabelText('delete'))

      expect(onDeleteFn).toHaveBeenCalled()
    })

    it('onClick function should not be called when the delete icon is clicked', async () => {
      const onClickFn = jest.fn()
      const onDeleteFn = jest.fn()
      const { getByLabelText } = renderTag({
        onClick: onClickFn,
        onDelete: onDeleteFn,
      })

      await user.click(getByLabelText('delete'))

      expect(onClickFn).not.toHaveBeenCalled()
    })
  })
})

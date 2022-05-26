/* External dependencies */
import React from 'react'
import { render } from 'Utils/testUtils'
import { KeyValueListItemProps } from './KeyValueListItem.types'
import KeyValueListItem, { KEY_VALUE_LIST_ITEM_TEST_ID } from './KeyValueListItem'

describe('KeyValueListItem', () => {
  let props: KeyValueListItemProps

  beforeEach(() => {
    props = {
      keyContent: 'key',
      keyIcon: 'apple',
    }
  })

  const renderedComponent = (optionProps?: Partial<KeyValueListItemProps>) => render(
    <KeyValueListItem {...props} {...optionProps}>
      thisiscontent
    </KeyValueListItem>,
  )

  it('Snapshot >', () => {
    const { getByTestId } = renderedComponent()
    const rendered = getByTestId(KEY_VALUE_LIST_ITEM_TEST_ID)

    expect(rendered).toMatchSnapshot()
  })

  it('multiline이 아니면 하나의 div를 가진다', () => {
    const { getByTestId } = renderedComponent()
    const rendered = getByTestId(KEY_VALUE_LIST_ITEM_TEST_ID)

    expect(rendered.childElementCount).toBe(1)
  })

  it('multiline이라면 key 와 value가 다른 dom에 존재한다', () => {
    const { getByTestId } = renderedComponent({ multiline: true })
    const rendered = getByTestId(KEY_VALUE_LIST_ITEM_TEST_ID)

    expect(rendered.childElementCount).toBe(2)
  })
})

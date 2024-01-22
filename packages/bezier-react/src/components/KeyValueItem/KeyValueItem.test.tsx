import React from 'react'

import {
  AppleIcon,
  BadgeIcon,
} from '@channel.io/bezier-icons'
import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/test'

import { KeyValueItem } from './KeyValueItem'
import { KEY_VALUE_ITEM_TEST_ID } from './KeyValueItem.const'
import { type KeyValueItemProps } from './KeyValueItem.types'

const DEFAULT_PROPS: KeyValueItemProps = {
  keyIcon: AppleIcon,
  keyContent: 'Key',
  children: 'Value',
}

const renderComponent = (optionProps?: Partial<KeyValueItemProps>) => render(
  <KeyValueItem {...DEFAULT_PROPS} {...optionProps} />,
)

describe('KeyValueItem', () => {
  describe('Props', () => {
    describe('keyIcon', () => {
      it('keyIcon이 Bezier의 아이콘 한 종류면, icon으로 렌더링된다.', () => {
        const keyIcon = BadgeIcon
        const { getByTestId } = renderComponent({ keyIcon })
        const rendered = getByTestId(KEY_VALUE_ITEM_TEST_ID.KEY_ITEM)
        const keyItemIcon = rendered?.firstChild
        expect(keyItemIcon?.nodeName).toEqual('svg')
      })

      it('keyIcon이 Bezier의 아이콘이 아니면, textContent로 렌더링된다.', () => {
        const keyIcon = 'NoIcon'
        const { getByTestId } = renderComponent({ keyIcon })
        const rendered = getByTestId(KEY_VALUE_ITEM_TEST_ID.KEY_ITEM)
        const keyItemIcon = rendered?.firstChild
        expect(keyItemIcon?.nodeName).toEqual('#text')
        expect(keyItemIcon?.textContent).toEqual(keyIcon)
      })
    })

    describe('keyContent', () => {
      it('keyContent가 string이면, Key의 text string으로서 렌더링된다.', () => {
        const { getByTestId } = renderComponent()
        const rendered = getByTestId(KEY_VALUE_ITEM_TEST_ID.KEY_ITEM)
        const keyItemText = rendered?.lastChild
        expect(keyItemText?.nodeName).toEqual('DIV')
        expect(keyItemText?.textContent).toEqual(DEFAULT_PROPS.keyContent)
      })

      it('keyContent가 React.Node면, Key의 text가 node로서 렌더링된다.', () => {
        const keyContent = (
          <button type="button">
            Button
          </button>
        )
        const { getByTestId } = renderComponent({ keyContent })
        const rendered = getByTestId(KEY_VALUE_ITEM_TEST_ID.KEY_ITEM)
        const keyItemText = rendered?.lastChild
        expect(keyItemText?.nodeName).toEqual('BUTTON')
        expect(keyItemText?.textContent).toEqual('Button')
      })
    })

    describe('actions', () => {
      it('actions가 없으면, ItemAction은 렌더링되지 않는다.', () => {
        const { queryByTestId } = renderComponent({ })
        const rendered = queryByTestId(KEY_VALUE_ITEM_TEST_ID.ACTIONS_ITEM)
        const actionItems = rendered
        expect(actionItems).not.toBeInTheDocument()
      })

      it('actions가 Object면, 아이콘이 1개만 렌더링된다.', () => {
        const actions = { icon: BadgeIcon }
        const { getByTestId } = renderComponent({ actions })
        const rendered = getByTestId(KEY_VALUE_ITEM_TEST_ID.ACTIONS_ITEM)
        const actionItemsCount = rendered?.childNodes.length
        expect(actionItemsCount).toEqual(1)
      })

      it('actions가 Array면, 아이콘이 여러개 렌더링된다.', () => {
        const actions = Array.from(Array(2)).map(() => ({ icon: BadgeIcon }))
        const { getByTestId } = renderComponent({ actions })
        const rendered = getByTestId(KEY_VALUE_ITEM_TEST_ID.ACTIONS_ITEM)
        const actionItemsCount = rendered?.childNodes.length
        expect(actionItemsCount).toEqual(2)
      })

      it('actions의 onClick 있으면, icon click event에서 호출된다.', async () => {
        const user = userEvent.setup()

        const actions = { icon: BadgeIcon, onClick: jest.fn() }
        const { getByTestId } = renderComponent({ actions })
        const rendered = getByTestId(KEY_VALUE_ITEM_TEST_ID.ACTIONS_ITEM)
        const actionItemIconWrapper = rendered?.firstChild
        const actionItemIcon = actionItemIconWrapper?.firstChild

        await user.click(actionItemIcon as HTMLElement)
        expect(actions.onClick).toHaveBeenCalledTimes(1)
        await user.click(actionItemIcon as HTMLElement)
        expect(actions.onClick).toHaveBeenCalledTimes(2)
      })

      it('actions의 tooltip이 있으면, tooltip이 렌더링된다.', async () => {
        const user = userEvent.setup()

        const actions = { icon: BadgeIcon, tooltip: 'tooltip' }
        const { getByRole, getByTestId } = renderComponent({ actions })
        const rendered = getByTestId(KEY_VALUE_ITEM_TEST_ID.ACTIONS_ITEM)
        const actionItemIconWrapper = rendered?.firstChild
        const actionItemIcon = actionItemIconWrapper?.firstChild

        await user.hover(actionItemIcon as HTMLElement)
        await waitFor(() => {
          expect(getByRole('tooltip')).toBeInTheDocument()
        }, { timeout: 10000 })
      })
    })

    describe('onClickKey', () => {
      it('onClickKey가 있으면, Key 영역이 click event에서 호출된다.', async () => {
        const user = userEvent.setup()

        const props: Partial<KeyValueItemProps> = {
          onClickKey: jest.fn(),
        }
        const { getByTestId } = renderComponent(props)
        const rendered = getByTestId(KEY_VALUE_ITEM_TEST_ID.ROOT)
        const keyItemContainer = rendered?.firstChild

        await user.click(keyItemContainer as Element)
        expect(props.onClickKey).toHaveBeenCalledTimes(1)
        await user.click(keyItemContainer as Element)
        expect(props.onClickKey).toHaveBeenCalledTimes(2)
      })
    })

    describe('onClickValue', () => {
      it('onClickValue가 있으면, Value 영역이 click event에서 호출된다.', async () => {
        const user = userEvent.setup()

        const props: Partial<KeyValueItemProps> = {
          onClickValue: jest.fn(),
        }
        const { getByTestId } = renderComponent(props)
        const rendered = getByTestId(KEY_VALUE_ITEM_TEST_ID.ROOT)
        const valueItemContainer = rendered?.lastChild

        await user.click(valueItemContainer as Element)
        expect(props.onClickValue).toHaveBeenCalledTimes(1)
        await user.click(valueItemContainer as Element)
        expect(props.onClickValue).toHaveBeenCalledTimes(2)
      })
    })
  })
})

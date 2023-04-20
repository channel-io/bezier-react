import React from 'react'

import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/testUtils'

import {
  AppleIcon,
  BadgeIcon,
} from '~/src/components/Icon'
import { TOOLTIP_TEST_ID } from '~/src/components/LegacyTooltip/LegacyTooltip'

import KeyValueListItem from './KeyValueListItem'
import { TEST_ID_MAP } from './KeyValueListItem.const'
import { type KeyValueListItemProps } from './KeyValueListItem.types'
import KeyValueMultiLineListItem from './KeyValueMultiLineListItem'
import type { KeyValueListItemActionProps } from './common'

const DEFAULT_PROPS: KeyValueListItemProps = {
  keyIcon: AppleIcon,
  keyContent: 'Key',
  children: 'Value',
}

const renderComponent = (optionProps?: Partial<KeyValueListItemProps>) => render(
  <KeyValueListItem {...DEFAULT_PROPS} {...optionProps} />,
)

const renderMultilineComponent = (optionProps?: Partial<KeyValueListItemProps>) => render(
  <KeyValueMultiLineListItem {...DEFAULT_PROPS} {...optionProps} />,
)

describe('KeyValueListItem', () => {
  it('Snapshot >', () => {
    const { getByTestId } = renderComponent()
    const rendered = getByTestId(TEST_ID_MAP.ROOT)
    expect(rendered).toMatchSnapshot()
  })

  describe('Props', () => {
    describe('keyIcon', () => {
      it('keyIcon이 Bezier의 아이콘 한 종류면, icon으로 렌더링된다.', () => {
        const keyIcon = BadgeIcon
        const { getByTestId } = renderComponent({ keyIcon })
        const rendered = getByTestId(TEST_ID_MAP.KEY_ITEM)
        const keyItemIcon = rendered?.firstChild
        expect(keyItemIcon?.nodeName).toEqual('svg')
      })

      it('keyIcon이 Bezier의 아이콘이 아니면, textContent로 렌더링된다.', () => {
        const keyIcon = 'NoIcon'
        const { getByTestId } = renderComponent({ keyIcon })
        const rendered = getByTestId(TEST_ID_MAP.KEY_ITEM)
        const keyItemIcon = rendered?.firstChild
        expect(keyItemIcon?.nodeName).toEqual('#text')
        expect(keyItemIcon?.textContent).toEqual(keyIcon)
      })
    })

    describe('keyContent', () => {
      it('keyContent가 string이면, Key의 text string으로서 렌더링된다.', () => {
        const { getByTestId } = renderComponent()
        const rendered = getByTestId(TEST_ID_MAP.KEY_ITEM)
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
        const rendered = getByTestId(TEST_ID_MAP.KEY_ITEM)
        const keyItemText = rendered?.lastChild
        expect(keyItemText?.nodeName).toEqual('BUTTON')
        expect(keyItemText?.textContent).toEqual('Button')
      })
    })

    describe('children', () => {
      it('children가 string이면, Value의 text string으로서 렌더링된다.', () => {
        const { getByTestId } = renderComponent()
        const rendered = getByTestId(TEST_ID_MAP.VALUE_ITEM)
        expect(rendered?.nodeName).toEqual('DIV')
        expect(rendered?.textContent).toEqual(DEFAULT_PROPS.children)
      })

      it('children가 React.Node면, Value의 text가 node로서 렌더링된다.', () => {
        const children = (
          <button type="button">
            Button
          </button>
        )
        const { getByTestId } = renderComponent({ children })
        const rendered = getByTestId(TEST_ID_MAP.VALUE_ITEM)
        const valueChildren = rendered?.firstChild
        expect(valueChildren?.nodeName).toEqual('BUTTON')
        expect(valueChildren?.textContent).toEqual('Button')
      })
    })

    describe('actions', () => {
      it('actions의 show가 true면, ActionIconWrapper display가 flex처리 된다.', () => {
        const actions: KeyValueListItemActionProps = { icon: BadgeIcon, show: true }
        const { getByTestId } = renderComponent({ actions })
        const rendered = getByTestId(TEST_ID_MAP.ACTIONS_ITEM)
        const actionItemIconWrapper = rendered?.firstChild
        expect(actionItemIconWrapper).toHaveStyle('display: flex;')
      })

      it('actions의 show가 false면, ActionIconWrapper display가 none처리 된다.', () => {
        const actions: KeyValueListItemActionProps = { icon: BadgeIcon, show: false }
        const { getByTestId } = renderComponent({ actions })
        const rendered = getByTestId(TEST_ID_MAP.ACTIONS_ITEM)
        const actionItemIconWrapper = rendered?.firstChild
        expect(actionItemIconWrapper).toHaveStyle('display: none;')
      })

      it('actions가 없으면, ItemAction은 렌더링되지 않는다.', async () => {
        const { queryByTestId } = renderComponent({ })
        const rendered = await queryByTestId(TEST_ID_MAP.ACTIONS_ITEM)
        const actionItems = rendered
        expect(actionItems).not.toBeInTheDocument()
      })

      it('actions가 Object면, 아이콘이 1개만 렌더링된다.', () => {
        const actions: KeyValueListItemActionProps = { icon: BadgeIcon }
        const { getByTestId } = renderComponent({ actions })
        const rendered = getByTestId(TEST_ID_MAP.ACTIONS_ITEM)
        const actionItemsCount = rendered?.childNodes.length
        expect(actionItemsCount).toEqual(1)
      })

      it('actions가 Array면, 아이콘이 여러개 렌더링된다.', () => {
        const actions: KeyValueListItemActionProps[] = (
          Array.from(Array(2)).map(() => ({ icon: BadgeIcon }))
        )
        const { getByTestId } = renderComponent({ actions })
        const rendered = getByTestId(TEST_ID_MAP.ACTIONS_ITEM)
        const actionItemsCount = rendered?.childNodes.length
        expect(actionItemsCount).toEqual(2)
      })

      it('actions의 icon이 렌더링된다.', () => {
        const actions: KeyValueListItemActionProps = { icon: BadgeIcon }
        const { getByTestId } = renderComponent({ actions })
        const rendered = getByTestId(TEST_ID_MAP.ACTIONS_ITEM)
        const actionItemIconWrapper = rendered?.firstChild
        const actionItemIcon = actionItemIconWrapper?.firstChild
        expect(actionItemIcon?.nodeName).toEqual('svg')
      })

      it('actions의 onClick 있으면, icon click event에서 호출된다.', async () => {
        const user = userEvent.setup()

        const actions: KeyValueListItemActionProps = { icon: BadgeIcon, onClick: jest.fn() }
        const { getByTestId } = renderComponent({ actions })
        const rendered = getByTestId(TEST_ID_MAP.ACTIONS_ITEM)
        const actionItemIconWrapper = rendered?.firstChild
        const actionItemIcon = actionItemIconWrapper?.firstChild

        await user.click(actionItemIcon as HTMLElement)
        expect(actions.onClick).toBeCalledTimes(1)
        await user.click(actionItemIcon as HTMLElement)
        expect(actions.onClick).toBeCalledTimes(2)
      })

      it('actions의 tooltip이 있으면, tooltip이 렌더링된다.', () => {
        const actions: KeyValueListItemActionProps = { icon: BadgeIcon, tooltip: 'tooltip' }
        const { getByTestId } = renderComponent({ actions })
        const rendered = getByTestId(TOOLTIP_TEST_ID)
        expect(rendered).toBeInTheDocument()
      })
    })

    describe('onClickKey', () => {
      it('onClickKey가 없으면, Key 영역의 hover/cursor 스타일이 없다.', async () => {
        const user = userEvent.setup()

        const { getByTestId } = renderComponent()
        const rendered = getByTestId(TEST_ID_MAP.ROOT)
        const keyItemContainer = rendered?.firstChild

        await user.hover(keyItemContainer as Element)
        expect(keyItemContainer).toHaveStyle('display: flex;')
        expect(keyItemContainer).toHaveStyle('align-items: flex-start;')
        expect(keyItemContainer).toHaveStyle('padding: 4px 6px;')
        expect(keyItemContainer).not.toHaveStyle('cursor: pointer;')
        // NOTE(@sol): Hovered DOM style test is not working
        // expect(keyItemContainer).not.toHaveStyle(`background-color: rgba(0, 0, 0, 0.051);`)
      })

      it('onClickKey가 있으면, Key 영역이 hover/cursor 스타일이 존재한다.', async () => {
        const user = userEvent.setup()

        const props: Partial<KeyValueListItemProps> = {
          onClickKey: jest.fn(),
        }
        const { getByTestId } = renderComponent(props)
        const rendered = getByTestId(TEST_ID_MAP.ROOT)
        const keyItemContainer = rendered?.firstChild

        await user.hover(keyItemContainer as Element)
        expect(keyItemContainer).toHaveStyle('display: flex;')
        expect(keyItemContainer).toHaveStyle('align-items: flex-start;')
        expect(keyItemContainer).toHaveStyle('padding: 4px 6px;')
        expect(keyItemContainer).toHaveStyle('cursor: pointer;')
        // NOTE(@sol): Hovered DOM style test is not working
        // expect(keyItemContainer).toHaveStyle(`background-color: rgba(0, 0, 0, 0.051);`)
      })

      it('onClickKey가 있으면, Key 영역이 click event에서 호출된다.', async () => {
        const user = userEvent.setup()

        const props: Partial<KeyValueListItemProps> = {
          onClickKey: jest.fn(),
        }
        const { getByTestId } = renderComponent(props)
        const rendered = getByTestId(TEST_ID_MAP.ROOT)
        const keyItemContainer = rendered?.firstChild

        await user.click(keyItemContainer as Element)
        expect(props.onClickKey).toBeCalledTimes(1)
        await user.click(keyItemContainer as Element)
        expect(props.onClickKey).toBeCalledTimes(2)
      })
    })

    describe('onClickValue', () => {
      it('onClickValue가 없으면, Value 영역의 hover/cursor 스타일이 없다.', async () => {
        const user = userEvent.setup()

        const { getByTestId } = renderComponent()
        const rendered = getByTestId(TEST_ID_MAP.ROOT)
        const valueItemContainer = rendered?.lastChild

        await user.hover(valueItemContainer as Element)
        expect(valueItemContainer).toHaveStyle('display: flex;')
        expect(valueItemContainer).toHaveStyle('align-items: flex-start;')
        expect(valueItemContainer).toHaveStyle('padding: 4px 6px;')
        expect(valueItemContainer).not.toHaveStyle('cursor: pointer;')
        // NOTE(@sol): Hovered DOM style test is not working
        // expect(valueItemContainer).not.toHaveStyle(`background-color: rgba(0, 0, 0, 0.051);`)
      })

      it('onClickValue가 있으면, Value 영역이 hover/cursor 스타일이 존재한다.', async () => {
        const user = userEvent.setup()

        const props: Partial<KeyValueListItemProps> = {
          onClickValue: jest.fn(),
        }
        const { getByTestId } = renderComponent(props)
        const rendered = getByTestId(TEST_ID_MAP.ROOT)
        const valueItemContainer = rendered?.lastChild

        await user.hover(valueItemContainer as Element)
        expect(valueItemContainer).toHaveStyle('display: flex;')
        expect(valueItemContainer).toHaveStyle('align-items: flex-start;')
        expect(valueItemContainer).toHaveStyle('padding: 4px 6px;')
        expect(valueItemContainer).toHaveStyle('cursor: pointer;')
        // NOTE(@sol): Hovered DOM style test is not working
        // expect(valueItemContainer).toHaveStyle('background-color: rgba(0, 0, 0, 0.051);')
      })

      it('onClickValue가 있으면, Value 영역이 click event에서 호출된다.', async () => {
        const user = userEvent.setup()

        const props: Partial<KeyValueListItemProps> = {
          onClickValue: jest.fn(),
        }
        const { getByTestId } = renderComponent(props)
        const rendered = getByTestId(TEST_ID_MAP.ROOT)
        const valueItemContainer = rendered?.lastChild

        await user.click(valueItemContainer as Element)
        expect(props.onClickValue).toBeCalledTimes(1)
        await user.click(valueItemContainer as Element)
        expect(props.onClickValue).toBeCalledTimes(2)
      })
    })
  })

  describe('Styles', () => {
    describe('KeyValueListItem', () => {
      it('Root', () => {
        const { getByTestId } = renderComponent()
        const rendered = getByTestId(TEST_ID_MAP.ROOT)
        expect(rendered).toHaveStyle('display: flex;')
        expect(rendered).toHaveStyle('align-items: flex-start;')
        expect(rendered).toHaveStyle('border-radius: 6px;')
        expect(rendered).toHaveStyle('transition-delay: 0ms;')
        expect(rendered).toHaveStyle('transition-timing-function: cubic-bezier(.3,0,0,1);')
        expect(rendered).toHaveStyle('transition-duration: 150ms;')
        expect(rendered).toHaveStyle('transition-property: background-color,color;')

        const rootKeyContainer = rendered.firstChild
        expect(rootKeyContainer).toHaveStyle('display: flex;')
        expect(rootKeyContainer).toHaveStyle('flex: 1;')

        const rootValueContainer = rendered.lastChild
        expect(rootValueContainer).toHaveStyle('display: flex;')
        expect(rootValueContainer).toHaveStyle('flex: 2;')
        expect(rootValueContainer).toHaveStyle('justify-content: space-between;')
        expect(rootValueContainer).toHaveStyle('overflow: hidden;')
        expect(rootValueContainer).toHaveStyle('text-overflow: ellipsis;')
        expect(rootValueContainer).toHaveStyle('white-space: nowrap;')
      })

      it('Key, Value가 flex로서 1:2의 width 비율을 유지한다.', () => {
        const { getByTestId } = renderComponent()
        const rendered = getByTestId(TEST_ID_MAP.ROOT)

        const rootKeyContainer = rendered.firstChild
        expect(rootKeyContainer).toHaveStyle('display: flex;')
        expect(rootKeyContainer).toHaveStyle('flex: 1;')

        const rootValueContainer = rendered.lastChild
        expect(rootValueContainer).toHaveStyle('display: flex;')
        expect(rootValueContainer).toHaveStyle('flex: 2;')
        expect(rootValueContainer).toHaveStyle('justify-content: space-between;')
      })

      it('KeyValueListItem > KeyItem', () => {
        const { getByTestId } = renderComponent()
        const rendered = getByTestId(TEST_ID_MAP.KEY_ITEM)
        expect(rendered).toHaveStyle('display: flex;')
        expect(rendered).toHaveStyle('align-items: center;')

        const keyItemText = rendered?.lastChild
        expect(keyItemText).toHaveStyle('color: rgba(0, 0, 0, 0.4);')
        expect(keyItemText).toHaveStyle('overflow: hidden;')
        expect(keyItemText).toHaveStyle('text-overflow: ellipsis;')
        expect(keyItemText).toHaveStyle('white-space: nowrap;')
      })

      it('KeyValueListItem > ValueItem', () => {
        const { getByTestId } = renderComponent()
        const rendered = getByTestId(TEST_ID_MAP.VALUE_ITEM)
        expect(rendered).toHaveStyle('font-size: 1.4rem;')
      })

      it('KeyValueListItem > ItemActions', () => {
        const actions: KeyValueListItemActionProps = { icon: BadgeIcon }
        const { getByTestId } = renderComponent({ actions })
        const rendered = getByTestId(TEST_ID_MAP.ACTIONS_ITEM)
        expect(rendered).toHaveStyle('display: flex;')
        expect(rendered).toHaveStyle('align-items: center;')
      })
    })

    describe('KeyValueMultiLineListItem', () => {
      it('Root', () => {
        const { getByTestId } = renderMultilineComponent()
        const rendered = getByTestId(TEST_ID_MAP.MULTILINE_ROOT)
        expect(rendered).toHaveStyle('display: flex;')
        expect(rendered).toHaveStyle('flex-direction: column;')
        expect(rendered).toHaveStyle('justify-content: center;')
        expect(rendered).toHaveStyle('border-radius: 6px;')
        expect(rendered).toHaveStyle('transition-delay: 0ms;')
        expect(rendered).toHaveStyle('transition-timing-function: cubic-bezier(.3,0,0,1);')
        expect(rendered).toHaveStyle('transition-duration: 150ms;')
        expect(rendered).toHaveStyle('transition-property: background-color,color;')

        const rootKeyContainer = rendered.firstChild
        expect(rootKeyContainer).toHaveStyle('display: flex;')
        expect(rootKeyContainer).toHaveStyle('flex: 1;')
        expect(rootKeyContainer).toHaveStyle('justify-content: space-between;')
        expect(rootKeyContainer).toHaveStyle('height: 28px;')

        const rootValueContainer = rendered.lastChild
        expect(rootValueContainer).toHaveStyle('display: flex;')
        expect(rootValueContainer).toHaveStyle('flex: 1;')
        expect(rootValueContainer).toHaveStyle('padding: 4px 6px;')
        expect(rootValueContainer).toHaveStyle('min-height: 28px;')
      })
    })
  })
})

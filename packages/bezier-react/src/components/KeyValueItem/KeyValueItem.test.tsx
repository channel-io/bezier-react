import { AppleIcon, BadgeIcon } from '@channel.io/bezier-icons'
import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/test'

import {
  KEY_VALUE_ITEM_KEY_ICON_TEST_ID,
  KEY_VALUE_ITEM_TEST_ID,
  KeyValueItem,
} from './KeyValueItem'
import { type KeyValueItemProps } from './KeyValueItem.types'

const DEFAULT_PROPS = {
  keyIcon: AppleIcon,
  keyContent: 'Key',
  children: 'Value',
}

const renderComponent = (optionProps?: Partial<KeyValueItemProps>) =>
  render(
    <KeyValueItem
      {...DEFAULT_PROPS}
      {...optionProps}
    />
  )

describe('KeyValueItem', () => {
  describe('Props', () => {
    describe('keyIcon', () => {
      it('should render in the document if a valid Bezier icon is provided', () => {
        const keyIcon = BadgeIcon
        const { getByTestId } = renderComponent({ keyIcon })
        const rendered = getByTestId(KEY_VALUE_ITEM_KEY_ICON_TEST_ID)
        expect(rendered).toBeInTheDocument()
      })

      it('should render as textContent if keyIcon is not a Bezier icon', () => {
        const keyIcon = 'Lorem ipsum'
        const { getByText } = renderComponent({ keyIcon })
        const rendered = getByText(keyIcon)
        expect(rendered).toBeInTheDocument()
      })
    })

    describe('keyContent', () => {
      it('should render as a text string if keyContent is a string', () => {
        const { getByText } = renderComponent()
        const rendered = getByText(DEFAULT_PROPS.keyContent)
        expect(rendered).toBeInTheDocument()
      })

      it('should render as a node if keyContent is a React.Node', () => {
        const keyContent = <button type="button">Button</button>
        const { getByRole } = renderComponent({ keyContent })
        const rendered = getByRole('button')
        expect(rendered).toBeInTheDocument()
      })
    })

    describe('actions', () => {
      it('should not render action button if actions are not provided', () => {
        const { queryByRole } = renderComponent()
        const rendered = queryByRole('button')
        const actionItems = rendered
        expect(actionItems).not.toBeInTheDocument()
      })

      it('should render a action button if actions is an Object', () => {
        const actions = { icon: BadgeIcon }
        const { getByRole } = renderComponent({ actions })
        const rendered = getByRole('button')
        expect(rendered).toBeInTheDocument()
      })

      it('should render action buttons if actions is an Array', () => {
        const actions = Array.from(Array(2)).map(() => ({ icon: BadgeIcon }))
        const { getAllByRole } = renderComponent({ actions })
        const rendered = getAllByRole('button')
        expect(rendered.length).toEqual(2)
      })

      it('should call onClick handler when action button is clicked if actions.onClick is provided', async () => {
        const user = userEvent.setup()
        const actions = { icon: BadgeIcon, onClick: jest.fn() }
        const { getByRole } = renderComponent({ actions })
        const rendered = getByRole('button')
        await user.click(rendered)
        expect(actions.onClick).toHaveBeenCalledTimes(1)
        await user.click(rendered)
        expect(actions.onClick).toHaveBeenCalledTimes(2)
      })

      // FIXME: Make this test pass
      // it('should render tooltip if actions.tooltip is provided', async () => {
      //   const user = userEvent.setup()
      //   const actions = { icon: BadgeIcon, tooltip: 'tooltip' }
      //   const { getByRole } = renderComponent({ actions })
      //   const rendered = getByRole('button')
      //   await user.hover(rendered)
      //   await waitFor(
      //     () => {
      //       expect(getByRole('tooltip')).toBeInTheDocument()
      //     },
      //     { timeout: 10000 }
      //   )
      // })
    })

    describe('onClickKey', () => {
      it('should call onClickKey handler when Key area is clicked if onClickKey is provided', async () => {
        const user = userEvent.setup()
        const onClickKey = jest.fn()
        const { getByTestId } = renderComponent({ onClickKey })
        const rendered = getByTestId(KEY_VALUE_ITEM_TEST_ID)
        const keyItemContainer = rendered?.firstChild
        await user.click(keyItemContainer as Element)
        expect(onClickKey).toHaveBeenCalledTimes(1)
        await user.click(keyItemContainer as Element)
        expect(onClickKey).toHaveBeenCalledTimes(2)
      })
    })

    describe('onClickValue', () => {
      it('should call onClickValue handler when Value area is clicked if onClickValue is provided', async () => {
        const user = userEvent.setup()
        const onClickValue = jest.fn()
        const { getByTestId } = renderComponent({ onClickValue })
        const rendered = getByTestId(KEY_VALUE_ITEM_TEST_ID)
        const valueItemContainer = rendered?.lastChild
        await user.click(valueItemContainer as Element)
        expect(onClickValue).toHaveBeenCalledTimes(1)
        await user.click(valueItemContainer as Element)
        expect(onClickValue).toHaveBeenCalledTimes(2)
      })
    })
  })
})

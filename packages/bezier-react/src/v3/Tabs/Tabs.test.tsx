import { Fragment } from 'react'

import { PlusIcon } from '@channel.io/bezier-icons'
import { isInaccessible } from '@testing-library/react'
import userEvent, { PointerEventsCheckLevel } from '@testing-library/user-event'

import { render } from '~/src/utils/test'

import {
  TabAction,
  TabActions,
  TabContent,
  TabItem,
  TabList,
  Tabs,
} from './Tabs'
import { type TabsProps } from './Tabs.types'

const VALUE1 = 'One'
const VALUE2 = 'Two'

const TAB1 = 'Tab1'
const TAB2 = 'Tab2'

const CONTENT1 = 'Content one'
const CONTENT2 = 'Content two'

const ACTION1 = 'Action1'
const ACTION2 = 'Action2'

type RenderTabsProps = {
  tabsProps?: TabsProps
  reverseActions?: boolean
}

describe('Tabs', () => {
  const renderTabs = ({ tabsProps, reverseActions }: RenderTabsProps = {}) =>
    render(
      <Tabs
        {...tabsProps}
        defaultValue={VALUE1}
      >
        <TabList>
          {reverseActions && (
            <TabActions>
              <TabAction href="https://github.com/channel-io/bezier-react">
                {ACTION1}
              </TabAction>
              <TabAction>{ACTION2}</TabAction>
            </TabActions>
          )}

          <Fragment>
            <TabItem
              value={VALUE1}
              leadingContent={PlusIcon}
            >
              {TAB1}
            </TabItem>
            <TabItem value={VALUE2}>{TAB2}</TabItem>
          </Fragment>

          {!reverseActions && (
            <TabActions>
              <TabAction href="https://github.com/channel-io/bezier-react">
                {ACTION1}
              </TabAction>
              <TabAction>{ACTION2}</TabAction>
            </TabActions>
          )}
        </TabList>

        <TabContent value={VALUE1}>{CONTENT1}</TabContent>
        <TabContent value={VALUE2}>{CONTENT2}</TabContent>
      </Tabs>
    )

  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup({
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    })
  })

  it('should render accessible tabs', () => {
    const { container } = renderTabs()

    expect(isInaccessible(container)).toBe(false)
  })

  it('should render tablist and tabs with proper ARIA attributes', () => {
    const { getByRole } = renderTabs()

    expect(getByRole('tablist')).toHaveAttribute(
      'aria-orientation',
      'horizontal'
    )
    expect(getByRole('tab', { name: TAB1 })).toHaveAttribute(
      'aria-selected',
      'true'
    )
    expect(getByRole('tab', { name: TAB2 })).toHaveAttribute(
      'aria-selected',
      'false'
    )
    expect(getByRole('tab', { name: TAB1 })).toHaveAttribute(
      'aria-controls',
      getByRole('tabpanel', { name: TAB1 }).id
    )
  })

  it('should call onValueChange handler when user clicks different tabs', async () => {
    const onValueChange = jest.fn()
    const { getByRole } = renderTabs({
      tabsProps: {
        onValueChange,
      },
    })

    await user.click(getByRole('tab', { name: TAB2 }))
    expect(onValueChange).toHaveBeenCalledTimes(1)
    await user.click(getByRole('tab', { name: TAB1 }))
    expect(onValueChange).toHaveBeenCalledTimes(2)
    await user.click(getByRole('tab', { name: TAB1 }))
    expect(onValueChange).toHaveBeenCalledTimes(2)
  })

  it('should support automatic keyboard activation', async () => {
    const { getByRole } = renderTabs()

    await user.click(getByRole('tab', { name: TAB1 }))
    await user.keyboard('{arrowright}')
    expect(getByRole('tab', { name: TAB2 })).toHaveAttribute(
      'data-state',
      'active'
    )

    await user.keyboard('{arrowleft}')
    expect(getByRole('tab', { name: TAB1 })).toHaveAttribute(
      'data-state',
      'active'
    )
  })

  it('should support manual keyboard activation', async () => {
    const { getByRole } = renderTabs({
      tabsProps: {
        activationMode: 'manual',
      },
    })

    await user.click(getByRole('tab', { name: TAB1 }))
    await user.keyboard('{arrowright}')
    expect(getByRole('tab', { name: TAB1 })).toHaveAttribute(
      'data-state',
      'active'
    )

    await user.keyboard(' ')
    expect(getByRole('tab', { name: TAB2 })).toHaveAttribute(
      'data-state',
      'active'
    )
  })

  it('should render leading content as decorative content', () => {
    const { container } = renderTabs()

    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument()
  })

  it('should render trailing content', () => {
    const { getByText } = render(
      <Tabs defaultValue={VALUE1}>
        <TabList>
          <TabItem
            value={VALUE1}
            trailingContent={<span>3</span>}
          >
            {TAB1}
          </TabItem>
        </TabList>
      </Tabs>
    )

    expect(getByText('3')).toBeInTheDocument()
  })

  it('should render tab actions as toolbar outside tablist regardless of authoring order', () => {
    const { getByRole } = renderTabs({ reverseActions: true })
    const tablist = getByRole('tablist')
    const toolbar = getByRole('toolbar', { name: 'More actions' })

    expect(toolbar).toBeInTheDocument()
    expect(tablist).not.toContainElement(toolbar)
    expect(tablist.compareDocumentPosition(toolbar)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING
    )
  })

  it('should render tab actions as links or buttons', () => {
    const { getByRole } = renderTabs()

    expect(getByRole('link', { name: ACTION1 })).toHaveAttribute(
      'href',
      'https://github.com/channel-io/bezier-react'
    )
    expect(getByRole('button', { name: ACTION2 })).toBeInTheDocument()
  })

  it('should render active tab content', () => {
    const { getByRole } = renderTabs()

    expect(getByRole('tabpanel', { name: TAB1 })).toHaveAttribute(
      'data-state',
      'active'
    )
  })
})

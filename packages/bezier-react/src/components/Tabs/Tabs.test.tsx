/* External dependencies */
import { isInaccessible } from '@testing-library/react'
import userEvent, { PointerEventsCheckLevel } from '@testing-library/user-event'
import React from 'react'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import TabAction from './TabAction'
import { TabContent } from './TabContent'
import TabItem from './TabItem'
import { TabList } from './TabList'
import { Tabs } from './Tabs'
import { TabListProps, TabSize, TabsProps } from './Tabs.types'

const VALUE1 = 'One'
const VALUE2 = 'Two'

const TAB1 = 'Tab1'
const TAB2 = 'Tab2'

const CONTENT1 = 'Content one'
const CONTENT2 = 'Content two'

const ACTION1 = 'Action1'

type RenderTabsProps = {
  tabsProps?: TabsProps
  tabListProps?: TabListProps
}

describe('Tabs', () => {
  const renderTabs = ({
    tabsProps,
    tabListProps,
  }: RenderTabsProps = {
    tabListProps: {
      height: TabSize.Normal,
    },
  }) => render(
    <Tabs {...tabsProps} defaultValue={VALUE1}>
      <TabList {...tabListProps}>
        <TabItem value={VALUE1}>
          { TAB1 }
        </TabItem>

        <TabItem value={VALUE2}>
          { TAB2 }
        </TabItem>

        <TabAction href="https://github.com/channel-io/bezier-react">
          { ACTION1 }
        </TabAction>
      </TabList>

      <TabContent value={VALUE1}>
        { CONTENT1 }
      </TabContent>

      <TabContent value={VALUE2}>
        { CONTENT2 }
      </TabContent>
    </Tabs>,
  )

  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup({
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    })
  })

  describe('Accessibility check > ', () => {
    it('element rendered by Tabs component should be accessible', () => {
      const { container } = renderTabs()
      expect(isInaccessible(container)).toBe(false)
    })
  })

  describe('Tab List', () => {
    it('should have \'role="tablist"\' attribute.', () => {
      const { getByRole } = renderTabs()
      expect(getByRole('tablist')).toBeInTheDocument()
    })

    it('should call onValueChange handler when user clicks different tabs', async () => {
      const onValueChange = jest.fn()
      const { getByRole } = renderTabs({
        tabsProps: {
          defaultValue: TAB1,
          onValueChange,
        },
      })
      const tab1 = getByRole('tab', { name: TAB1 })
      const tab2 = getByRole('tab', { name: TAB2 })

      await user.click(tab2)
      expect(onValueChange).toBeCalledTimes(1)
      await user.click(tab1)
      expect(onValueChange).toBeCalledTimes(2)
      await user.click(tab1)
      expect(onValueChange).toBeCalledTimes(2)
    })
  })

  describe('Tab Item', () => {
    describe('ARIA', () => {
      it('should have \'role="tab"\' attribute.', () => {
        const { getByRole } = renderTabs()
        expect(getByRole('tab', { name: TAB1 })).toBeInTheDocument()
      })

      it('should have \'aria-selected="true"\' attribute if selected.', () => {
        const { getByRole } = renderTabs()
        expect(getByRole('tab', { name: TAB1 })).toHaveAttribute('aria-selected', 'true')
      })

      it('should have \'aria-selected="false"\' attribute if not selected.', () => {
        const { getByRole } = renderTabs()
        expect(getByRole('tab', { name: TAB2 })).toHaveAttribute('aria-selected', 'false')
      })

      it('should have \'aria-controls\' attribute the same as its associated tab content\'s id', () => {
        const { getByRole } = renderTabs()
        expect(getByRole('tab', { name: TAB1 })).toHaveAttribute('aria-controls', getByRole('tabpanel', { name: TAB1 }).id)
      })
    })

    describe('Data Attributes', () => {
      it('should have proper \'data-state\' attribute.', () => {
        const { getByRole } = renderTabs()
        expect(getByRole('tab', { name: TAB1 })).toHaveAttribute('data-state', 'active')
        expect(getByRole('tab', { name: TAB2 })).toHaveAttribute('data-state', 'inactive')
      })
    })

    describe('Keyboard Navigation', () => {
      it('can control by arrow right and left key', async () => {
        const { getByRole } = renderTabs()

        await user.click(getByRole('tab', { name: TAB1 }))

        expect(getByRole('tab', { name: TAB1 })).toHaveAttribute('data-state', 'active')
        expect(getByRole('tab', { name: TAB2 })).toHaveAttribute('data-state', 'inactive')
        expect(getByRole('tabpanel', { name: TAB1 })).toHaveAttribute('data-state', 'active')

        await user.keyboard('{arrowright}')

        expect(getByRole('tab', { name: TAB1 })).toHaveAttribute('data-state', 'inactive')
        expect(getByRole('tab', { name: TAB2 })).toHaveAttribute('data-state', 'active')
        expect(getByRole('tabpanel', { name: TAB2 })).toHaveAttribute('data-state', 'active')

        await user.keyboard('{arrowright}')

        expect(getByRole('tab', { name: TAB1 })).toHaveAttribute('data-state', 'active')
        expect(getByRole('tab', { name: TAB2 })).toHaveAttribute('data-state', 'inactive')
        expect(getByRole('tabpanel', { name: TAB1 })).toHaveAttribute('data-state', 'active')
      })
    })

    it('can move focus by tab between tab item, tab action, and tab content.', async () => {
      const { getByRole } = renderTabs()
      const tabItem = getByRole('tab', { name: TAB1 })
      const tabAction = getByRole('link', { name: ACTION1 })
      const tabContent = getByRole('tabpanel', { name: TAB1 })

      await user.click(getByRole('tab', { name: TAB1 }))
      expect(document.activeElement).toBe(tabItem)
      await user.tab()
      expect(document.activeElement).toBe(tabAction)
      await user.tab()
      expect(document.activeElement).toBe(tabContent)
      await user.tab({ shift: true })
      expect(document.activeElement).toBe(tabAction)
      await user.tab({ shift: true })
      expect(document.activeElement).toBe(tabItem)
    })
  })

  describe('Tab Content', () => {
    describe('ARIA', () => {
      it('should have \'role="tabpanel"\' attribute.', () => {
        const { getByRole } = renderTabs()
        expect(getByRole('tabpanel')).toBeInTheDocument()
      })
    })

    describe('Data Attributes', () => {
      it('should have \'data-state\'="active" when associated tab is selected.', () => {
        const { getByRole } = renderTabs()
        expect(getByRole('tabpanel', { name: TAB1 })).toHaveAttribute('data-state', 'active')
      })
    })
  })
})

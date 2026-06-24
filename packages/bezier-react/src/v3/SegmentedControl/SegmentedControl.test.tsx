import { PlusIcon, SquaresIcon } from '@channel.io/bezier-icons'
import { isInaccessible } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/test'
import { FormField, FormLabel } from '~/src/v3/Form'

import {
  SegmentedControl,
  SegmentedControlItem,
  SegmentedControlTabContent,
  SegmentedControlTabList,
} from './SegmentedControl'
import {
  type SegmentedControlProps,
  type SegmentedControlType,
} from './SegmentedControl.types'

const OPTIONS = [
  {
    value: 'first',
    label: 'First',
    content: 'First content',
  },
  {
    value: 'second',
    label: 'Second',
    content: 'Second content',
  },
  {
    value: 'third',
    label: 'Third',
    content: 'Third content',
  },
]

describe('SegmentedControl', () => {
  const renderSegmentedControl = ({
    type = 'radiogroup',
    ...rest
  }: SegmentedControlProps<SegmentedControlType, string>) => {
    const itemList = OPTIONS.map(({ value, label }) => (
      <SegmentedControlItem
        key={value}
        value={value}
      >
        {label}
      </SegmentedControlItem>
    ))

    return render(
      <SegmentedControl
        type={type}
        {...rest}
      >
        {type === 'radiogroup' ? (
          itemList
        ) : (
          <>
            <SegmentedControlTabList>{itemList}</SegmentedControlTabList>

            {OPTIONS.map(({ value, content }) => (
              <SegmentedControlTabContent
                key={value}
                value={value}
              >
                {content}
              </SegmentedControlTabContent>
            ))}
          </>
        )}
      </SegmentedControl>
    )
  }

  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup()
  })

  describe('ARIA', () => {
    it('should be accessible as radiogroup', () => {
      const { container } = renderSegmentedControl({ type: 'radiogroup' })
      expect(isInaccessible(container)).toBe(false)
    })

    it('should render radiogroup items with accessible labels', () => {
      const { getByRole } = renderSegmentedControl({ type: 'radiogroup' })
      expect(getByRole('radiogroup')).toBeInTheDocument()
      expect(getByRole('radio', { name: OPTIONS[0].label })).toBeInTheDocument()
    })

    it('should render icon-only item with aria-label', () => {
      const { getByRole, queryByText } = render(
        <SegmentedControl defaultValue="grid">
          <SegmentedControlItem
            value="grid"
            icon={SquaresIcon}
            aria-label="Grid"
          />
        </SegmentedControl>
      )

      expect(getByRole('radio', { name: 'Grid' })).toBeChecked()
      expect(queryByText('Grid')).not.toBeInTheDocument()
    })

    it('should render tabs type as tablist', () => {
      const { getByRole } = renderSegmentedControl({
        type: 'tabs',
        defaultValue: OPTIONS[0].value,
      })

      expect(getByRole('tablist')).toBeInTheDocument()
      expect(getByRole('tab', { name: OPTIONS[0].label })).toHaveAttribute(
        'data-state',
        'active'
      )
    })
  })

  describe('Style Props', () => {
    it('should apply default medium size and width style', () => {
      const { getByRole } = renderSegmentedControl({
        type: 'radiogroup',
        width: '300px',
      })

      expect(getByRole('radiogroup')).toHaveClass('size-m')
      expect(getByRole('radiogroup')).toHaveStyle({
        '--b-v3-segmented-control-width': '300px',
      })
    })

    it('should apply small size', () => {
      const { getByRole } = renderSegmentedControl({
        type: 'radiogroup',
        size: 's',
      })

      expect(getByRole('radiogroup')).toHaveClass('size-s')
    })

    it('should render leading and trailing content', () => {
      const { getByRole, getByText } = render(
        <SegmentedControl defaultValue="all">
          <SegmentedControlItem
            value="all"
            leadingContent={PlusIcon}
            trailingContent={<span>3</span>}
          >
            All
          </SegmentedControlItem>
        </SegmentedControl>
      )

      expect(getByRole('radio', { name: 'All 3' })).toBeChecked()
      expect(getByText('3')).toBeInTheDocument()
    })
  })

  describe('User Interactions', () => {
    it('should check item when user clicks an item', async () => {
      const { getByRole } = renderSegmentedControl({ type: 'radiogroup' })
      const item = getByRole('radio', { name: OPTIONS[1].label })

      await user.click(item)

      expect(item).toHaveFocus()
      expect(item).toBeChecked()
      expect(item).toHaveAttribute('data-selected', 'true')
    })

    it('should call onValueChange when user clicks an item', async () => {
      const onValueChange = jest.fn()
      const { getByRole } = renderSegmentedControl({
        type: 'radiogroup',
        onValueChange,
      })

      await user.click(getByRole('radio', { name: OPTIONS[1].label }))

      expect(onValueChange).toHaveBeenCalledWith(OPTIONS[1].value)
    })

    it('should switch tab content when user clicks a tab', async () => {
      const { getByRole, getByText, queryByText } = renderSegmentedControl({
        type: 'tabs',
        defaultValue: OPTIONS[0].value,
      })

      await user.click(getByRole('tab', { name: OPTIONS[1].label }))

      expect(getByText(OPTIONS[1].content)).toBeInTheDocument()
      expect(queryByText(OPTIONS[0].content)).not.toBeInTheDocument()
    })
  })

  describe('FormField', () => {
    it('should receive form field aria props', () => {
      const { getByRole } = render(
        <FormField
          id="view"
          required
          disabled
        >
          <FormLabel>View</FormLabel>
          <SegmentedControl defaultValue="all">
            <SegmentedControlItem value="all">All</SegmentedControlItem>
          </SegmentedControl>
        </FormField>
      )

      expect(getByRole('radiogroup')).toHaveAttribute(
        'aria-labelledby',
        'view-label'
      )
      expect(getByRole('radiogroup')).toHaveAttribute('aria-required', 'true')
      expect(getByRole('radiogroup')).toHaveAttribute('aria-disabled', 'true')
    })
  })
})

import React from 'react'

import { isInaccessible } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/testUtils'

import {
  FormControl,
  type FormControlProps,
} from '~/src/components/Forms/FormControl'

import {
  SegmentedControl,
  SegmentedControlTabList,
  SegmentedControlTabContent,
} from './SegmentedControl'
import { SegmentedControlItem } from './SegmentedControlItem'
import { SEGMENTED_CONTROL_INDICATOR_TEST_ID } from './SegmentedControlIndicator'
import {
  type SegmentedControlType,
  type SegmentedControlProps,
} from './SegmentedControl.types'

const MOCK_UI_DATA = [
  {
    value: 'foo',
    label: 'Item 1',
    content: 'Content 1',
  },
  {
    value: 'bar',
    label: 'Item 2',
    content: 'Content 2',
  },
  {
    value: 'baz',
    label: 'Item 3',
    content: 'Content 3',
  },
]

describe('SegmentedControl >', () => {
  const renderComponent = ({
    type = 'radiogroup',
    ...rest
  }: SegmentedControlProps<SegmentedControlType, string>) => {
    const ItemList = MOCK_UI_DATA.map(({ value, label }) => (
      <SegmentedControlItem
        key={value}
        value={value}
      >
        { label }
      </SegmentedControlItem>
    ))

    return render(
      <SegmentedControl
        type={type}
        {...rest}
      >
        { type === 'radiogroup'
          ? ItemList
          : (
            <>
              <SegmentedControlTabList>
                { ItemList }
              </SegmentedControlTabList>

              { MOCK_UI_DATA.map(({ value, content }) => (
                <SegmentedControlTabContent
                  key={value}
                  value={value}
                >
                  { content }
                </SegmentedControlTabContent>
              )) }
            </>
          ) }
      </SegmentedControl>,
    )
  }

  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup()
  })

  describe('ARIA', () => {
    describe('"radiogroup" type', () => {
      it('should be accessible', () => {
        const { container } = renderComponent({ type: 'radiogroup' })
        expect(isInaccessible(container)).toBe(false)
      })

      it('should have \'role="radiogroup"\' attribute', () => {
        const { getByRole } = renderComponent({ type: 'radiogroup' })
        expect(getByRole('radiogroup')).toBeInTheDocument()
      })

      it('should be required when required prop is true', () => {
        const { getByRole } = renderComponent({ type: 'radiogroup', required: true })
        expect(getByRole('radiogroup')).toBeRequired()
      })

      it('should be disabled when disabled prop is true', () => {
        const { getByRole } = renderComponent({ type: 'radiogroup', disabled: true })
        expect(getByRole('radiogroup')).toHaveAttribute('aria-disabled', 'true')
      })

      it('children(Item) should be disabled when disabled prop is true', () => {
        const { getAllByRole } = renderComponent({ type: 'radiogroup', disabled: true })
        const items = getAllByRole('radio')
        items.forEach(item => expect(item).toBeDisabled())
      })
    })

    describe('"tabs" type', () => {
      it('should be accessible', () => {
        const { container } = renderComponent({ type: 'tabs' })
        expect(isInaccessible(container)).toBe(false)
      })

      it('should have \'role="tablist"\' attribute', () => {
        const { getByRole } = renderComponent({ type: 'tabs' })
        expect(getByRole('tablist')).toBeInTheDocument()
      })

      it('should have \'aria-orientation="horizontal"\' attribute', () => {
        const { getByRole } = renderComponent({ type: 'tabs' })
        expect(getByRole('tablist')).toHaveAttribute('aria-orientation', 'horizontal')
      })
    })
  })

  describe('Style Props', () => {
    describe('"radiogroup" type', () => {
      it('when changing the width property, the width style should be applied to the outer wrapper', () => {
        const { getByRole } = renderComponent({ type: 'radiogroup', width: '100%' })
        expect(getByRole('radiogroup')).toHaveStyle('--bezier-react-segmented-control-width: 100%')
        expect(getByRole('radiogroup')).toHaveStyle('width: var(--bezier-react-segmented-control-width)')
      })
    })

    describe('"tabs" type', () => {
      it('when changing the width property, the width style should be applied to the outer wrapper', () => {
        const { getByRole } = renderComponent({ type: 'tabs', width: '100%' })
        expect(getByRole('tablist')).toHaveStyle('--bezier-react-segmented-control-width: 100%')
        expect(getByRole('tablist')).toHaveStyle('width: var(--bezier-react-segmented-control-width)')
      })
    })
  })

  describe('User Interactions', () => {
    describe('"radiogroup" type', () => {
      it('should focus and check item when user clicks on a item', async () => {
        const { getByRole } = renderComponent({ type: 'radiogroup' })
        const item = getByRole('radio', { name: MOCK_UI_DATA[0].label })
        await user.click(item)
        expect(item).toHaveFocus()
        expect(item).toBeChecked()
        expect(item).toHaveAttribute('data-checked', 'true')
      })

      it('should call the change event handler when user clicks on a item in a controlled item group', async () => {
        const onValueChange = jest.fn()
        const { getByRole } = renderComponent({ type: 'radiogroup', onValueChange })
        const item = getByRole('radio', { name: MOCK_UI_DATA[1].label })
        await user.click(item)
        expect(onValueChange).toBeCalledTimes(1)
      })

      it('should focus on the first item item when user presses tab key', async () => {
        const { getByRole } = renderComponent({ type: 'radiogroup' })
        const item = getByRole('radio', { name: MOCK_UI_DATA[0].label })
        await user.tab()
        expect(item).toHaveFocus()
      })

      it('should check item when user presses space key on a focused item', async () => {
        const { getByRole } = renderComponent({ type: 'radiogroup' })
        const item = getByRole('radio', { name: MOCK_UI_DATA[0].label })
        await user.tab()
        expect(item).toHaveFocus()
        await user.keyboard('{ }')
        expect(item).toHaveFocus()
        expect(item).toBeChecked()
        expect(item).toHaveAttribute('data-checked', 'true')
      })

      it('should focus and check the next item item when user presses arrow down key on a item', async () => {
        const { getByRole } = renderComponent({ type: 'radiogroup' })
        const item = getByRole('radio', { name: MOCK_UI_DATA[0].label })
        const nextItem = getByRole('radio', { name: MOCK_UI_DATA[1].label })
        await user.tab()
        expect(item).toHaveFocus()
        await user.keyboard('{ArrowDown}')
        expect(nextItem).toHaveFocus()
        // FIXME: Checking behavior does not work in test environment when arrow key is pressed
        // expect(nextItem).toBeChecked()
        // expect(item).toHaveAttribute('data-checked', 'true')
      })

      it('should focus and check the next item item when user presses arrow right key on a item', async () => {
        const { getByRole } = renderComponent({ type: 'radiogroup' })
        const item = getByRole('radio', { name: MOCK_UI_DATA[0].label })
        const nextItem = getByRole('radio', { name: MOCK_UI_DATA[1].label })
        await user.tab()
        expect(item).toHaveFocus()
        await user.keyboard('{ArrowRight}')
        expect(nextItem).toHaveFocus()
        // FIXME: Checking behavior does not work in test environment when arrow key is pressed
        // expect(nextItem).toBeChecked()
        // expect(item).toHaveAttribute('data-checked', 'true')
      })

      it('should focus and check the previous item item when user presses arrow up key on a item', async () => {
        const { getByRole } = renderComponent({ type: 'radiogroup' })
        const item = getByRole('radio', { name: MOCK_UI_DATA[0].label })
        const nextItem = getByRole('radio', { name: MOCK_UI_DATA[2].label })
        await user.tab()
        expect(item).toHaveFocus()
        await user.keyboard('{ArrowUp}')
        expect(nextItem).toHaveFocus()
        // FIXME: Checking behavior does not work in test environment when arrow key is pressed
        // expect(nextItem).toBeChecked()
        // expect(item).toHaveAttribute('data-checked', 'true')
      })

      it('should focus and check the previous item item when user presses arrow left key on a item', async () => {
        const { getByRole } = renderComponent({ type: 'radiogroup' })
        const item = getByRole('radio', { name: MOCK_UI_DATA[0].label })
        const nextItem = getByRole('radio', { name: MOCK_UI_DATA[2].label })
        await user.tab()
        expect(item).toHaveFocus()
        await user.keyboard('{ArrowLeft}')
        expect(nextItem).toHaveFocus()
        // FIXME: Checking behavior does not work in test environment when arrow key is pressed
        // expect(nextItem).toBeChecked()
        // expect(item).toHaveAttribute('data-checked', 'true')
      })
    })

    describe('"tabs" type', () => {
      it('should focus and check item when user clicks on a item', async () => {
        const { getByRole } = renderComponent({ type: 'tabs' })
        const item = getByRole('tab', { name: MOCK_UI_DATA[0].label })
        await user.click(item)
        expect(item).toHaveFocus()
        expect(item).toHaveAttribute('data-checked', 'true')
      })

      it('should call the change event handler when user clicks on a item in a controlled item group', async () => {
        const onValueChange = jest.fn()
        const { getByRole } = renderComponent({ type: 'tabs', onValueChange })
        const item = getByRole('tab', { name: MOCK_UI_DATA[1].label })
        await user.click(item)
        expect(onValueChange).toBeCalledTimes(1)
      })

      it('should focus on the first item item when user presses tab key', async () => {
        const { getByRole } = renderComponent({ type: 'tabs' })
        const item = getByRole('tab', { name: MOCK_UI_DATA[0].label })
        await user.tab()
        expect(item).toHaveFocus()
        expect(item).toHaveAttribute('data-checked', 'true')
      })

      it('should check item when user presses space key on a focused item', async () => {
        const { getByRole } = renderComponent({ type: 'tabs' })
        const item = getByRole('tab', { name: MOCK_UI_DATA[0].label })
        await user.tab()
        expect(item).toHaveFocus()
        expect(item).toHaveAttribute('data-checked', 'true')
        await user.keyboard('{ }')
        expect(item).toHaveFocus()
        expect(item).toHaveAttribute('data-checked', 'true')
      })

      it('should focus and check the next item item when user presses arrow right key on a item', async () => {
        const { getByRole } = renderComponent({ type: 'tabs' })
        const item = getByRole('tab', { name: MOCK_UI_DATA[0].label })
        const nextItem = getByRole('tab', { name: MOCK_UI_DATA[1].label })
        await user.tab()
        expect(item).toHaveFocus()
        expect(item).toHaveAttribute('data-checked', 'true')
        await user.keyboard('{ArrowRight}')
        expect(nextItem).toHaveFocus()
        expect(nextItem).toHaveAttribute('data-checked', 'true')
      })

      it('should focus and check the previous item item when user presses arrow left key on a item', async () => {
        const { getByRole } = renderComponent({ type: 'tabs' })
        const item = getByRole('tab', { name: MOCK_UI_DATA[0].label })
        const nextItem = getByRole('tab', { name: MOCK_UI_DATA[2].label })
        await user.tab()
        expect(item).toHaveFocus()
        expect(item).toHaveAttribute('data-checked', 'true')
        await user.keyboard('{ArrowLeft}')
        expect(nextItem).toHaveFocus()
        expect(nextItem).toHaveAttribute('data-checked', 'true')
      })
    })
  })

  describe('Indicator', () => {
    const targetDOMRect = { top: 10, left: 10, width: 100, height: 100 } as DOMRect
    const containerDOMRect = { top: 5, left: 5 } as DOMRect

    beforeEach(() => {
      jest.spyOn(Element.prototype, 'getBoundingClientRect')
        // NOTE: (@ed): Order matters. 1. target DOMRect
        .mockImplementationOnce(jest.fn(() => targetDOMRect))
        // NOTE: (@ed): Order matters. 2. container DOMRect
        .mockImplementationOnce(jest.fn(() => containerDOMRect))
    })

    it('The size of the indicator should be the same as that of the selected item', () => {
      const { getByTestId } = renderComponent({
        type: 'radiogroup',
        value: MOCK_UI_DATA[0].value,
      })

      const indicator = getByTestId(SEGMENTED_CONTROL_INDICATOR_TEST_ID)

      expect(indicator).toHaveStyle(`--bezier-react-segmented-control-indicator-width: ${targetDOMRect.width}px`)
      expect(indicator).toHaveStyle(`--bezier-react-segmented-control-indicator-height: ${targetDOMRect.height}px`)
      expect(indicator).toHaveStyle('width: var(--bezier-react-segmented-control-indicator-width)')
      expect(indicator).toHaveStyle('height: var(--bezier-react-segmented-control-indicator-height)')
    })

    it('The position of the indicator should be the same as that of the selected item', () => {
      const { getByTestId } = renderComponent({
        type: 'radiogroup',
        value: MOCK_UI_DATA[0].value,
      })

      const indicator = getByTestId(SEGMENTED_CONTROL_INDICATOR_TEST_ID)

      expect(indicator).toHaveStyle(`--bezier-react-segmented-control-indicator-transform: translate(${targetDOMRect.left - containerDOMRect.left}px, ${targetDOMRect.top - containerDOMRect.top}px)`)
      expect(indicator).toHaveStyle('transform: var(--bezier-react-segmented-control-indicator-transform)')
    })
  })

  describe('With FormControl', () => {
    describe('"radiogroup" type', () => {
      const renderComponentWithFormControl = (props: Omit<FormControlProps, 'children'>) => render(
        <FormControl {...props}>
          <SegmentedControl type="radiogroup">
            { MOCK_UI_DATA.map(({ value, label }) => (
              <SegmentedControlItem
                key={value}
                value={value}
              >
                { label }
              </SegmentedControlItem>
            )) }
          </SegmentedControl>
        </FormControl>,
      )

      it('FormControl\'s disabled prop should be passed to SegmentedControl', () => {
        const { getByRole } = renderComponentWithFormControl({ disabled: true })
        expect(getByRole('radiogroup')).toHaveAttribute('aria-disabled', 'true')
      })

      it('FormControl\'s hasError prop should be passed to SegmentedControl', () => {
        const { getByRole } = renderComponentWithFormControl({ hasError: true })
        expect(getByRole('radiogroup')).toHaveAttribute('aria-invalid', 'true')
      })

      it('FormControl\'s required prop should be passed to SegmentedControl', () => {
        const { getByRole } = renderComponentWithFormControl({ required: true })
        expect(getByRole('radiogroup')).toHaveAttribute('aria-required', 'true')
      })

      it('FormControl\'s id prop should be passed to SegmentedControl', () => {
        const { getByRole } = renderComponentWithFormControl({ id: 'form-control-id' })
        expect(getByRole('radiogroup')).toHaveAttribute('id', 'form-control-id')
      })
    })
  })
})

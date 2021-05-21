/* External dependencies */
import React from 'react'
import userEvent from '@testing-library/user-event'

/* Internal dependencies */
import { render } from '../../../utils/testUtils'
import Select, {
  SELECT_CONTAINER_TEST_ID,
  SELECT_TRIGGER_TEST_ID,
  SELECT_DROPDOWN_TEST_ID,
} from './Select'
import SelectProps, { SelectSize } from './Select.types'

describe('Select Test >', () => {
  let props: SelectProps

  beforeEach(() => {
    const { body } = document
    body.innerHTML = ''

    const rootElement = document.createElement('div')
    rootElement.setAttribute('id', 'root')

    body.appendChild(rootElement)
  })

  const renderSelect = (optionProps?: Partial<SelectProps>) => render(<Select {...props} {...optionProps} />)

  describe('Default Style >', () => {
    it('Snapshot >', () => {
      const { container } = renderSelect()
      expect(container.firstChild).toMatchSnapshot()
    })

    it('Container >', () => {
      const { getByTestId } = renderSelect()
      const defaultSelect = getByTestId(SELECT_CONTAINER_TEST_ID)

      expect(defaultSelect).toHaveStyle('position: relative;')
    })

    it('Trigger >', () => {
      const { getByTestId } = renderSelect()
      const defaultSelectTrigger = getByTestId(SELECT_TRIGGER_TEST_ID)

      expect(defaultSelectTrigger).toHaveStyle('display: flex;')
      expect(defaultSelectTrigger).toHaveStyle('align-items: center;')
      expect(defaultSelectTrigger).toHaveStyle('justify-content: space-between;')
      expect(defaultSelectTrigger).toHaveStyle('padding: 8px 12px;')
      expect(defaultSelectTrigger).toHaveStyle('cursor: pointer;')
    })

    it('Dropdown >', () => {
      const { getByTestId } = renderSelect()

      const defaultSelectTrigger = getByTestId(SELECT_TRIGGER_TEST_ID)
      userEvent.click(defaultSelectTrigger)

      const defaultSelectDropdown = getByTestId(SELECT_DROPDOWN_TEST_ID)

      expect(defaultSelectDropdown).toHaveStyle('width: 100%;')
      expect(defaultSelectDropdown).toHaveStyle('min-width: 200px;')
      expect(defaultSelectDropdown).toHaveStyle('min-height: 42px;')
      expect(defaultSelectDropdown).toHaveStyle('max-height: 640px;')
    })
  })

  describe('SelectSize >', () => {
    it('Size only effects to trigger style >', () => {
      const XL_CONTAINER_TEST_ID = `${SELECT_CONTAINER_TEST_ID}_XL`
      const XL_TRIGGER_TEST_ID = `${SELECT_TRIGGER_TEST_ID}_XL`
      const XL_DROPDOWN_TEST_ID = `${SELECT_DROPDOWN_TEST_ID}_XL`
      const L_CONTAINER_TEST_ID = `${SELECT_CONTAINER_TEST_ID}_L`
      const L_TRIGGER_TEST_ID = `${SELECT_TRIGGER_TEST_ID}_L`
      const L_DROPDOWN_TEST_ID = `${SELECT_DROPDOWN_TEST_ID}_L`

      const { getByTestId: getByTestIdForXL } = renderSelect({
        size: SelectSize.XL,
        testId: XL_CONTAINER_TEST_ID,
        triggerTestId: XL_TRIGGER_TEST_ID,
        dropdownTestId: XL_DROPDOWN_TEST_ID,
      })
      const { getByTestId: getByTestIdForL } = renderSelect({
        size: SelectSize.L,
        testId: L_CONTAINER_TEST_ID,
        triggerTestId: L_TRIGGER_TEST_ID,
        dropdownTestId: L_DROPDOWN_TEST_ID,
      })

      // Select Size.XL
      const xlSelectContainer = getByTestIdForXL(XL_CONTAINER_TEST_ID)
      const xlSelectTrigger = getByTestIdForXL(XL_TRIGGER_TEST_ID)
      // Open Dropdown
      userEvent.click(xlSelectTrigger)
      const xlSelectDropdown = getByTestIdForXL(XL_DROPDOWN_TEST_ID)
      // Close Dropdown
      userEvent.click(xlSelectTrigger)
      const xlContainerStyle = window.getComputedStyle(xlSelectContainer)
      const xlDropdownStyle = window.getComputedStyle(xlSelectDropdown)

      // Select Size.L
      const lSelectContainer = getByTestIdForL(L_CONTAINER_TEST_ID)
      const lSelectTrigger = getByTestIdForL(L_TRIGGER_TEST_ID)
      // Open Dropdown
      userEvent.click(lSelectTrigger)
      const lSelectDropdown = getByTestIdForL(L_DROPDOWN_TEST_ID)
      // Close Dropdown
      userEvent.click(lSelectTrigger)
      const lContainerStyle = window.getComputedStyle(lSelectContainer)
      const lDropdownStyle = window.getComputedStyle(lSelectDropdown)

      // Container
      expect(xlContainerStyle.getPropertyValue('display')).toEqual(lContainerStyle.getPropertyValue('display'))

      // Dropdown
      expect(xlDropdownStyle.getPropertyValue('width')).toEqual(lDropdownStyle.getPropertyValue('width'))
      expect(xlDropdownStyle.getPropertyValue('min-width')).toEqual(lDropdownStyle.getPropertyValue('min-width'))
      expect(xlDropdownStyle.getPropertyValue('min-height')).toEqual(lDropdownStyle.getPropertyValue('min-height'))
      expect(xlDropdownStyle.getPropertyValue('max-height')).toEqual(lDropdownStyle.getPropertyValue('max-height'))
    })

    it('Size S >', () => {
      const { getByTestId } = renderSelect({ size: SelectSize.S })
      const defaultSelectDropdown = getByTestId(SELECT_TRIGGER_TEST_ID)

      expect(defaultSelectDropdown).toHaveStyle('height: 28px;')
    })

    it('Size M >', () => {
      const { getByTestId } = renderSelect({ size: SelectSize.M })
      const defaultSelectDropdown = getByTestId(SELECT_TRIGGER_TEST_ID)

      expect(defaultSelectDropdown).toHaveStyle('height: 36px;')
    })

    it('Size L >', () => {
      const { getByTestId } = renderSelect({ size: SelectSize.L })
      const defaultSelectDropdown = getByTestId(SELECT_TRIGGER_TEST_ID)

      expect(defaultSelectDropdown).toHaveStyle('height: 44px;')
    })

    it('Size XL >', () => {
      const { getByTestId } = renderSelect({ size: SelectSize.XL })
      const defaultSelectDropdown = getByTestId(SELECT_TRIGGER_TEST_ID)

      expect(defaultSelectDropdown).toHaveStyle('height: 54px;')
    })
  })
})

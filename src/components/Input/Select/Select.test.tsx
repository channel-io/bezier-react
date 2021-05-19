/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from '../../../utils/testUtils'
import Select, {
  SELECT_CONTAINER_TEST_ID,
  SELECT_TRIGGER_TEST_ID,
  SELECT_DROPDOWN_TEST_ID,
} from './Select'
import SelectProps from './Select.types'

describe('Select Test >', () => {
  let props: SelectProps

  beforeEach(() => {
    const rootElement = document.createElement('div')
    rootElement.setAttribute('id', 'root')
    const { body } = document

    body.appendChild(rootElement)
  })

  const renderSelect = (optionProps?: Partial<SelectProps>) => render(<Select {...props} {...optionProps}/>)

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
      const defaultSelectDropdown = getByTestId(SELECT_DROPDOWN_TEST_ID)

      expect(defaultSelectDropdown).toHaveStyle('width: 100%;')
      expect(defaultSelectDropdown).toHaveStyle('min-width: 200px;')
      expect(defaultSelectDropdown).toHaveStyle('min-height: 42px;')
      expect(defaultSelectDropdown).toHaveStyle('max-height: 640px;')
    })
  })
})

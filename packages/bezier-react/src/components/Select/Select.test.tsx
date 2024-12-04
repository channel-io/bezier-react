import React from 'react'

import { fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/test'

import { SELECT_DROPDOWN_TEST_ID, Select } from './Select'
import { type SelectProps } from './Select.types'

describe('Select', () => {
  beforeEach(() => {
    const { body } = document
    body.innerHTML = ''

    const rootElement = document.createElement('div')
    rootElement.setAttribute('id', 'root')

    body.appendChild(rootElement)
  })

  const renderSelect = (optionProps?: Partial<SelectProps>) =>
    render(<Select {...optionProps} />)

  describe('Event', () => {
    const renderFormWithSelect = (onSubmit: React.FormEventHandler) =>
      render(
        <form onSubmit={onSubmit}>
          <Select />
        </form>
      )

    it('should fire click event when clicking the trigger button', () => {
      const onClick = jest.fn()
      const { getByRole } = renderSelect({ onClickTrigger: onClick })
      const rendered = getByRole('button')

      fireEvent.click(rendered)
      expect(onClick).toHaveBeenCalled()
    })

    it('should not fire submit event when clicking the trigger button', () => {
      const onSubmit = jest.fn()
      const { getByRole } = renderFormWithSelect(onSubmit)
      const rendered = getByRole('button')

      fireEvent.click(rendered)
      expect(onSubmit).not.toHaveBeenCalled()
    })
  })

  describe('defaultFocus', () => {
    it('should not show dropdown when the first time If the defaultFocus is false >', () => {
      const { queryByTestId } = renderSelect({ defaultFocus: false })
      const dropdown = queryByTestId(SELECT_DROPDOWN_TEST_ID)

      expect(dropdown).toBeNull()
    })

    it('should show dropdown when the first time If the defaultFocus is true >', () => {
      const { getByTestId } = renderSelect({ defaultFocus: true })
      const dropdown = getByTestId(SELECT_DROPDOWN_TEST_ID)

      expect(dropdown).toBeVisible()
    })

    it('should disappear dropdown when the other elements clicked >', async () => {
      const { body } = document
      const user = userEvent.setup()

      const { getByTestId } = renderSelect({ defaultFocus: true })
      const dropdown = getByTestId(SELECT_DROPDOWN_TEST_ID)

      await user.click(body)

      expect(dropdown).toHaveClass('hidden')
    })
  })
})

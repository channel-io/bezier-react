/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { Themes } from '~/src/foundation'
import { render } from '~/src/utils/testUtils'
import { noop } from '~/src/utils/functionUtils'
import DisabledOpacity from '~/src/constants/DisabledOpacity'
import Checkbox, { CHECKBOX_TEST_ID, CHECKBOX_CHECKER_TEST_ID } from './Checkbox'
import CheckboxProps from './Checkbox.types'
import CheckType from './CheckType'

describe('Checkbox test >', () => {
  let props: CheckboxProps

  beforeEach(() => {
    props = {
      contentClassName: undefined,
      disabled: false,
      checked: CheckType.False,
      onClick: noop,
    }
  })

  const renderComponent = (optionProps?: Partial<CheckboxProps>) => render(
    <Checkbox {...props} {...optionProps} />,
  )

  it('Checkbox has default style', () => {
    const { getByTestId } = renderComponent()

    const renderedCheckbox = getByTestId(CHECKBOX_TEST_ID)

    expect(renderedCheckbox).toHaveStyle('display: inline-flex;')
    expect(renderedCheckbox).toHaveStyle('align-items: center;')
    expect(renderedCheckbox).toHaveStyle('cursor: pointer;')
  })

  it('Checker of Checkbox has default style', () => {
    const { getByTestId } = renderComponent()

    const renderedCheckboxChecker = getByTestId(CHECKBOX_CHECKER_TEST_ID)

    expect(renderedCheckboxChecker).toHaveStyle('position: relative;')
    expect(renderedCheckboxChecker).toHaveStyle('display: flex;')
    expect(renderedCheckboxChecker).toHaveStyle('align-items: center;')
    expect(renderedCheckboxChecker).toHaveStyle('justify-content: center;')
    expect(renderedCheckboxChecker).toHaveStyle('box-sizing: border-box;')
  })

  it('Checker of Checkbox has normal background when check status is falsy', () => {
    const { getByTestId } = renderComponent()

    const renderedCheckboxChecker = getByTestId(CHECKBOX_CHECKER_TEST_ID)

    expect(renderedCheckboxChecker).toHaveStyle(`border-color: ${Themes.LightTheme['bg-black-dark']};`)
  })

  it('Checker of Checkbox has green background when check status is truthy', () => {
    const { getByTestId } = renderComponent({ checked: true })

    const renderedCheckboxChecker = getByTestId(CHECKBOX_CHECKER_TEST_ID)

    expect(renderedCheckboxChecker).toHaveStyle(`background-color: ${Themes.LightTheme['bgtxt-green-normal']};`)
    expect(renderedCheckboxChecker).toHaveStyle('border-color: transparent;')
  })

  it('Checker of Checkbox has grey background when disabled', () => {
    const { getByTestId } = renderComponent({ disabled: true })

    const renderedCheckboxChecker = getByTestId(CHECKBOX_CHECKER_TEST_ID)

    expect(renderedCheckboxChecker).toHaveStyle(`opacity: ${DisabledOpacity}`)
  })
})

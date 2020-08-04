/* External dependencies */
import React from 'react'
import { render } from '@testing-library/react'

/* Internal dependencies */
import { ThemeProvider, LightTheme } from '../../styling/Theme'
import Palette from '../../styling/Palette'
import { Light as LightColors } from '../../styling/Colors'
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
    }
  })

  const renderComponent = (optionProps?: CheckboxProps) => render(
    <ThemeProvider theme={LightTheme}>
      <Checkbox {...props} {...optionProps} />
    </ThemeProvider>,
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

  it('Checker of Checkbox has green background when check status is falsy', () => {
    const { getByTestId } = renderComponent()

    const renderedCheckboxChecker = getByTestId(CHECKBOX_CHECKER_TEST_ID)

    expect(renderedCheckboxChecker).toHaveStyle(`background-color: ${Palette.white};`)
    expect(renderedCheckboxChecker).toHaveStyle(`border-color: ${LightColors.border3};`)
  })

  it('Checker of Checkbox has green background when check status is truthy', () => {
    const { getByTestId } = renderComponent({ checked: true })

    const renderedCheckboxChecker = getByTestId(CHECKBOX_CHECKER_TEST_ID)

    expect(renderedCheckboxChecker).toHaveStyle(`background-color: ${Palette.green400};`)
    expect(renderedCheckboxChecker).toHaveStyle('border-color: transparent;')
  })

  it('Checker of Checkbox has grey background when disabled', () => {
    const { getByTestId } = renderComponent({ disabled: true })

    const renderedCheckboxChecker = getByTestId(CHECKBOX_CHECKER_TEST_ID)

    expect(renderedCheckboxChecker).toHaveStyle(`background-color: ${LightColors.disabled3};`)
  })
})

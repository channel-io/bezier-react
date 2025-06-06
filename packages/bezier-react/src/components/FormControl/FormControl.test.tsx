import { isInaccessible } from '@testing-library/react'

import { render } from '~/src/utils/test'

import { FormControl } from './FormControl'
import { type FormControlProps } from './FormControl.types'
import {
  MOCK_CONSTS,
  MultipleFieldForm,
  SingleFieldForm,
  SingleFieldFormWithLabelFont,
} from './__mocks__/forms'

describe('FormControl >', () => {
  let props: FormControlProps

  beforeEach(() => {
    props = {
      id: 'form',
      labelPosition: 'top',
      hasError: false,
      disabled: false,
      readOnly: false,
    }
  })

  const renderComponent = ({ children, ...rest }: FormControlProps) =>
    render(
      <FormControl
        {...props}
        {...rest}
      >
        {children}
      </FormControl>
    )

  describe('Accessibility >', () => {
    it('With single field', () => {
      const { container } = renderComponent({
        children: SingleFieldForm,
      })

      expect(isInaccessible(container)).toBe(false)
    })

    it('With multiple field', () => {
      const { container } = renderComponent({
        children: MultipleFieldForm,
      })

      expect(isInaccessible(container)).toBe(false)
    })
  })

  describe('Single field form >', () => {
    it('The FormLabel component should have the correct attribute', () => {
      const { getByText, getByLabelText } = renderComponent({
        children: SingleFieldForm,
      })

      const labelNode = getByText(MOCK_CONSTS.LABEL_TEXT)
      const inputId = getByLabelText(MOCK_CONSTS.LABEL_TEXT).id

      expect(labelNode).toHaveAttribute('for', inputId)
      expect(labelNode.id).toBe(`${inputId}-label`)
    })

    it('The FormLabel component should have the correct style it depends on top label position', () => {
      const { getByText } = renderComponent({
        children: SingleFieldForm,
      })

      const labelNode = getByText(MOCK_CONSTS.LABEL_TEXT)

      expect(labelNode).toHaveStyle({
        'font-size': 'var(--typography-size-13-font-size);',
      })
    })

    it('The FormLabel component should have the correct style it depends on left label position', () => {
      const { getByText } = renderComponent({
        labelPosition: 'left',
        children: SingleFieldForm,
      })

      const labelNode = getByText(MOCK_CONSTS.LABEL_TEXT)

      expect(labelNode).toHaveStyle({
        'font-size': 'var(--typography-size-14-font-size);',
      })
    })

    it('The FormLabel component should have the correct style with own typo props', () => {
      const { getByText } = renderComponent({
        labelPosition: 'left',
        children: SingleFieldFormWithLabelFont,
      })

      const labelNode = getByText(MOCK_CONSTS.LABEL_TEXT)

      expect(labelNode).toHaveStyle({
        'font-size': 'var(--typography-size-18-font-size);',
      })
    })

    it('The Field(Input) component should have the correct attribute', () => {
      const { getByText, getByLabelText } = renderComponent({
        children: SingleFieldForm,
      })

      const inputNode = getByLabelText(MOCK_CONSTS.LABEL_TEXT)
      const helperTextNode = getByText(MOCK_CONSTS.HELPER_TEXT_TEXT)

      expect(inputNode).toHaveAttribute('aria-describedby', helperTextNode.id)
    })

    it('The Field(Input) component should have the correct attribute when the "hasError" prop is true', () => {
      const { getByText, getByLabelText } = renderComponent({
        children: SingleFieldForm,
        hasError: true,
      })

      const inputNode = getByLabelText(MOCK_CONSTS.LABEL_TEXT)
      const errorMessageNode = getByText(MOCK_CONSTS.ERROR_MESSAGE_TEXT)

      expect(inputNode).toHaveAttribute('aria-describedby', errorMessageNode.id)
    })

    it('The FormHelperText component is only visible when the "hasError" prop is false', () => {
      const { getByText, queryByText } = renderComponent({
        children: SingleFieldForm,
        hasError: false,
      })

      const helperTextNode = getByText(MOCK_CONSTS.HELPER_TEXT_TEXT)
      const errorMessageNode = queryByText(MOCK_CONSTS.ERROR_MESSAGE_TEXT)

      expect(helperTextNode).toBeVisible()
      expect(errorMessageNode).toBeNull()
    })

    it('The FormErrorMessage component is only visible when the "hasError" prop is true', () => {
      const { getByText, queryByText } = renderComponent({
        children: SingleFieldForm,
        hasError: true,
      })

      const errorMessageNode = getByText(MOCK_CONSTS.ERROR_MESSAGE_TEXT)
      const helperTextNode = queryByText(MOCK_CONSTS.HELPER_TEXT_TEXT)

      expect(errorMessageNode).toBeVisible()
      expect(helperTextNode).toBeNull()
    })
  })

  describe('Multiple(Group) field form >', () => {
    it('The FormLabel for group element should not have "for" attribute', () => {
      const { getByText } = renderComponent({
        children: MultipleFieldForm,
      })

      const groupLabelNode = getByText(MOCK_CONSTS.LABEL_TEXT)

      expect(groupLabelNode).not.toHaveAttribute('for')
    })

    it('The FormGroup component should have the correct attribute', () => {
      const { getByRole, getByText } = renderComponent({
        children: MultipleFieldForm,
      })

      const groupNode = getByRole('group')
      const groupLabelNode = getByText(MOCK_CONSTS.LABEL_TEXT)
      const groupHelperTextNode = getByText(MOCK_CONSTS.HELPER_TEXT_TEXT)

      expect(groupNode).toHaveAttribute('aria-labelledby', groupLabelNode.id)
      expect(groupNode).toHaveAttribute(
        'aria-describedby',
        groupHelperTextNode.id
      )
    })

    it('The FormGroup component should have the correct attribute when the "hasError" prop is true', () => {
      const { getByRole, getByText } = renderComponent({
        children: MultipleFieldForm,
        hasError: true,
      })

      const groupNode = getByRole('group')
      const groupLabelNode = getByText(MOCK_CONSTS.LABEL_TEXT)
      const groupErrorMessageNode = getByText(MOCK_CONSTS.ERROR_MESSAGE_TEXT)

      expect(groupNode).toHaveAttribute('aria-labelledby', groupLabelNode.id)
      expect(groupNode).toHaveAttribute(
        'aria-describedby',
        groupErrorMessageNode.id
      )
    })

    it('The Field(Input) component inside FormGroup should have a unique ID that is not FormGroup ID', () => {
      const { getByRole, getByLabelText } = renderComponent({
        children: MultipleFieldForm,
      })

      const groupNodeId = getByRole('group').id
      const firstInnerInputNodeId = getByLabelText(
        MOCK_CONSTS.FIRST_FIELD_LABEL_TEXT
      ).id
      const secondInnerInputNodeId = getByLabelText(
        MOCK_CONSTS.SECOND_FIELD_LABEL_TEXT
      ).id

      expect(firstInnerInputNodeId).not.toEqual(groupNodeId)
      expect(secondInnerInputNodeId).not.toEqual(groupNodeId)
      expect(firstInnerInputNodeId).not.toEqual(secondInnerInputNodeId)
    })
  })
})

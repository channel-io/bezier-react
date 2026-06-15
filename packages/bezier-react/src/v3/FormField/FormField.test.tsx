import { render } from '~/src/utils/test'
import { Checkbox } from '~/src/v3/Checkbox'
import { TextInput } from '~/src/v3/TextInput'

import {
  FormErrorMessage,
  FormField,
  FormGroup,
  FormHelperText,
  FormLabel,
} from './index'

describe('FormField', () => {
  it('connects label and helper text to a single field', () => {
    const { getByLabelText, getByText } = render(
      <FormField>
        <FormLabel>Email</FormLabel>
        <TextInput />
        <FormHelperText>Enter your work email.</FormHelperText>
        <FormErrorMessage>Email is required.</FormErrorMessage>
      </FormField>
    )

    const input = getByLabelText('Email')
    const helperText = getByText('Enter your work email.')

    expect(input).toHaveAttribute('aria-describedby', helperText.id)
    expect(input).not.toHaveAttribute('aria-invalid', 'true')
  })

  it('connects error text to a single field when hasError is true', () => {
    const { getByLabelText, getByText, queryByText } = render(
      <FormField hasError>
        <FormLabel>Email</FormLabel>
        <TextInput />
        <FormHelperText>Enter your work email.</FormHelperText>
        <FormErrorMessage>Email is required.</FormErrorMessage>
      </FormField>
    )

    const input = getByLabelText('Email')
    const errorMessage = getByText('Email is required.')

    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAttribute('aria-describedby', errorMessage.id)
    expect(queryByText('Enter your work email.')).toBeNull()
  })

  it('connects label and description to a grouped field', () => {
    const { getByRole, getByText, getByTestId } = render(
      <FormField>
        <FormLabel>Notifications</FormLabel>
        <FormGroup direction="horizontal">
          <Checkbox>Email</Checkbox>
          <Checkbox>SMS</Checkbox>
        </FormGroup>
        <FormHelperText>Select at least one channel.</FormHelperText>
      </FormField>
    )

    const group = getByRole('group')
    const label = getByText('Notifications')
    const helperText = getByText('Select at least one channel.')

    expect(getByTestId('bezier-v3-form-group')).toBe(group)
    expect(group).toHaveAttribute('aria-labelledby', label.id)
    expect(group).toHaveAttribute('aria-describedby', helperText.id)
  })

  it('sets default FormGroup spacing by direction', () => {
    const { getByTestId, rerender } = render(
      <FormGroup>
        <Checkbox>Email</Checkbox>
        <Checkbox>SMS</Checkbox>
      </FormGroup>
    )

    expect(getByTestId('bezier-v3-form-group')).toHaveStyle(
      '--b-stack-spacing: 0'
    )

    rerender(
      <FormGroup direction="horizontal">
        <Checkbox>Email</Checkbox>
        <Checkbox>SMS</Checkbox>
      </FormGroup>
    )

    expect(getByTestId('bezier-v3-form-group')).toHaveStyle(
      '--b-stack-spacing: 20px'
    )
  })

  it('uses explicit FormGroup spacing over direction default', () => {
    const { getByTestId } = render(
      <FormGroup
        direction="horizontal"
        spacing={10}
      >
        <Checkbox>Email</Checkbox>
        <Checkbox>SMS</Checkbox>
      </FormGroup>
    )

    expect(getByTestId('bezier-v3-form-group')).toHaveStyle(
      '--b-stack-spacing: 10px'
    )
  })

  it('renders help tooltip from FormLabel help prop', () => {
    const { getByTestId } = render(
      <FormField>
        <FormLabel help="Helpful description">Email</FormLabel>
        <TextInput />
      </FormField>
    )

    expect(getByTestId('bezier-v3-help')).toBeInTheDocument()
  })

})

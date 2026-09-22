import * as React from 'react'

import { fireEvent } from '@testing-library/react'

import { Checkbox } from '~/src/beta/Checkbox'
import { TextInput } from '~/src/beta/TextInput'
import { VStack } from '~/src/beta/VStack'
import { render } from '~/src/utils/test'

import {
  Form,
  FormErrorMessage,
  FormField,
  FormGroup,
  FormHelperText,
  FormLabel,
} from './index'

describe('Form', () => {
  it('renders a native form element', () => {
    const { getByRole } = render(
      <Form aria-label="Profile">
        <FormField>
          <FormLabel>Email</FormLabel>
          <TextInput />
        </FormField>
      </Form>
    )

    expect(getByRole('form', { name: 'Profile' })).toBeInTheDocument()
  })

  it('renders dividers between fields by default', () => {
    const { getAllByRole } = render(
      <Form aria-label="Profile">
        <FormField>
          <FormLabel>Email</FormLabel>
          <TextInput />
        </FormField>
        <FormField>
          <FormLabel>Name</FormLabel>
          <TextInput />
        </FormField>
      </Form>
    )

    expect(getAllByRole('separator')).toHaveLength(1)
  })
})

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
    const helperText = getByText('Enter your work email.').closest('p')!

    expect(input).toHaveAttribute('aria-describedby', helperText.id)
    expect(input).not.toHaveAttribute('aria-invalid', 'true')
  })

  it('connects error text to a single field when hasError is true', () => {
    const { getByLabelText, getByText } = render(
      <FormField hasError>
        <FormLabel>Email</FormLabel>
        <TextInput />
        <FormHelperText>Enter your work email.</FormHelperText>
        <FormErrorMessage>Email is required.</FormErrorMessage>
      </FormField>
    )

    const input = getByLabelText('Email')
    const errorMessage = getByText('Email is required.').closest('p')!

    expect(input).toHaveAttribute('aria-invalid', 'true')
    const description = getByText('Enter your work email.').closest('p')!
    expect(input).toHaveAttribute(
      'aria-describedby',
      `${description.id} ${errorMessage.id}`
    )
    expect(description).toBeVisible()
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
    const helperText = getByText('Select at least one channel.').closest('p')!

    expect(getByTestId('bezier-beta-form-group')).toBe(group)
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

    expect(getByTestId('bezier-beta-form-group')).toHaveStyle(
      '--b-stack-spacing: 0'
    )

    rerender(
      <FormGroup direction="horizontal">
        <Checkbox>Email</Checkbox>
        <Checkbox>SMS</Checkbox>
      </FormGroup>
    )

    expect(getByTestId('bezier-beta-form-group')).toHaveStyle(
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

    expect(getByTestId('bezier-beta-form-group')).toHaveStyle(
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

    expect(getByTestId('bezier-beta-help')).toBeInTheDocument()
  })
})

describe('FormField updated layout', () => {
  it.each(['top', 'left'] as const)(
    'preserves the caller DOM and accessible description (%s)',
    (labelPosition) => {
      const { getByLabelText, getByText } = render(
        <FormField
          labelPosition={labelPosition}
          hasError
        >
          <>
            <FormLabel>Email</FormLabel>
            <TextInput />
            <FormHelperText>Use your work address.</FormHelperText>
            <FormErrorMessage>Enter a valid email.</FormErrorMessage>
          </>
        </FormField>
      )
      const label = getByText('Email')
      const description = getByText('Use your work address.').closest('p')!
      const input = getByLabelText('Email')
      const error = getByText('Enter a valid email.').closest('p')!
      const field = label.parentElement!.parentElement!
      expect(description.parentElement).toBe(field)
      expect(error.parentElement).toBe(field)
      expect(field).toContainElement(input)
      expect(input).toHaveAccessibleDescription(
        'Use your work address. Enter a valid email.'
      )
      expect(
        input.compareDocumentPosition(error) & Node.DOCUMENT_POSITION_FOLLOWING
      ).toBeTruthy()
    }
  )

  it('keeps grouped input state and ARIA wiring when validation changes', () => {
    const field = (hasError: boolean) => (
      <FormField
        labelPosition="left"
        hasError={hasError}
      >
        <FormLabel>Email</FormLabel>
        <FormHelperText>Use your work address.</FormHelperText>
        <VStack
          width="100%"
          spacing={4}
        >
          <TextInput defaultValue="first@example.com" />
          <FormErrorMessage>Enter a valid email.</FormErrorMessage>
        </VStack>
      </FormField>
    )
    const { getByLabelText, getByText, queryByText, rerender } = render(
      field(false)
    )
    const input = getByLabelText('Email')
    input.focus()
    fireEvent.change(input, { target: { value: 'draft' } })
    rerender(field(true))
    expect(getByLabelText('Email')).toBe(input)
    expect(input).toHaveValue('draft')
    expect(input).toHaveFocus()
    expect(input).toHaveAccessibleDescription(
      'Use your work address. Enter a valid email.'
    )
    expect(input).toHaveAttribute('aria-invalid', 'true')
    rerender(field(false))
    expect(queryByText('Enter a valid email.')).toBeNull()
    expect(getByText('Use your work address.')).toBeVisible()
    expect(input).toHaveAccessibleDescription('Use your work address.')
    expect(input).not.toHaveAttribute('aria-invalid')
    expect(input).toHaveFocus()
  })

  it('preserves input state when a label is wrapped, hidden or repositioned', () => {
    const SettingsLabel = () => <FormLabel>Email</FormLabel>
    const field = (label: React.ReactNode, labelPosition: 'top' | 'left') => (
      <FormField labelPosition={labelPosition}>
        {label}
        <TextInput
          aria-label="Email"
          defaultValue="initial"
        />
        <FormHelperText>Use your work address.</FormHelperText>
      </FormField>
    )
    const { getByRole, rerender } = render(
      field(<FormLabel>Email</FormLabel>, 'left')
    )
    const input = getByRole('textbox') as HTMLInputElement
    input.focus()
    fireEvent.change(input, { target: { value: 'typed by user' } })
    input.setSelectionRange(2, 6)

    for (const label of [
      <SettingsLabel key="wrapped" />,
      null,
      <FormLabel key="direct">Email</FormLabel>,
    ]) {
      for (const position of ['top', 'left'] as const) {
        rerender(field(label, position))
        expect(getByRole('textbox')).toBe(input)
        expect(input).toHaveValue('typed by user')
        expect(input).toHaveFocus()
        expect([input.selectionStart, input.selectionEnd]).toEqual([2, 6])
        expect(input).toHaveAccessibleDescription('Use your work address.')
      }
    }
  })

  it('preserves keyed controls in separate fragments', () => {
    const field = (reverse: boolean) => (
      <FormField>
        <FormLabel>Addresses</FormLabel>
        {reverse
          ? [
              <React.Fragment key="second">
                <TextInput aria-label="Second" />
              </React.Fragment>,
              <React.Fragment key="first">
                <TextInput aria-label="First" />
              </React.Fragment>,
            ]
          : [
              <React.Fragment key="first">
                <TextInput aria-label="First" />
              </React.Fragment>,
              <React.Fragment key="second">
                <TextInput aria-label="Second" />
              </React.Fragment>,
            ]}
      </FormField>
    )
    const { getByLabelText, rerender } = render(field(false))
    const input = getByLabelText('First')
    fireEvent.change(input, { target: { value: 'draft' } })
    rerender(field(true))
    expect(getByLabelText('First')).toBe(input)
    expect(input).toHaveValue('draft')
  })

  it('keeps grouped controls invalid and connects both description and error', () => {
    const { getByRole, getAllByRole } = render(
      <FormField
        hasError
        required
      >
        <FormLabel>Channels</FormLabel>
        <FormGroup>
          <Checkbox>Email</Checkbox>
          <Checkbox>SMS</Checkbox>
        </FormGroup>
        <FormHelperText>Choose a channel.</FormHelperText>
        <FormErrorMessage>Select at least one.</FormErrorMessage>
      </FormField>
    )
    expect(getByRole('group')).toHaveAccessibleName('Channels')
    expect(getByRole('group')).toHaveAccessibleDescription(
      'Choose a channel. Select at least one.'
    )
    getAllByRole('checkbox').forEach((checkbox) => {
      expect(checkbox).toHaveAttribute('aria-invalid', 'true')
      expect(checkbox).toHaveAttribute('aria-required', 'true')
    })
  })

  it('renders a required marker without including it in the accessible label', () => {
    const { getByLabelText, getByText } = render(
      <FormField required>
        <FormLabel>Email</FormLabel>
        <TextInput />
      </FormField>
    )
    expect(getByText('*')).toHaveAttribute('aria-hidden', 'true')
    expect(getByLabelText('Email')).toBeRequired()
  })

  it('does not create dividers for conditional empty fields', () => {
    const { queryByRole } = render(
      <Form>
        {false}
        <FormField>
          <TextInput aria-label="Email" />
        </FormField>
        {null}
      </Form>
    )
    expect(queryByRole('separator')).toBeNull()
  })
})

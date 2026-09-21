import { useState } from 'react'

import { type Meta, type StoryObj } from '@storybook/react'

import { Button } from '~/src/beta/Button'
import { Checkbox } from '~/src/beta/Checkbox'
import { HStack } from '~/src/beta/HStack'
import { Select, SelectOption } from '~/src/beta/Select'
import { Text } from '~/src/beta/Text'
import { TextArea } from '~/src/beta/TextArea'
import { TextInput } from '~/src/beta/TextInput'
import { VStack } from '~/src/beta/VStack'
import { defineBezierMetadata } from '~/src/storybook/defineBezierMetadata'

import type { FormFieldProps, FormProps } from './Form.types'

import {
  FormErrorMessage as BezierFormErrorMessage,
  FormField as BezierFormField,
  FormGroup as BezierFormGroup,
  FormHelperText as BezierFormHelperText,
  FormLabel as BezierFormLabel,
  Form,
} from './index'

const FIELD_WIDTH = 360

const meta: Meta<FormProps & FormFieldProps> = {
  title: 'Beta components/Form',
  component: Form,
  parameters: {
    bezier: defineBezierMetadata({
      model: 'compound',
      root: 'Form',
      parts: {
        FormField: { requiresAncestor: ['Form'] },
        FormLabel: { requiresAncestor: ['Form', 'FormField'] },
        FormHelperText: { requiresAncestor: ['Form', 'FormField'] },
        FormErrorMessage: { requiresAncestor: ['Form', 'FormField'] },
        FormGroup: { requiresAncestor: ['Form'] },
      },
      independent: {},
    }),
  },
  argTypes: {
    labelPosition: {
      control: {
        type: 'radio',
      },
      options: ['top', 'left'],
    },
  },
}

export default meta

export const Primary: StoryObj<FormProps & FormFieldProps> = {
  render: (args) => (
    <Form style={{ width: FIELD_WIDTH }}>
      <BezierFormField
        labelPosition={args.labelPosition}
        hasError={args.hasError}
        disabled={args.disabled}
        readOnly={args.readOnly}
        required={args.required}
      >
        <BezierFormLabel help="This is help text.">Email</BezierFormLabel>
        <TextInput placeholder="name@company.com" />
        <BezierFormHelperText>Enter your work email.</BezierFormHelperText>
        <BezierFormErrorMessage>Email is required.</BezierFormErrorMessage>
      </BezierFormField>

      <BezierFormField
        labelPosition={args.labelPosition}
        hasError={args.hasError}
        disabled={args.disabled}
        readOnly={args.readOnly}
        required={args.required}
      >
        <BezierFormLabel>Message</BezierFormLabel>
        <TextArea
          placeholder="Enter a message"
          minRows={3}
          maxRows={3}
        />
        <BezierFormHelperText>Write a short message.</BezierFormHelperText>
        <BezierFormErrorMessage>Message is required.</BezierFormErrorMessage>
      </BezierFormField>

      <BezierFormField
        labelPosition={args.labelPosition}
        hasError={args.hasError}
        disabled={args.disabled}
        readOnly={args.readOnly}
        required={args.required}
      >
        <BezierFormLabel>Notifications</BezierFormLabel>
        <BezierFormGroup direction="horizontal">
          <Checkbox>Email</Checkbox>
          <Checkbox>SMS</Checkbox>
          <Checkbox>Push</Checkbox>
        </BezierFormGroup>
        <BezierFormHelperText>
          Select at least one channel.
        </BezierFormHelperText>
        <BezierFormErrorMessage>
          Select a notification channel.
        </BezierFormErrorMessage>
      </BezierFormField>
    </Form>
  ),

  args: {
    labelPosition: 'top',
    hasError: false,
    disabled: false,
    readOnly: false,
    required: false,
  },
}

export const LabelPosition: StoryObj<FormFieldProps> = {
  render: (args) => (
    <VStack
      spacing={20}
      width={FIELD_WIDTH}
    >
      <BezierFormField
        {...args}
        labelPosition="top"
      >
        <BezierFormLabel>Top label</BezierFormLabel>
        <TextInput placeholder="Placeholder" />
        <BezierFormHelperText>Description</BezierFormHelperText>
      </BezierFormField>

      <BezierFormField
        {...args}
        labelPosition="left"
      >
        <BezierFormLabel>Left label</BezierFormLabel>
        <TextInput placeholder="Placeholder" />
        <BezierFormHelperText>Description</BezierFormHelperText>
      </BezierFormField>
    </VStack>
  ),

  args: {
    hasError: false,
    disabled: false,
    readOnly: false,
    required: false,
  },

  argTypes: {
    labelPosition: {
      table: {
        disable: true,
      },
    },
  },
}

export const Error: StoryObj<FormFieldProps> = {
  render: (args) => (
    <HStack
      spacing={16}
      align="start"
    >
      <BezierFormField
        style={{ width: FIELD_WIDTH }}
        {...args}
        hasError={false}
      >
        <BezierFormLabel>Email</BezierFormLabel>
        <TextInput placeholder="name@company.com" />
        <BezierFormHelperText>Enter your work email.</BezierFormHelperText>
        <BezierFormErrorMessage>Email is required.</BezierFormErrorMessage>
      </BezierFormField>

      <BezierFormField
        style={{ width: FIELD_WIDTH }}
        {...args}
        hasError
      >
        <BezierFormLabel>Email</BezierFormLabel>
        <TextInput placeholder="name@company.com" />
        <BezierFormHelperText>Enter your work email.</BezierFormHelperText>
        <BezierFormErrorMessage>Email is required.</BezierFormErrorMessage>
      </BezierFormField>
    </HStack>
  ),

  args: {
    labelPosition: 'top',
    disabled: false,
    readOnly: false,
    required: false,
  },

  argTypes: {
    hasError: {
      table: {
        disable: true,
      },
    },
  },
}

export const FormField: StoryObj<FormFieldProps> = {
  render: (args) => (
    <BezierFormField
      style={{ width: FIELD_WIDTH }}
      {...args}
    >
      <BezierFormLabel help="This is help text.">Email</BezierFormLabel>
      <TextInput placeholder="name@company.com" />
      <BezierFormHelperText>Enter your work email.</BezierFormHelperText>
      <BezierFormErrorMessage>Email is required.</BezierFormErrorMessage>
    </BezierFormField>
  ),

  args: {
    labelPosition: 'top',
    hasError: false,
    disabled: false,
    readOnly: false,
    required: false,
  },
}

export const FormLabel = {
  render: () => (
    <BezierFormLabel help="This is help text.">Label</BezierFormLabel>
  ),
}

export const FormHelperText = {
  render: () => (
    <BezierFormHelperText>
      This text provides additional context for the field.
    </BezierFormHelperText>
  ),
}

export const FormErrorMessage = {
  render: () => (
    <BezierFormErrorMessage>This field is required.</BezierFormErrorMessage>
  ),
}

export const FormGroup = {
  render: () => (
    <BezierFormField style={{ width: FIELD_WIDTH }}>
      <BezierFormLabel>Notifications</BezierFormLabel>
      <BezierFormGroup direction="horizontal">
        <Checkbox>Email</Checkbox>
        <Checkbox>SMS</Checkbox>
        <Checkbox>Push</Checkbox>
      </BezierFormGroup>
      <BezierFormHelperText>Select at least one channel.</BezierFormHelperText>
    </BezierFormField>
  ),
}

export const Layouts: StoryObj<FormFieldProps> = {
  render: (args) => (
    <HStack
      spacing={32}
      align="start"
      wrap
    >
      {(['top', 'left'] as const).map((labelPosition) => (
        <VStack
          key={labelPosition}
          width={labelPosition === 'top' ? 360 : 520}
          spacing={20}
        >
          <Text
            typo="16"
            fontWeight="500"
            color="text-neutral"
          >
            {labelPosition === 'top' ? 'Top labels' : 'Left labels'}
          </Text>
          <Form>
            <BezierFormField
              {...args}
              labelPosition={labelPosition}
              required
            >
              <BezierFormLabel help="Use the address you sign in with.">
                Work email
              </BezierFormLabel>
              <TextInput placeholder="name@company.com" />
              <BezierFormHelperText>
                We will send workspace invitations to this address.
              </BezierFormHelperText>
              <BezierFormErrorMessage>
                Enter a valid work email address to receive your invitation.
              </BezierFormErrorMessage>
            </BezierFormField>
            <BezierFormField
              {...args}
              labelPosition={labelPosition}
              hasError
              required
            >
              <BezierFormLabel>Workspace name</BezierFormLabel>
              <TextInput
                defaultValue="My workspace"
                size="l"
              />
              <BezierFormHelperText>
                A name that your teammates will recognize.
              </BezierFormHelperText>
              <BezierFormErrorMessage>
                This name is already taken. Choose a different name for your
                workspace.
              </BezierFormErrorMessage>
            </BezierFormField>
            <BezierFormField
              {...args}
              labelPosition={labelPosition}
            >
              <BezierFormLabel>Notifications</BezierFormLabel>
              <BezierFormGroup direction="horizontal">
                <Checkbox>Email</Checkbox>
                <Checkbox>SMS</Checkbox>
              </BezierFormGroup>
              <BezierFormHelperText>
                Choose how you want to hear from us.
              </BezierFormHelperText>
              <BezierFormErrorMessage>
                Select a notification channel.
              </BezierFormErrorMessage>
            </BezierFormField>
          </Form>
        </VStack>
      ))}
    </HStack>
  ),
  args: { hasError: false },
  argTypes: { labelPosition: { table: { disable: true } } },
}

export const ControlSizes: StoryObj<FormFieldProps> = {
  render: (args) => (
    <Form style={{ width: 520 }}>
      {(['m', 'l'] as const).map((size) => (
        <BezierFormField
          key={size}
          {...args}
        >
          <BezierFormLabel>
            {size === 'm' ? 'Medium controls' : 'Large controls'}
          </BezierFormLabel>
          <BezierFormGroup spacing={8}>
            <TextInput
              size={size}
              placeholder="Workspace name"
              aria-label={`${size} workspace name`}
            />
            <Select
              triggerSize={size}
              placeholder="Choose a plan"
              aria-label={`${size} plan`}
            >
              <SelectOption
                value="standard"
                label="Standard"
              />
              <SelectOption
                value="premium"
                label="Premium"
              />
            </Select>
          </BezierFormGroup>
          <BezierFormHelperText>
            Each control owns its size.
          </BezierFormHelperText>
          <BezierFormErrorMessage>
            Complete the workspace details.
          </BezierFormErrorMessage>
        </BezierFormField>
      ))}
    </Form>
  ),
  args: { labelPosition: 'left', hasError: false },
}

function ValidationExample(args: FormFieldProps) {
  const [hasError, setHasError] = useState(false)
  return (
    <VStack
      width={520}
      spacing={20}
    >
      <Form
        onSubmit={(event) => {
          event.preventDefault()
          setHasError(true)
        }}
      >
        <BezierFormField
          {...args}
          hasError={hasError}
        >
          <BezierFormLabel>Email</BezierFormLabel>
          <TextInput placeholder="name@company.com" />
          <BezierFormHelperText>
            Use your work email to join the workspace.
          </BezierFormHelperText>
          <BezierFormErrorMessage>
            Enter a valid email address.
          </BezierFormErrorMessage>
        </BezierFormField>
      </Form>
      <Button
        label={hasError ? 'Clear error' : 'Show error'}
        onClick={() => setHasError(!hasError)}
      />
    </VStack>
  )
}

export const Validation: StoryObj<FormFieldProps> = {
  render: (args) => <ValidationExample {...args} />,
  args: { labelPosition: 'left' },
  argTypes: { hasError: { table: { disable: true } } },
}

export const LongContent: StoryObj<FormFieldProps> = {
  render: (args) => (
    <Form style={{ width: 280 }}>
      <BezierFormField {...args}>
        <BezierFormLabel help="Choose a name for your team.">
          Workspace notification preferences
        </BezierFormLabel>
        <TextInput defaultValue="Customer support workspace" />
        <BezierFormHelperText>
          https://workspace.channel.io/preferences/notifications
        </BezierFormHelperText>
        <BezierFormErrorMessage>
          This workspace name is already taken. Choose a different name to
          continue.
        </BezierFormErrorMessage>
      </BezierFormField>
    </Form>
  ),
  args: { labelPosition: 'left', hasError: true, required: true },
}

// Consumer wrappers must not need to expose their React component identity.
const SettingsLabel = ({ children }: { children: React.ReactNode }) => (
  <BezierFormLabel>{children}</BezierFormLabel>
)

function WrappedLabelsExample(args: FormFieldProps) {
  const [narrow, setNarrow] = useState(false)
  return (
    <VStack spacing={20}>
      <Button
        label="Toggle width"
        onClick={() => setNarrow(!narrow)}
      />
      <Form style={{ width: narrow ? 320 : 520 }}>
        <BezierFormField {...args}>
          <SettingsLabel>Work email</SettingsLabel>
          <TextInput placeholder="name@company.com" />
          <BezierFormHelperText>
            Invitations, billing notifications, and important workspace updates
            will be sent to this address. Choose an address that your team
            checks regularly so that you do not miss an update.
          </BezierFormHelperText>
          <BezierFormErrorMessage>
            Enter a valid work email.
          </BezierFormErrorMessage>
        </BezierFormField>
        <BezierFormField {...args}>
          <SettingsLabel>Welcome message</SettingsLabel>
          <TextArea
            minRows={6}
            maxRows={16}
            placeholder="Welcome your teammates"
          />
          <BezierFormHelperText>Shown to new teammates.</BezierFormHelperText>
          <BezierFormErrorMessage>
            Enter a welcome message.
          </BezierFormErrorMessage>
        </BezierFormField>
        <BezierFormField {...args}>
          <div>
            <SettingsLabel>Workspace name</SettingsLabel>
            <BezierFormHelperText>Shown in invitations.</BezierFormHelperText>
          </div>
          <div>
            <TextInput placeholder="Your workspace" />
            <BezierFormErrorMessage>
              Choose a workspace name.
            </BezierFormErrorMessage>
          </div>
        </BezierFormField>
        <BezierFormField
          {...args}
          style={{
            gridTemplateColumns: '132px minmax(0, 1fr)',
            columnGap: 8,
            padding: 0,
          }}
        >
          <SettingsLabel>Display name</SettingsLabel>
          <TextInput placeholder="Your name" />
        </BezierFormField>
        <BezierFormField {...args}>
          <TextInput
            aria-label="Internal note"
            placeholder="Add an internal note"
          />
        </BezierFormField>
      </Form>
    </VStack>
  )
}

export const WrappedLabels: StoryObj<FormFieldProps> = {
  render: (args) => <WrappedLabelsExample {...args} />,
  args: { labelPosition: 'left', hasError: true },
}

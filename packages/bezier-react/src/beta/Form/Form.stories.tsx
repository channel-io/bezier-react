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
        <BezierFormHelperText>Enter your work email.</BezierFormHelperText>
        <VStack
          width="100%"
          spacing={4}
        >
          <TextInput placeholder="name@company.com" />
          <BezierFormErrorMessage>Email is required.</BezierFormErrorMessage>
        </VStack>
      </BezierFormField>

      <BezierFormField
        labelPosition={args.labelPosition}
        hasError={args.hasError}
        disabled={args.disabled}
        readOnly={args.readOnly}
        required={args.required}
      >
        <BezierFormLabel>Message</BezierFormLabel>
        <BezierFormHelperText>Write a short message.</BezierFormHelperText>
        <VStack
          width="100%"
          spacing={4}
        >
          <TextArea
            placeholder="Enter a message"
            minRows={3}
            maxRows={3}
          />
          <BezierFormErrorMessage>Message is required.</BezierFormErrorMessage>
        </VStack>
      </BezierFormField>

      <BezierFormField
        labelPosition={args.labelPosition}
        hasError={args.hasError}
        disabled={args.disabled}
        readOnly={args.readOnly}
        required={args.required}
      >
        <BezierFormLabel>Notifications</BezierFormLabel>
        <BezierFormHelperText>
          Select at least one channel.
        </BezierFormHelperText>
        <VStack
          width="100%"
          spacing={4}
        >
          <BezierFormGroup direction="horizontal">
            <Checkbox>Email</Checkbox>
            <Checkbox>SMS</Checkbox>
            <Checkbox>Push</Checkbox>
          </BezierFormGroup>
          <BezierFormErrorMessage>
            Select a notification channel.
          </BezierFormErrorMessage>
        </VStack>
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
        <BezierFormHelperText>Enter your work email.</BezierFormHelperText>
        <VStack
          width="100%"
          spacing={4}
        >
          <TextInput placeholder="name@company.com" />
          <BezierFormErrorMessage>Email is required.</BezierFormErrorMessage>
        </VStack>
      </BezierFormField>

      <BezierFormField
        style={{ width: FIELD_WIDTH }}
        {...args}
        hasError
      >
        <BezierFormLabel>Email</BezierFormLabel>
        <BezierFormHelperText>Enter your work email.</BezierFormHelperText>
        <VStack
          width="100%"
          spacing={4}
        >
          <TextInput placeholder="name@company.com" />
          <BezierFormErrorMessage>Email is required.</BezierFormErrorMessage>
        </VStack>
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
      <BezierFormHelperText>Enter your work email.</BezierFormHelperText>
      <VStack
        width="100%"
        spacing={4}
      >
        <TextInput placeholder="name@company.com" />
        <BezierFormErrorMessage>Email is required.</BezierFormErrorMessage>
      </VStack>
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
              <BezierFormHelperText>
                We will send workspace invitations to this address.
              </BezierFormHelperText>
              <VStack
                width="100%"
                spacing={4}
              >
                <TextInput placeholder="name@company.com" />
                <BezierFormErrorMessage>
                  Enter a valid work email address to receive your invitation.
                </BezierFormErrorMessage>
              </VStack>
            </BezierFormField>
            <BezierFormField
              {...args}
              labelPosition={labelPosition}
              hasError
              required
            >
              <BezierFormLabel>Workspace name</BezierFormLabel>
              <BezierFormHelperText>
                A name that your teammates will recognize.
              </BezierFormHelperText>
              <VStack
                width="100%"
                spacing={4}
              >
                <TextInput
                  defaultValue="My workspace"
                  size="l"
                />
                <BezierFormErrorMessage>
                  This name is already taken. Choose a different name for your
                  workspace.
                </BezierFormErrorMessage>
              </VStack>
            </BezierFormField>
            <BezierFormField
              {...args}
              labelPosition={labelPosition}
            >
              <BezierFormLabel>Notifications</BezierFormLabel>
              <BezierFormHelperText>
                Choose how you want to hear from us.
              </BezierFormHelperText>
              <VStack
                width="100%"
                spacing={4}
              >
                <BezierFormGroup direction="horizontal">
                  <Checkbox>Email</Checkbox>
                  <Checkbox>SMS</Checkbox>
                </BezierFormGroup>
                <BezierFormErrorMessage>
                  Select a notification channel.
                </BezierFormErrorMessage>
              </VStack>
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
          <BezierFormHelperText>
            Each control owns its size.
          </BezierFormHelperText>
          <VStack
            width="100%"
            spacing={4}
          >
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
            <BezierFormErrorMessage>
              Complete the workspace details.
            </BezierFormErrorMessage>
          </VStack>
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
          <BezierFormHelperText>
            Use your work email to join the workspace.
          </BezierFormHelperText>
          <VStack
            width="100%"
            spacing={4}
          >
            <TextInput placeholder="name@company.com" />
            <BezierFormErrorMessage>
              Enter a valid email address.
            </BezierFormErrorMessage>
          </VStack>
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
        <BezierFormHelperText>
          https://workspace.channel.io/preferences/notifications
        </BezierFormHelperText>
        <VStack
          width="100%"
          spacing={4}
        >
          <TextInput defaultValue="Customer support workspace" />
          <BezierFormErrorMessage>
            This workspace name is already taken. Choose a different name to
            continue.
          </BezierFormErrorMessage>
        </VStack>
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
          <BezierFormHelperText>
            Invitations, billing notifications, and important workspace updates
            will be sent to this address. Choose an address that your team
            checks regularly so that you do not miss an update.
          </BezierFormHelperText>
          <VStack
            width="100%"
            spacing={4}
          >
            <TextInput placeholder="name@company.com" />
            <BezierFormErrorMessage>
              Enter a valid work email.
            </BezierFormErrorMessage>
          </VStack>
        </BezierFormField>
        <BezierFormField {...args}>
          <SettingsLabel>Welcome message</SettingsLabel>
          <BezierFormHelperText>Shown to new teammates.</BezierFormHelperText>
          <VStack
            width="100%"
            spacing={4}
          >
            <TextArea
              minRows={6}
              maxRows={16}
              placeholder="Welcome your teammates"
            />
            <BezierFormErrorMessage>
              Enter a welcome message.
            </BezierFormErrorMessage>
          </VStack>
        </BezierFormField>
        <BezierFormField {...args}>
          <div>
            <SettingsLabel>Workspace name</SettingsLabel>
            <BezierFormHelperText>Shown in invitations.</BezierFormHelperText>
          </div>
          <VStack
            width="100%"
            spacing={4}
          >
            <TextInput placeholder="Your workspace" />
            <BezierFormErrorMessage>
              Choose a workspace name.
            </BezierFormErrorMessage>
          </VStack>
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
          <BezierFormErrorMessage>
            Choose a display name.
          </BezierFormErrorMessage>
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

export const ContentCombinations: StoryObj<FormFieldProps> = {
  render: (args) => (
    <Form style={{ width: 520 }}>
      <BezierFormField {...args}>
        <BezierFormLabel>Invitations</BezierFormLabel>
        <Button label="Manage invitations" />
        <BezierFormHelperText>
          Invite teammates to your workspace.
        </BezierFormHelperText>
      </BezierFormField>
      <BezierFormField {...args}>
        <BezierFormLabel>Workspace access</BezierFormLabel>
        <BezierFormHelperText>
          Your administrator manages access to this workspace.
        </BezierFormHelperText>
      </BezierFormField>
      <BezierFormField
        {...args}
        hasError
      >
        <BezierFormLabel>Workspace name</BezierFormLabel>
        <BezierFormHelperText>
          Choose a name your teammates will recognize.
        </BezierFormHelperText>
        <VStack
          width="100%"
          spacing={4}
        >
          <TextInput placeholder="Your workspace" />
          <VStack
            width="100%"
            spacing={0}
          >
            <BezierFormErrorMessage>
              This name is already taken.
            </BezierFormErrorMessage>
            <BezierFormErrorMessage>
              Use at least three characters.
            </BezierFormErrorMessage>
          </VStack>
        </VStack>
      </BezierFormField>
    </Form>
  ),
  args: { labelPosition: 'left' },
}

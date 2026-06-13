'use client'

import { forwardRef } from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { BaseTextInput, type TextInputRef } from '~/src/v3/BaseTextInput'
import { Icon } from '~/src/v3/Icon'
import { Text } from '~/src/v3/Text'

import { useFormFieldProps } from '~/src/components/FormControl'

import type { TextInputProps, TextInputSideContent } from './TextInput.types'

import styles from './TextInput.module.scss'

function TextInputSideContentElement({
  content,
}: {
  content?: TextInputSideContent
}) {
  if (typeof content === 'string') {
    return (
      <Text
        typo="13"
        color="text-neutral-light"
        truncated
      >
        {content}
      </Text>
    )
  }

  if (isBezierIcon(content)) {
    return (
      <Icon
        source={content}
        size="16"
        color="icon-neutral"
        aria-hidden
      />
    )
  }

  return <>{content}</>
}

function normalizeFormFieldSize(size?: string) {
  return size === 'l' ? 'l' : 'm'
}

/**
 * `TextInput` is a single-line text input.
 * Use `Search` for search inputs with a fixed search icon and clear behavior.
 * @example
 *
 * ```tsx
 * <TextInput
 *   placeholder="Placeholder"
 *   leadingContent="https://"
 * />
 * ```
 */
export const TextInput = forwardRef<TextInputRef, TextInputProps>(
  function TextInput(
    {
      className,
      type = 'text',
      size,
      variant = 'primary',
      leadingContent,
      trailingContent,
      withoutLeadingContentWrapper,
      withoutTrailingContentWrapper,
      ...rest
    },
    forwardedRef
  ) {
    const {
      disabled,
      readOnly,
      hasError: _hasError,
      size: formFieldSize,
      ...inputProps
    } = useFormFieldProps(rest)
    const inputSize = size ?? normalizeFormFieldSize(formFieldSize)
    const leadingSlot =
      leadingContent != null ? (
        <TextInputSideContentElement content={leadingContent} />
      ) : undefined
    const trailingSlot =
      trailingContent != null ? (
        <TextInputSideContentElement content={trailingContent} />
      ) : undefined

    return (
      <BaseTextInput
        ref={forwardedRef}
        className={classNames(
          styles.TextInput,
          styles[`variant-${variant}`],
          className
        )}
        type={type}
        size={inputSize}
        disabled={disabled}
        readOnly={readOnly}
        leadingSlot={leadingSlot}
        trailingSlot={trailingSlot}
        withoutLeadingSlotWrapper={withoutLeadingContentWrapper}
        withoutTrailingSlotWrapper={withoutTrailingContentWrapper}
        {...inputProps}
      />
    )
  }
)

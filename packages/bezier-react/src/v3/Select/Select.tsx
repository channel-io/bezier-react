'use client'

import {
  forwardRef,
  useCallback,
  useState,
} from 'react'
import * as React from 'react'

import {
  ChevronSmallDownIcon,
  ChevronSmallUpIcon,
  isBezierIcon,
} from '@channel.io/bezier-icons'
import classNames from 'classnames'

import useMergeRefs from '~/src/hooks/useMergeRefs'
import {
  BaseSelect,
  BaseSelectGroup,
  BaseSelectOption,
  BaseSelectTrigger,
} from '~/src/v3/BaseSelect/BaseSelect'
import baseStyles from '~/src/v3/BaseSelect/BaseSelect.module.scss'

import type {
  SelectGroupProps,
  SelectOptionData,
  SelectOptionProps,
  SelectOptionSideContent,
  SelectProps,
  SelectTriggerProps,
  SelectTriggerRenderProps,
  SelectValue,
} from './Select.types'

export const Select = forwardRef(function Select<Value extends SelectValue>(
  {
    value,
    defaultValue = null,
    onValueChange,
    placeholder,
    leadingContent,
    withoutChevron = false,
    ...props
  }: SelectProps<Value>,
  forwardedRef: React.Ref<HTMLDivElement>
) {
  const [uncontrolledValue, setUncontrolledValue] = useState<Value | null>(
    defaultValue
  )
  const controlledValue = value !== undefined
  const selectedValue = controlledValue ? (value ?? null) : uncontrolledValue
  const selectedValues = selectedValue == null ? [] : [selectedValue]

  const handleOptionSelect = useCallback(
    (nextValue: Value) => {
      if (!controlledValue) {
        setUncontrolledValue(nextValue)
      }

      onValueChange?.(nextValue)
    },
    [controlledValue, onValueChange]
  )

  return (
    <BaseSelect<Value>
      {...props}
      ref={forwardedRef}
      selectedValues={selectedValues}
      onOptionSelect={handleOptionSelect}
      closeOnOptionSelect
      renderTrigger={({
        trigger,
        triggerProps,
        open,
        selectedOption,
        size,
        readOnly,
        hasError,
      }) => {
        if (trigger) {
          return (
            trigger as React.ReactElement<SelectTriggerProps<Value>>
          ).props.children({
            triggerProps,
            open,
            selectedOption: selectedOption as SelectOptionData<Value> | null,
            placeholder,
          })
        }

        return (
          <DefaultSelectTrigger
            triggerProps={triggerProps}
            open={open}
            size={size}
            readOnly={readOnly}
            invalid={hasError}
            selectedOption={selectedOption}
            placeholder={placeholder}
            leadingContent={leadingContent}
            withoutChevron={withoutChevron}
          />
        )
      }}
    />
  )
}) as <Value extends SelectValue = SelectValue>(
  props: SelectProps<Value> & {
    ref?: React.ForwardedRef<HTMLDivElement>
  }
) => React.ReactElement

function SelectSideContentElement({
  content,
}: {
  content?: SelectOptionSideContent
}) {
  if (isBezierIcon(content)) {
    const SourceElement = content

    return (
      <SourceElement
        className={baseStyles.SideIcon}
        aria-hidden
      />
    )
  }

  return content
}

function DefaultSelectTrigger({
  triggerProps,
  open,
  size,
  invalid,
  readOnly,
  selectedOption,
  placeholder,
  leadingContent,
  withoutChevron,
}: {
  triggerProps: SelectTriggerRenderProps['triggerProps']
  open: boolean
  size: SelectProps['size']
  invalid?: boolean
  readOnly?: boolean
  selectedOption: SelectOptionData | null
  placeholder?: React.ReactNode
  leadingContent?: SelectOptionSideContent
  withoutChevron?: boolean
}) {
  const triggerRef = useMergeRefs(triggerProps.ref)
  const hasValue = selectedOption != null

  return (
    <button
      {...triggerProps}
      ref={triggerRef}
      className={classNames(
        baseStyles.Trigger,
        baseStyles[`size-${size}`],
        open && baseStyles.open,
        invalid && baseStyles.invalid,
        readOnly && baseStyles.readonly,
        triggerProps.className
      )}
    >
      {leadingContent != null && (
        <span className={baseStyles.SideContent}>
          <SelectSideContentElement content={leadingContent} />
        </span>
      )}

      <span
        className={baseStyles.TriggerMain}
        data-b-select-trigger-main="true"
      >
        <span
          className={classNames(
            baseStyles.SingleValue,
            !hasValue && baseStyles.Placeholder
          )}
        >
          {selectedOption?.label ?? placeholder}
        </span>
      </span>

      {!withoutChevron && (
        <span className={baseStyles.Chevron}>
          {open ? (
            <ChevronSmallUpIcon
              className={baseStyles.ChevronIcon}
              aria-hidden
            />
          ) : (
            <ChevronSmallDownIcon
              className={baseStyles.ChevronIcon}
              aria-hidden
            />
          )}
        </span>
      )}
    </button>
  )
}

export const SelectTrigger = BaseSelectTrigger as <
  Value extends SelectValue = SelectValue,
>(
  props: SelectTriggerProps<Value>
) => React.ReactElement | null

export const SelectOption = BaseSelectOption as <
  Value extends SelectValue = SelectValue,
>(
  props: SelectOptionProps<Value> & {
    ref?: React.ForwardedRef<HTMLDivElement>
  }
) => React.ReactElement

export const SelectGroup = BaseSelectGroup as (
  props: SelectGroupProps & {
    ref?: React.ForwardedRef<HTMLDivElement>
  }
) => React.ReactElement

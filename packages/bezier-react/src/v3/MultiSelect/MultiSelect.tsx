'use client'

import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import * as React from 'react'

import {
  ChevronSmallDownIcon,
  ChevronSmallUpIcon,
  isBezierIcon,
} from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { useIsomorphicLayoutEffect } from '~/src/hooks/useIsomorphicLayoutEffect'
import useMergeRefs from '~/src/hooks/useMergeRefs'
import {
  BaseSelect,
  BaseSelectGroup,
  BaseSelectOption,
  BaseSelectTrigger,
} from '~/src/v3/BaseSelect/BaseSelect'
import baseStyles from '~/src/v3/BaseSelect/BaseSelect.module.scss'
import { Tag } from '~/src/v3/Tag'

import { useWindow } from '~/src/components/WindowProvider'


import type {
  MultiSelectGroupProps,
  MultiSelectOptionData,
  MultiSelectOptionProps,
  MultiSelectOptionSideContent,
  MultiSelectProps,
  MultiSelectTriggerProps,
  MultiSelectTriggerRenderProps,
  MultiSelectValue,
} from './MultiSelect.types'

import styles from './MultiSelect.module.scss'

const SELECT_SELECTED_VALUE_GAP = 6
const SELECT_SELECTED_VALUE_COUNT_GAP = 8

const noop = () => {}

export const MultiSelect = forwardRef(function MultiSelect<
  Value extends MultiSelectValue,
>(
  {
    className,
    value,
    defaultValue = [],
    onValueChange,
    placeholder,
    leadingContent,
    withoutChevron = false,
    selectedValuesOverflow = 'wrap',
    ...props
  }: MultiSelectProps<Value>,
  forwardedRef: React.Ref<HTMLDivElement>
) {
  const [uncontrolledValue, setUncontrolledValue] =
    useState<readonly Value[]>(defaultValue)
  const controlledValue = value !== undefined
  const selectedValues = useMemo(
    () => (controlledValue ? (value ?? []) : uncontrolledValue),
    [controlledValue, uncontrolledValue, value]
  )

  const handleValueChange = useCallback(
    (nextValue: readonly Value[]) => {
      if (!controlledValue) {
        setUncontrolledValue(nextValue)
      }

      onValueChange?.(nextValue)
    },
    [controlledValue, onValueChange]
  )

  const handleOptionSelect = useCallback(
    (nextValue: Value) => {
      handleValueChange(
        selectedValues.includes(nextValue)
          ? selectedValues.filter((item) => item !== nextValue)
          : [...selectedValues, nextValue]
      )
    },
    [handleValueChange, selectedValues]
  )

  return (
    <BaseSelect<Value>
      {...props}
      className={classNames(styles.MultiSelect, className)}
      ref={forwardedRef}
      selectedValues={selectedValues}
      onOptionSelect={handleOptionSelect}
      ariaMultiselectable
      renderTrigger={({
        trigger,
        triggerProps,
        open,
        selectedOptions,
        size,
        disabled,
        readOnly,
        hasError,
      }) => {
        if (trigger) {
          return (
            trigger as React.ReactElement<MultiSelectTriggerProps<Value>>
          ).props.children({
            triggerProps,
            open,
            selectedOptions:
              selectedOptions as readonly MultiSelectOptionData<Value>[],
            value: selectedValues,
            placeholder,
            onValueChange: handleValueChange,
          })
        }

        return (
          <DefaultMultiSelectTrigger
            triggerProps={triggerProps}
            open={open}
            size={size}
            disabled={disabled}
            readOnly={readOnly}
            invalid={hasError}
            selectedOptions={selectedOptions}
            value={selectedValues}
            placeholder={placeholder}
            leadingContent={leadingContent}
            withoutChevron={withoutChevron}
            selectedValuesOverflow={selectedValuesOverflow}
            onValueChange={handleValueChange}
          />
        )
      }}
    />
  )
}) as <Value extends MultiSelectValue = MultiSelectValue>(
  props: MultiSelectProps<Value> & {
    ref?: React.ForwardedRef<HTMLDivElement>
  }
) => React.ReactElement

function MultiSelectSideContentElement({
  content,
}: {
  content?: MultiSelectOptionSideContent
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

function getEllipsisVisibleCount({
  container,
  measure,
  selectedCount,
}: {
  container: HTMLElement
  measure: HTMLElement
  selectedCount: number
}) {
  const containerWidth = container.getBoundingClientRect().width

  if (containerWidth <= 0 || selectedCount === 0) {
    return selectedCount
  }

  const tagElements = Array.from(
    measure.querySelectorAll<HTMLElement>('[data-b-select-measure-tag="true"]')
  )
  const countWidthByHiddenCount = new Map(
    Array.from(
      measure.querySelectorAll<HTMLElement>(
        '[data-b-select-measure-count-value]'
      )
    ).map((element) => [
      Number(element.dataset.bSelectMeasureCountValue),
      element.getBoundingClientRect().width,
    ])
  )

  let usedWidth = 0
  let visibleCount = 0

  for (const tagElement of tagElements) {
    const tagWidth = tagElement.getBoundingClientRect().width
    const nextVisibleCount = visibleCount + 1
    const nextUsedWidth =
      usedWidth +
      (visibleCount > 0 ? SELECT_SELECTED_VALUE_GAP : 0) +
      tagWidth
    const hiddenCount = selectedCount - nextVisibleCount
    const summaryWidth =
      hiddenCount > 0
        ? SELECT_SELECTED_VALUE_COUNT_GAP +
          (countWidthByHiddenCount.get(hiddenCount) ?? 0)
        : 0

    if (nextUsedWidth + summaryWidth > containerWidth) {
      break
    }

    usedWidth = nextUsedWidth
    visibleCount = nextVisibleCount
  }

  return visibleCount
}

function useEllipsisSelectedValues({
  enabled,
  selectedOptions,
}: {
  enabled: boolean
  selectedOptions: readonly MultiSelectOptionData[]
}) {
  const { window } = useWindow()
  const triggerMainRef = useRef<HTMLSpanElement>(null)
  const measureRef = useRef<HTMLDivElement>(null)
  const [visibleCount, setVisibleCount] = useState(selectedOptions.length)

  const updateVisibleCount = useCallback(() => {
    if (!enabled) {
      setVisibleCount(selectedOptions.length)
      return
    }

    const triggerMainElement = triggerMainRef.current
    const measureElement = measureRef.current

    if (!triggerMainElement || !measureElement) {
      setVisibleCount(selectedOptions.length)
      return
    }

    const nextVisibleCount = getEllipsisVisibleCount({
      container: triggerMainElement,
      measure: measureElement,
      selectedCount: selectedOptions.length,
    })

    setVisibleCount((prevVisibleCount) =>
      prevVisibleCount === nextVisibleCount
        ? prevVisibleCount
        : nextVisibleCount
    )
  }, [enabled, selectedOptions.length])

  useIsomorphicLayoutEffect(
    function updateInitialVisibleCount() {
      updateVisibleCount()
    },
    [updateVisibleCount, selectedOptions]
  )

  useEffect(() => {
    if (!enabled) {
      return
    }

    const ResizeObserverConstructor = (
      window as Window & { ResizeObserver?: typeof ResizeObserver }
    ).ResizeObserver

    if (!ResizeObserverConstructor) {
      window.addEventListener('resize', updateVisibleCount)

      return () => {
        window.removeEventListener('resize', updateVisibleCount)
      }
    }

    const resizeObserver = new ResizeObserverConstructor(updateVisibleCount)

    if (triggerMainRef.current) {
      resizeObserver.observe(triggerMainRef.current)
    }

    if (measureRef.current) {
      resizeObserver.observe(measureRef.current)
    }

    return () => {
      resizeObserver.disconnect()
    }
  }, [enabled, updateVisibleCount, window])

  return {
    triggerMainRef,
    measureRef,
    visibleCount: enabled
      ? Math.min(visibleCount, selectedOptions.length)
      : selectedOptions.length,
  }
}

function DefaultMultiSelectTrigger<Value extends MultiSelectValue>({
  triggerProps,
  open,
  size,
  disabled,
  invalid,
  readOnly,
  selectedOptions,
  value,
  placeholder,
  leadingContent,
  withoutChevron,
  selectedValuesOverflow,
  onValueChange,
}: {
  triggerProps: MultiSelectTriggerRenderProps['triggerProps']
  open: boolean
  size: MultiSelectProps['size']
  disabled?: boolean
  invalid?: boolean
  readOnly?: boolean
  selectedOptions: readonly MultiSelectOptionData<Value>[]
  value: readonly Value[]
  placeholder?: React.ReactNode
  leadingContent?: MultiSelectOptionSideContent
  withoutChevron?: boolean
  selectedValuesOverflow: NonNullable<
    MultiSelectProps['selectedValuesOverflow']
  >
  onValueChange: (value: readonly Value[]) => void
}) {
  const hasValue = selectedOptions.length > 0
  const shouldEllipsizeSelectedValues =
    hasValue && selectedValuesOverflow === 'ellipsis'
  const {
    triggerMainRef,
    measureRef,
    visibleCount: visibleSelectedCount,
  } = useEllipsisSelectedValues({
    enabled: shouldEllipsizeSelectedValues,
    selectedOptions,
  })
  const visibleSelectedOptions = selectedOptions.slice(0, visibleSelectedCount)
  const hiddenSelectedCount =
    selectedOptions.length - visibleSelectedOptions.length
  const {
    ref: _triggerRef,
    type: _type,
    disabled: _disabled,
    ...triggerDivProps
  } = triggerProps
  const triggerRef = useMergeRefs(
    triggerProps.ref as React.RefCallback<HTMLDivElement>
  )

  return (
    <div
      {...(triggerDivProps as React.HTMLAttributes<HTMLDivElement>)}
      ref={triggerRef}
      role="combobox"
      tabIndex={disabled ? undefined : 0}
      className={classNames(
        baseStyles.Trigger,
        baseStyles[`size-${size}`],
        open && baseStyles.open,
        invalid && baseStyles.invalid,
        readOnly && baseStyles.readonly,
        disabled && baseStyles.disabled,
        triggerProps.className
      )}
    >
      {leadingContent != null && (
        <span className={baseStyles.SideContent}>
          <MultiSelectSideContentElement content={leadingContent} />
        </span>
      )}

      <span
        ref={triggerMainRef}
        className={baseStyles.TriggerMain}
        data-b-select-trigger-main="true"
        data-b-multi-select-selected-values-trigger-overflow={
          shouldEllipsizeSelectedValues ? 'ellipsis' : undefined
        }
      >
        {hasValue ? (
          <>
            <span
              data-b-multi-select-selected-values-list="true"
              data-b-multi-select-selected-values-list-overflow={
                shouldEllipsizeSelectedValues ? 'ellipsis' : undefined
              }
            >
              {visibleSelectedOptions.map((option) => (
                <Tag
                  key={option.value}
                  size={size === 'l' ? 'l' : 'm'}
                  variant="default"
                  onDelete={(event) => {
                    event.preventDefault()
                    onValueChange(value.filter((item) => item !== option.value))
                  }}
                >
                  {option.label}
                </Tag>
              ))}
              {shouldEllipsizeSelectedValues && (
                <div
                  ref={measureRef}
                  data-b-multi-select-selected-values-measure="true"
                  aria-hidden
                >
                  {selectedOptions.map((option) => (
                    <span
                      key={option.value}
                      data-b-select-measure-tag="true"
                    >
                      <Tag
                        size={size === 'l' ? 'l' : 'm'}
                        variant="default"
                        onDelete={noop}
                      >
                        {option.label}
                      </Tag>
                    </span>
                  ))}
                  {selectedOptions.map((_, index) => {
                    const hiddenCount = index + 1

                    return (
                      <span
                        key={hiddenCount}
                        data-b-multi-select-selected-values-count="true"
                        data-b-select-measure-count-value={hiddenCount}
                      >
                        +{hiddenCount}
                      </span>
                    )
                  })}
                </div>
              )}
            </span>
            {hiddenSelectedCount > 0 && (
              <span data-b-multi-select-selected-values-count="true">
                +{hiddenSelectedCount}
              </span>
            )}
          </>
        ) : (
          <span
            className={classNames(
              baseStyles.SingleValue,
              baseStyles.Placeholder
            )}
          >
            {placeholder}
          </span>
        )}
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
    </div>
  )
}

export const MultiSelectTrigger = BaseSelectTrigger as <
  Value extends MultiSelectValue = MultiSelectValue,
>(
  props: MultiSelectTriggerProps<Value>
) => React.ReactElement | null

export const MultiSelectOption = BaseSelectOption as <
  Value extends MultiSelectValue = MultiSelectValue,
>(
  props: MultiSelectOptionProps<Value> & {
    ref?: React.ForwardedRef<HTMLDivElement>
  }
) => React.ReactElement

export const MultiSelectGroup = BaseSelectGroup as (
  props: MultiSelectGroupProps & {
    ref?: React.ForwardedRef<HTMLDivElement>
  }
) => React.ReactElement

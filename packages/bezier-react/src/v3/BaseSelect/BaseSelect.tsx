'use client'

import {
  Children,
  Fragment,
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'
import * as React from 'react'

import { CheckIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import useMergeRefs from '~/src/hooks/useMergeRefs'
import { ariaAttr } from '~/src/utils/aria'
import { createContext } from '~/src/utils/react'
import { cssDimension } from '~/src/utils/style'
import { isNil } from '~/src/utils/type'
import { BaseItem } from '~/src/v3/BaseItem/BaseItem'
import { useFormFieldProps } from '~/src/v3/Form'
import { Overlay } from '~/src/v3/Overlay'

import { useWindow } from '~/src/components/WindowProvider'

import type {
  BaseMultiSelectTriggerProps,
  BaseSelectGroupProps,
  BaseSelectOptionData,
  BaseSelectOptionProps,
  BaseSelectProps,
  BaseSelectTriggerProps,
  BaseSelectValue,
} from './BaseSelect.types'

import styles from './BaseSelect.module.scss'

type SelectValue = BaseSelectValue
type SelectProps<Value extends SelectValue = SelectValue> =
  BaseSelectProps<Value>
type SelectOptionData<Value extends SelectValue = SelectValue> =
  BaseSelectOptionData<Value>
type SelectOptionProps<Value extends SelectValue = SelectValue> =
  BaseSelectOptionProps<Value>
type SelectGroupProps = BaseSelectGroupProps
type SelectTriggerProps<Value extends SelectValue = SelectValue> =
  BaseSelectTriggerProps<Value>
type MultiSelectTriggerProps<Value extends SelectValue = SelectValue> =
  BaseMultiSelectTriggerProps<Value>

const SELECT_OPTION_SELECTOR =
  '[data-b-select-option="true"]:not([aria-disabled="true"])'

type SelectTriggerInjectedProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    ref: (element: HTMLButtonElement | null) => void
    'data-state': 'open' | 'closed'
  }

interface SelectContextValue {
  open: boolean
  listboxId: string
  selectedValues: readonly string[]
  selectValue: (value: string) => void
  close: () => void
  registerOption: (option: SelectOptionData) => () => void
}

const [SelectContextProvider, useSelectContext] =
  createContext<SelectContextValue | null>(null, 'BaseSelect')

type InternalSelectTrigger =
  | React.ReactElement<SelectTriggerProps>
  | React.ReactElement<MultiSelectTriggerProps>

function isSelectTriggerElement(
  child: React.ReactNode
): child is InternalSelectTrigger {
  return isValidElement(child) && child.type === BaseSelectTrigger
}

function isSelectOptionElement(
  child: React.ReactNode
): child is React.ReactElement<SelectOptionProps> {
  return isValidElement(child) && child.type === BaseSelectOption
}

function isSelectGroupElement(
  child: React.ReactNode
): child is React.ReactElement<SelectGroupProps> {
  return isValidElement(child) && child.type === BaseSelectGroup
}

function flattenChildren(children: React.ReactNode): React.ReactNode[] {
  return Children.toArray(children).flatMap((child) => {
    if (
      isValidElement<{ children?: React.ReactNode }>(child) &&
      child.type === Fragment
    ) {
      return flattenChildren(child.props.children)
    }

    return [child]
  })
}

function splitSelectChildren(children: React.ReactNode) {
  return flattenChildren(children).reduce<{
    trigger: InternalSelectTrigger | null
    options: React.ReactNode[]
  }>(
    (result, child) => {
      if (isSelectTriggerElement(child)) {
        result.trigger = child
      } else {
        result.options.push(child)
      }

      return result
    },
    {
      trigger: null,
      options: [],
    }
  )
}

function collectOptionData(children: React.ReactNode): SelectOptionData[] {
  return flattenChildren(children).flatMap((child) => {
    if (isSelectGroupElement(child)) {
      return collectOptionData(child.props.children)
    }

    if (!isSelectOptionElement(child)) {
      return []
    }

    const { value, label, content, disabled } = child.props

    return [
      {
        value,
        label: getOptionLabel({ value, label, content }),
        disabled,
      },
    ]
  })
}

function getOptionLabel({
  value,
  label,
  content,
}: {
  value: string
  label?: string
  content?: React.ReactNode
}) {
  return label ?? (typeof content === 'string' ? content : value)
}

function isSidePosition(position: NonNullable<SelectProps['position']>) {
  return position.startsWith('left') || position.startsWith('right')
}

function getOverlayMargins({
  position,
  offset,
}: {
  position: NonNullable<SelectProps['position']>
  offset: number
}) {
  return isSidePosition(position)
    ? { marginX: offset, marginY: 0 }
    : { marginX: 0, marginY: offset }
}

function isSelectTriggerSize(size: unknown): size is 'm' | 'l' {
  return size === 'm' || size === 'l'
}

function getFocusableOptions(container: HTMLElement | null) {
  if (!container) {
    return []
  }

  return Array.from(
    container.querySelectorAll<HTMLElement>(SELECT_OPTION_SELECTOR)
  )
}

function focusOption(container: HTMLElement | null, index: number) {
  getFocusableOptions(container)[index]?.focus()
}

function focusSelectedOrFirstOption(container: HTMLElement | null) {
  const options = getFocusableOptions(container)
  const selectedIndex = options.findIndex(
    (option) => option.getAttribute('aria-selected') === 'true'
  )

  options[selectedIndex === -1 ? 0 : selectedIndex]?.focus()
}

function moveFocus(container: HTMLElement | null, delta: number) {
  const options = getFocusableOptions(container)

  if (options.length === 0) {
    return
  }

  const currentIndex = options.findIndex(
    (option) => option === document.activeElement
  )
  const nextIndex =
    currentIndex === -1
      ? delta > 0
        ? 0
        : options.length - 1
      : (currentIndex + delta + options.length) % options.length

  options[nextIndex]?.focus()
}

function SelectListbox({
  children,
  multiselectable,
}: {
  children: React.ReactNode
  multiselectable?: boolean
}) {
  const { listboxId } = useSelectContext('SelectListbox')
  const { window } = useWindow()
  const contentRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = useCallback<React.KeyboardEventHandler<HTMLDivElement>>(
    (event) => {
      switch (event.key) {
        case 'ArrowDown': {
          event.preventDefault()
          moveFocus(contentRef.current, 1)
          break
        }
        case 'ArrowUp': {
          event.preventDefault()
          moveFocus(contentRef.current, -1)
          break
        }
        case 'Home': {
          event.preventDefault()
          focusOption(contentRef.current, 0)
          break
        }
        case 'End': {
          event.preventDefault()
          const options = getFocusableOptions(contentRef.current)
          options[options.length - 1]?.focus()
          break
        }
      }
    },
    []
  )

  useEffect(() => {
    window.requestAnimationFrame(() => {
      focusSelectedOrFirstOption(contentRef.current)
    })
  }, [window])

  return (
    <div
      id={listboxId}
      ref={contentRef}
      className={styles.Listbox}
      role="listbox"
      aria-multiselectable={multiselectable || undefined}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  )
}

function getSelectedOptions(
  options: readonly SelectOptionData[],
  values: readonly string[]
) {
  return values
    .map((value) => options.find((option) => option.value === value))
    .filter((option): option is SelectOptionData => option != null)
}

function SelectImpl<Value extends SelectValue>(
  {
    children,
    className,
    style,
    selectedValues,
    onOptionSelect,
    closeOnOptionSelect = false,
    ariaMultiselectable = false,
    renderTrigger,
    show,
    defaultShow = false,
    container,
    position = 'bottom-left',
    offset = 6,
    keepInContainer = false,
    dropdownWidth,
    dropdownMaxHeight,
    triggerSize,
    onShow,
    onHide,
    ...rest
  }: SelectProps<Value>,
  forwardedRef: React.Ref<HTMLDivElement>
) {
  const generatedId = useId()
  const listboxId = rest.id ? `${rest.id}-listbox` : `${generatedId}-listbox`
  const {
    disabled,
    readOnly,
    hasError,
    size: formFieldSize,
    ...triggerOwnProps
  } = useFormFieldProps(rest)
  const resolvedTriggerSize =
    triggerSize ?? (isSelectTriggerSize(formFieldSize) ? formFieldSize : 'm')
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultShow)
  const [selectElement, setSelectElement] = useState<HTMLDivElement | null>(
    null
  )
  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null)
  const rootRef = useMergeRefs(forwardedRef, setSelectElement)
  const registeredOptionsRef = useRef<Map<string, SelectOptionData>>(new Map())
  const [registeredOptions, setRegisteredOptions] = useState<
    SelectOptionData[]
  >([])
  const controlledOpen = !isNil(show)
  const open = controlledOpen ? Boolean(show) : uncontrolledOpen
  const resolvedSelectedValues = useMemo(
    () => [...selectedValues] as readonly string[],
    [selectedValues]
  )
  const { trigger, options } = splitSelectChildren(children)
  const childOptions = useMemo(() => collectOptionData(options), [options])
  const optionData =
    registeredOptions.length > 0 ? registeredOptions : childOptions
  const selectedOptions = getSelectedOptions(optionData, resolvedSelectedValues)
  const selectedOption = selectedOptions[0] ?? null

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (disabled || readOnly) {
        return
      }

      if (!controlledOpen) {
        setUncontrolledOpen(nextOpen)
      }

      if (nextOpen) {
        onShow?.()
      } else {
        onHide?.()
      }
    },
    [controlledOpen, disabled, onHide, onShow, readOnly]
  )

  const close = useCallback(() => {
    setOpen(false)
    triggerElement?.focus()
  }, [setOpen, triggerElement])

  const selectValue = useCallback(
    (nextValue: string) => {
      onOptionSelect(nextValue as Value)

      if (closeOnOptionSelect) {
        close()
      }
    },
    [close, closeOnOptionSelect, onOptionSelect]
  )

  const registerOption = useCallback((option: SelectOptionData) => {
    registeredOptionsRef.current.set(option.value, option)
    setRegisteredOptions(Array.from(registeredOptionsRef.current.values()))

    return () => {
      registeredOptionsRef.current.delete(option.value)
      setRegisteredOptions(Array.from(registeredOptionsRef.current.values()))
    }
  }, [])

  const contextValue = useMemo(
    (): SelectContextValue => ({
      open,
      listboxId,
      selectedValues: resolvedSelectedValues,
      selectValue,
      close,
      registerOption,
    }),
    [
      close,
      listboxId,
      open,
      registerOption,
      resolvedSelectedValues,
      selectValue,
    ]
  )

  const triggerProps = useMemo(
    (): SelectTriggerInjectedProps => ({
      ...triggerOwnProps,
      ref: setTriggerElement as React.RefCallback<HTMLButtonElement>,
      type: 'button',
      disabled,
      'aria-disabled': ariaAttr(disabled),
      'aria-invalid': ariaAttr(hasError),
      'aria-readonly': ariaAttr(readOnly),
      'aria-haspopup': 'listbox',
      'aria-expanded': open,
      'aria-controls': open ? listboxId : undefined,
      'data-state': open ? 'open' : 'closed',
      onClick: (event) => {
        triggerOwnProps.onClick?.(event)
        if (!event.defaultPrevented) {
          setOpen(!open)
        }
      },
      onKeyDown: (event) => {
        triggerOwnProps.onKeyDown?.(event)
        if (event.defaultPrevented) {
          return
        }

        if (
          event.key === 'ArrowDown' ||
          event.key === 'Enter' ||
          event.key === ' '
        ) {
          event.preventDefault()
          setOpen(true)
        }
      },
    }),
    [disabled, hasError, listboxId, open, readOnly, setOpen, triggerOwnProps]
  )

  const overlayMargins = getOverlayMargins({ position, offset })
  const resolvedDropdownWidth =
    dropdownWidth ?? triggerElement?.getBoundingClientRect().width ?? 224

  return (
    <SelectContextProvider value={contextValue}>
      <div
        ref={rootRef}
        className={classNames(styles.BaseSelect, className)}
        style={style}
      >
        {renderTrigger({
          trigger: trigger as React.ReactElement<
            SelectTriggerProps<Value> | MultiSelectTriggerProps<Value>
          > | null,
          triggerProps,
          open,
          selectedOption: selectedOption as SelectOptionData<Value> | null,
          selectedOptions: selectedOptions as SelectOptionData<Value>[],
          triggerSize: resolvedTriggerSize,
          disabled,
          readOnly,
          hasError,
        })}

        <Overlay
          className={styles.Dropdown}
          style={
            {
              '--b-v3-select-dropdown-width': cssDimension(
                resolvedDropdownWidth
              ),
              '--b-v3-select-dropdown-max-height': dropdownMaxHeight
                ? cssDimension(dropdownMaxHeight)
                : 'none',
            } as React.CSSProperties
          }
          show={open}
          target={triggerElement}
          container={container ?? selectElement}
          position={position}
          marginX={overlayMargins.marginX}
          marginY={overlayMargins.marginY}
          keepInContainer={keepInContainer}
          onHide={close}
        >
          <SelectListbox multiselectable={ariaMultiselectable}>
            {options}
          </SelectListbox>
        </Overlay>
      </div>
    </SelectContextProvider>
  )
}

function BaseSelectOptionElement<Value extends SelectValue>({
  forwardedRef,
  props,
}: {
  forwardedRef: React.Ref<HTMLDivElement>
  props: SelectOptionProps<Value>
}) {
  const {
    className,
    value,
    label,
    content,
    description,
    leadingContent,
    disabled = false,
    onKeyDown,
    ...rest
  } = props
  const { selectedValues, selectValue, registerOption } =
    useSelectContext('SelectOption')
  const optionLabel = getOptionLabel({ value, label, content })
  const selected = selectedValues.includes(value)
  const optionData = useMemo(
    (): SelectOptionData => ({
      value,
      label: optionLabel,
      disabled,
    }),
    [disabled, optionLabel, value]
  )
  const optionContent = content ?? optionLabel
  const optionTrailingContent = selected ? (
    <CheckIcon
      className={styles.OptionCheckIcon}
      aria-hidden
    />
  ) : null

  useEffect(() => registerOption(optionData), [optionData, registerOption])

  const selectOption = useCallback(() => {
    if (disabled) {
      return
    }

    selectValue(value)
  }, [disabled, selectValue, value])

  return (
    <BaseItem
      ref={forwardedRef}
      className={className}
      role="option"
      tabIndex={disabled ? undefined : -1}
      aria-selected={selected}
      aria-disabled={disabled || undefined}
      data-b-select-option="true"
      disabled={disabled}
      description={description}
      leadingContent={leadingContent}
      trailingContent={optionTrailingContent}
      {...rest}
      onClick={(event) => {
        if (!event.defaultPrevented) {
          selectOption()
        }
      }}
      onKeyDown={(event) => {
        onKeyDown?.(event)
        if (event.defaultPrevented) {
          return
        }

        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          selectOption()
        }
      }}
    >
      {optionContent}
    </BaseItem>
  )
}

export const BaseSelectGroup = forwardRef<HTMLDivElement, SelectGroupProps>(
  function BaseSelectGroup(
    { children, className, label, ...rest },
    forwardedRef
  ) {
    const generatedId = useId()

    return (
      <div
        ref={forwardedRef}
        className={classNames(styles.Group, className)}
        role="group"
        aria-labelledby={generatedId}
        {...rest}
      >
        <div
          id={generatedId}
          className={styles.GroupLabel}
        >
          {label}
        </div>
        <div className={styles.GroupContent}>{children}</div>
      </div>
    )
  }
)

export const BaseSelect = forwardRef(function BaseSelect<
  Value extends SelectValue,
>(props: SelectProps<Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  return SelectImpl(props, forwardedRef)
}) as <Value extends SelectValue = SelectValue>(
  props: SelectProps<Value> & {
    ref?: React.ForwardedRef<HTMLDivElement>
  }
) => React.ReactElement

export function BaseSelectTrigger<Value extends SelectValue>({
  children: _children,
}: SelectTriggerProps<Value> | MultiSelectTriggerProps<Value>) {
  return null
}

export const BaseSelectOption = forwardRef(function BaseSelectOption<
  Value extends SelectValue,
>(props: SelectOptionProps<Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <BaseSelectOptionElement
      forwardedRef={forwardedRef}
      props={props}
    />
  )
}) as <Value extends SelectValue = SelectValue>(
  props: SelectOptionProps<Value> & {
    ref?: React.ForwardedRef<HTMLDivElement>
  }
) => React.ReactElement

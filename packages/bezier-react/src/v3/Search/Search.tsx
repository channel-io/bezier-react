'use client'

import {
  type ChangeEvent,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { CancelCircleFilledIcon, SearchIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { BaseButton } from '~/src/v3/BaseButton'
import { BaseTextInput, type TextInputRef } from '~/src/v3/BaseTextInput'
import { Icon } from '~/src/v3/Icon'

import type { SearchProps } from './Search.types'

import styles from './Search.module.scss'

function hasInputValue(value: SearchProps['value'] | SearchProps['defaultValue']) {
  return value != null && String(value).length > 0
}

/**
 * `Search` is a search input with a fixed search icon.
 * The placeholder should describe the search scope.
 * @example
 *
 * ```tsx
 * <Search
 *   placeholder="Search by customer name or email"
 *   allowClear
 * />
 * ```
 */
export const Search = forwardRef<TextInputRef, SearchProps>(function Search(
  {
    className,
    size = 'm',
    allowClear = false,
    value,
    defaultValue,
    onChange,
    disabled,
    ...rest
  },
  forwardedRef
) {
  const inputRef = useRef<TextInputRef | null>(null)
  const [hasValue, setHasValue] = useState(() =>
    hasInputValue(value ?? defaultValue)
  )

  useEffect(() => {
    if (value != null) {
      setHasValue(hasInputValue(value))
    }
  }, [value])

  const setRefs = useCallback(
    (instance: TextInputRef | null) => {
      inputRef.current = instance

      if (typeof forwardedRef === 'function') {
        forwardedRef(instance)
      } else if (forwardedRef) {
        forwardedRef.current = instance
      }
    },
    [forwardedRef]
  )

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (value == null) {
        setHasValue(event.currentTarget.value.length > 0)
      }
      onChange?.(event)
    },
    [onChange, value]
  )

  const handleClear = useCallback(() => {
    const input = inputRef.current?.getDOMNode()

    if (!input || disabled) {
      return
    }

    const setValue = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value'
    )?.set
    const event = new Event('input', { bubbles: true })

    setValue?.call(input, '')
    input.dispatchEvent(event)
    setHasValue(false)
    inputRef.current?.focus()
  }, [disabled])

  const trailingSlot =
    allowClear && hasValue && !disabled ? (
      <BaseButton
        className={styles.ClearButton}
        aria-label="Clear search"
        onClick={handleClear}
      >
        <Icon
          source={CancelCircleFilledIcon}
          size="16"
          color="icon-neutral"
          aria-hidden
        />
      </BaseButton>
    ) : undefined

  return (
    <BaseTextInput
      ref={setRefs}
      className={classNames(styles.Search, className)}
      type="search"
      size={size}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={handleChange}
      leadingSlot={
        <SearchIcon
          className={styles.SearchIcon}
          aria-hidden
        />
      }
      trailingSlot={trailingSlot}
      withoutLeadingSlotWrapper
      withoutTrailingSlotWrapper
      {...rest}
    />
  )
})

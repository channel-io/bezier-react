/* External dependencies */
import React, {
  useState,
  useCallback,
  forwardRef,
  Ref,
  useLayoutEffect,
  useRef,
} from 'react'
import { noop } from 'lodash'

/* Internal dependencies */
import useMergeRefs from '../../../hooks/useMergeRefs'
import { TextAreaProps } from './TextArea.types'
import Styled from './TextArea.styled'

const TEXT_AREA_TEST_ID = 'ch-design-system-text-area'

const DEFAULT_MAX_HEIGHT = 300

function cursorToEnd(element: HTMLElement | null) {
  if (!element) {
    return
  }

  const target = document.createTextNode('')
  element.appendChild(target)

  const isTargetFocused = document.activeElement === element

  if (!target !== null && target.nodeValue !== null && isTargetFocused) {
    const selection = window.getSelection()
    if (selection !== null) {
      const range = document.createRange()
      range.setStart(target, target.nodeValue.length)
      range.collapse(true)
      selection.removeAllRanges()
      selection.addRange(range)
    }
    element.focus()
  }
}

function TextArea(
  {
    className,
    interpolation,
    inputInterpolation,
    autoFocus = false,
    maxHeight = DEFAULT_MAX_HEIGHT,
    placeholder,
    value = '',
    testId = TEXT_AREA_TEST_ID,
    onChange = noop,
    onFocus,
    onBlur,
    ...otherProps
  }: TextAreaProps,
  forwardedRef: Ref<HTMLDivElement>,
) {
  const [focused, setFocused] = useState(false)

  const inputRef = useRef<HTMLInputElement | null>(null)
  const mergedInputRef = useMergeRefs<HTMLDivElement>(inputRef, forwardedRef)

  const focus = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  const handleFocus = useCallback((event: React.FocusEvent<HTMLDivElement>) => {
    setFocused(true)
    onFocus?.(event)
  }, [onFocus])

  const handleBlur = useCallback((event: React.FocusEvent<HTMLDivElement>) => {
    setFocused(false)
    onBlur?.(event)
  }, [onBlur])

  const handleChangeInput = useCallback((e: React.ChangeEvent<HTMLDivElement>) => {
    onChange(e.target.innerText)
  }, [onChange])

  // eslint-disable-next-line prefer-arrow-callback
  useLayoutEffect(function initialAutoFocus() {
    if (autoFocus) {
      focus()
      cursorToEnd(inputRef.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Styled.Wrapper
      className={className}
      interpolation={interpolation}
      focused={focused}
      data-testid={testId}
      {...otherProps}
    >
      <Styled.Input
        // eslint-disable-next-line jsx-a11y/tabindex-no-positive
        tabIndex={1}
        ref={mergedInputRef}
        contentEditable={focused}
        placeholder={placeholder}
        maxHeight={maxHeight}
        spellCheck={false}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInput={handleChangeInput}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </Styled.Wrapper>
  )
}

export default forwardRef(TextArea)

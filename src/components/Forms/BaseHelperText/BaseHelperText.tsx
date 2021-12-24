/* External dependencies */
import React, { forwardRef, useCallback, useMemo } from 'react'
import { isEmpty, isNil } from 'lodash-es'

/* Internal dependencies */
import { Typography } from 'Foundation'
import useMergeRefs from 'Hooks/useMergeRefs'
import useFormControlContext from 'Components/Forms/useFormControlContext'
import type BaseHelperTextProps from './BaseHelperText.types'
import * as Styled from './BaseHelperText.styled'

/** @description Components used internally */
function BaseHelperText({
  as = 'p',
  type,
  typo = Typography.Size13,
  children,
  ...rest
}: BaseHelperTextProps,
forwardedRef: React.Ref<HTMLParamElement>,
) {
  const contextValue = useFormControlContext()

  const {
    setHasHelperText,
    hasError,
    Wrapper,
    ...ownProps
  } = contextValue?.getHelperTextProps(rest) ?? {
    ...rest,
    setHasHelperText: undefined,
    hasError: undefined,
    Wrapper: React.Fragment,
  }

  const setHasHelperTextRef = useCallback((node: HTMLElement | null) => {
    if (!node) { return }
    setHasHelperText?.(true)
  }, [setHasHelperText])

  const mergedRef = useMergeRefs(setHasHelperTextRef, forwardedRef)

  const shouldRendered = useMemo(() => {
    if (isEmpty(children)) { return false }
    if (
      isNil(hasError)
      || (type === 'info' && !hasError)
      || (type === 'error' && hasError)
    ) { return true }
    return false
  }, [
    type,
    hasError,
    children,
  ])

  if (!shouldRendered) { return null }

  return (
    <Wrapper>
      <Styled.HelperText
        {...ownProps}
        ref={mergedRef}
        forwardedAs={as}
        typo={typo}
      >
        { children }
      </Styled.HelperText>
    </Wrapper>
  )
}

export default forwardRef(BaseHelperText)

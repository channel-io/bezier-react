/* External dependencies */
import React, { forwardRef, useMemo, useCallback } from 'react'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { Typography } from 'Foundation'
import useMergeRefs from 'Hooks/useMergeRefs'
import useFormControlContext from 'Components/Forms/useFormControlContext'
import type { TextProps } from 'Components/Text'
import type FormHelperTextProps from './FormHelperText.types'
import * as Styled from './FormHelperText.styled'

export const FORM_HELPER_TEXT_TEST_ID = 'bezier-react-form-helper-text'

function FormHelperText({
  id,
  testId = FORM_HELPER_TEXT_TEST_ID,
  as = 'p',
  hasError: hasErrorProps,
  typo = Typography.Size13,
  marginTop = 4,
  children,
  ...rest
}: FormHelperTextProps,
forwardedRef: React.Ref<HTMLParamElement>,
) {
  const contextValue = useFormControlContext()

  const setIsRendered = useCallback((node: HTMLElement) => {
    if (!node) { return }
    contextValue?.setHasHelperText(true)
  }, [contextValue])

  const mergedRef = useMergeRefs<HTMLElement>(setIsRendered, forwardedRef)

  const mergedProps = useMemo<TextProps>(() => {
    const hasError = hasErrorProps ?? contextValue?.hasError
    return {
      id: id ?? contextValue?.helperTextId,
      color: hasError
        ? 'bgtxt-orange-normal'
        : 'txt-black-dark',
      'aria-live': hasError ? 'polite' : undefined,
    }
  }, [
    id,
    hasErrorProps,
    contextValue?.helperTextId,
    contextValue?.hasError,
  ])

  if (isEmpty(children)) { return null }

  return (
    <Styled.HelperText
      {...rest}
      {...mergedProps}
      testId={testId}
      ref={mergedRef}
      forwardedAs={as}
      marginTop={marginTop}
      typo={typo}
    >
      { children }
    </Styled.HelperText>
  )
}

export default forwardRef(FormHelperText)

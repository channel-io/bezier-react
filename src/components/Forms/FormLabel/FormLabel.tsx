/* External dependencies */
import React, { forwardRef, useMemo, useCallback } from 'react'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { Typography } from 'Foundation'
import type { TextProps } from 'Components/Text'
import { IconSize } from 'Components/Icon'
import useFormControlContext from 'Components/Forms/useFormControlContext'
import type FormLabelProps from './FormLabel.types'
import * as Styled from './FormLabel.styled'

export const FORM_LABEL_TEST_ID = 'bezier-react-form-label'
export const FORM_LABEL_HELP_TEST_ID = 'bezier-react-form-label-help'

function FormLabel({
  id,
  testId = FORM_LABEL_TEST_ID,
  htmlFor,
  help,
  as = 'label',
  bold = true,
  typo = Typography.Size13,
  marginBottom,
  style,
  children,
  ...rest
}: FormLabelProps,
forwardedRef: React.Ref<HTMLLabelElement>,
) {
  const contextValue = useFormControlContext()

  const mergedLabelProps = useMemo<TextProps>(() => ({
    id: id ?? contextValue?.labelId,
    htmlFor: htmlFor ?? contextValue?.fieldId,
  }), [
    id,
    htmlFor,
    contextValue?.labelId,
    contextValue?.fieldId,
  ])

  const mergedStyleProps = useMemo<TextProps>(() => {
    const isTopPositioned = contextValue?.labelPosition === 'top'
    return {
      // FIXME: padding 스타일링을 text prop을 통해서 할 수 있도록 개선
      style: style ?? isTopPositioned
        ? { padding: '0 2px' }
        : undefined,
      marginBottom: marginBottom ?? isTopPositioned
        ? 4
        : undefined,
    }
  }, [
    style,
    marginBottom,
    contextValue?.labelPosition,
  ])

  const renderLabelComponent = useCallback((additionalProps?: TextProps) => (
    <Styled.Label
      {...rest}
      {...mergedLabelProps}
      {...additionalProps}
      ref={forwardedRef}
      testId={testId}
      forwardedAs={as}
      bold={bold}
      typo={typo}
    >
      { children }
    </Styled.Label>
  ), [
    rest,
    mergedLabelProps,
    as,
    typo,
    bold,
    testId,
    children,
    forwardedRef,
  ])

  if (isEmpty(children)) { return null }

  return isEmpty(help)
    ? (
      <>
        { renderLabelComponent(mergedStyleProps) }
      </>
    )
    : (
      <Styled.Box {...mergedStyleProps}>
        { renderLabelComponent() }
        <Styled.Tooltip content={help}>
          <Styled.HelpIcon
            testId={FORM_LABEL_HELP_TEST_ID}
            name="help-filled"
            size={IconSize.XS}
            color="txt-black-dark"
          />
        </Styled.Tooltip>
      </Styled.Box>
    )
}

export default forwardRef(FormLabel)

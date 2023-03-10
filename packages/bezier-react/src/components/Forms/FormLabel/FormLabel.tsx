/* External dependencies */
import React, { forwardRef, useMemo } from 'react'

/* Internal dependencies */
import { Typography } from 'Foundation'
import { isEmpty } from 'Utils/typeUtils'
import useFormControlContext from 'Components/Forms/useFormControlContext'
import { Help } from 'Components/Help'
import { HELP_DISPLAY_NAME } from 'Components/Help/Help'
import { HStack, StackItem } from 'Components/Stack'
import type FormLabelProps from './FormLabel.types'
import * as Styled from './FormLabel.styled'

export const FORM_LABEL_TEST_ID = 'bezier-react-form-label'

function FormLabel({
  testId = FORM_LABEL_TEST_ID,
  help,
  as = 'label',
  bold = true,
  color = 'txt-black-darkest',
  children,
  ...rest
}: FormLabelProps,
forwardedRef: React.Ref<HTMLLabelElement>,
) {
  const contextValue = useFormControlContext()

  const { Wrapper, typo, ...ownProps } = contextValue?.getLabelProps(rest) ?? {
    Wrapper: React.Fragment,
    typo: Typography.Size13,
    ...rest,
  }

  const LabelComponent = useMemo(() => (
    <Styled.Label
      {...ownProps}
      ref={forwardedRef}
      testId={testId}
      forwardedAs={as}
      bold={bold}
      typo={typo}
      color={color}
    >
      { children }
    </Styled.Label>
  ), [
    as,
    typo,
    bold,
    color,
    testId,
    children,
    forwardedRef,
    ownProps,
  ])

  const HelpComponent = useMemo(() => {
    if (isEmpty(help)) { return null }

    if (React.isValidElement(help)) {
      // FIXME(@bora): string, JSXElementCostructor 타입에 displayName 속성이 존재하지 않음, 임시로 any 타입으로 설정
      const { displayName } = help?.type as any
      if (displayName === HELP_DISPLAY_NAME) {
        return help
      }
    }

    return (
      <Help>
        { help }
      </Help>
    )
  }, [help])

  if (isEmpty(children)) { return null }

  return (
    <Wrapper>
      { !HelpComponent
        ? LabelComponent
        : (
          <HStack align="center" spacing={6}>
            <StackItem shrink weight={1}>
              { LabelComponent }
            </StackItem>
            <StackItem>
              { HelpComponent }
            </StackItem>
          </HStack>
        ) }
    </Wrapper>
  )
}

export default forwardRef(FormLabel)

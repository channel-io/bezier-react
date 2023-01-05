/* External dependencies */
import React, { forwardRef, useMemo } from 'react'
import { get, isEmpty } from 'lodash-es'

/* Internal dependencies */
import { Typography } from '~/src/foundation'
import useFormControlContext from '~/src/components/Forms/useFormControlContext'
import { Help } from '~/src/components/Help'
import { HELP_DISPLAY_NAME } from '~/src/components/Help/Help'
import { HStack, StackItem } from '~/src/components/Stack'
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

    if (React.isValidElement(help) &&
      get(help, 'type.displayName') === HELP_DISPLAY_NAME) {
      return help
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

import React, { forwardRef } from 'react'

import { isEmpty } from '~/src/utils/type'

import { useFormControlContext } from '~/src/components/Forms/FormControl'
import { Help } from '~/src/components/Help'
import { HELP_DISPLAY_NAME } from '~/src/components/Help/Help'
import {
  LegacyHStack,
  LegacyStackItem,
} from '~/src/components/LegacyStack'
import { Text } from '~/src/components/Text'

import { type FormLabelProps } from './FormLabel.types'

import styles from './FormLabel.module.scss'

export const FORM_LABEL_TEST_ID = 'bezier-react-form-label'

/**
 * `FormLabel` is a component to show label.
 * It should be used with `FormControl` component.
 *
 * @example
 * ```tsx
 * <FormControl>
 *   <FormLabel>
 *     Name
 *   </FormLabel>
 *   <TextField />
 * </FormControl>
 * ```
 */
export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(function FormLabel(props, forwardedRef) {
  const {
    testId = FORM_LABEL_TEST_ID,
    help,
    bold = true,
    color = 'txt-black-darkest',
    children,
    ...rest
  } = props

  const contextValue = useFormControlContext()
  const {
    typo,
    classNameFromControl,
    ...ownProps
  } = contextValue?.getLabelProps(rest) ?? {
    typo: '13',
    classNameFromControl: undefined,
    ...rest,
  }

  const LabelComponent = (
    <Text
      {...ownProps}
      className={styles.LabelText}
      ref={forwardedRef}
      testId={testId}
      as="label"
      align="left"
      bold={bold}
      typo={typo}
      color={color}
    >
      { children }
    </Text>
  )

  const HelpComponent = (() => {
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
  })()

  if (isEmpty(children)) { return null }

  const LabelElement = !HelpComponent
    ? LabelComponent
    : (
      <LegacyHStack align="center" spacing={6}>
        <LegacyStackItem shrink weight={1}>
          { LabelComponent }
        </LegacyStackItem>
        <LegacyStackItem>
          { HelpComponent }
        </LegacyStackItem>
      </LegacyHStack>
    )

  return (
    classNameFromControl ? (
      <div className={classNameFromControl}>
        { LabelElement }
      </div>
    ) : LabelElement
  )
})

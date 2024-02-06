import React, { forwardRef } from 'react'

import classNames from 'classnames'

import { isEmpty } from '~/src/utils/type'

import { useFormControlContext } from '~/src/components/FormControl'
import { Help } from '~/src/components/Help'
import { HELP_DISPLAY_NAME } from '~/src/components/Help/Help'
import {
  LegacyHStack,
  LegacyStackItem,
} from '~/src/components/LegacyStack'
import { Text } from '~/src/components/Text'

import { type FormLabelProps } from './FormLabel.types'

import styles from './FormLabel.module.scss'

export const FORM_LABEL_TEST_ID = 'bezier-form-label'

/**
 * `FormLabel` is a component to show label.
 * `FormControl` component can handle its layout by `position` props.
 * @example
 * ```tsx
 * <FormControl position="top">
 *   <FormLabel>
 *     Name
 *   </FormLabel>
 *   <TextField />
 * </FormControl>
 * ```
 */
export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(function FormLabel(props, forwardedRef) {
  const {
    help,
    bold = true,
    color = 'txt-black-darkest',
    children,
    ...rest
  } = props

  const contextValue = useFormControlContext()
  const {
    className: formControlClassName,
    ...ownProps
  } = contextValue?.getLabelProps(rest) ?? {
    typo: '13',
    className: undefined,
    ...rest,
  }

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

  const LabelComponent = (
    <Text
      className={classNames(
        styles.LabelText,
        !HelpComponent && formControlClassName,
      )}
      ref={forwardedRef}
      as="label"
      align="left"
      bold={bold}
      color={color}
      data-testid={FORM_LABEL_TEST_ID}
      {...ownProps}
    >
      { children }
    </Text>
  )

  if (isEmpty(children)) { return null }

  return (
    !HelpComponent
      ? LabelComponent
      : (
        <LegacyHStack align="center" spacing={6} className={HelpComponent && formControlClassName}>
          <LegacyStackItem shrink weight={1}>
            { LabelComponent }
          </LegacyStackItem>
          <LegacyStackItem>
            { HelpComponent }
          </LegacyStackItem>
        </LegacyHStack>
      ))
})

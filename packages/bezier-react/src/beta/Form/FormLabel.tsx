'use client'

import { forwardRef, isValidElement } from 'react'

import classNames from 'classnames'



import { Help } from '~/src/beta/Help'
import { HELP_DISPLAY_NAME } from '~/src/beta/Help/Help'
import { Text } from '~/src/beta/Text'
import { isEmpty } from '~/src/utils/type'

import { useFormFieldContext } from './Form'
import { type FormLabelProps } from './Form.types'

import styles from './Form.module.scss'

export const FORM_LABEL_TEST_ID = 'bezier-beta-form-label'

/**
 * `FormLabel` labels a field inside `FormField`.
 */
export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  function FormLabel(
    {
      help,
      bold = true,
      color = 'text-neutral',
      typo = '13',
      className,
      children,
      ...rest
    },
    forwardedRef
  ) {
    const contextValue = useFormFieldContext()
    const { className: formFieldClassName, ...ownProps } =
      contextValue?.getLabelProps(rest) ?? {
        className: undefined,
        ...rest,
      }

    const HelpComponent = (() => {
      if (isEmpty(help)) {
        return null
      }

      if (isValidElement(help)) {
        const { displayName } = help.type as { displayName?: string }
        if (displayName === HELP_DISPLAY_NAME) {
          return help
        }
      }

      return <Help>{help}</Help>
    })()

    if (isEmpty(children)) {
      return null
    }

    return (
      <div className={classNames(styles.Label, formFieldClassName)}>
        <Text
          ref={forwardedRef}
          as="label"
          htmlFor={ownProps.htmlFor}
          className={classNames(styles.LabelText, className)}
          typo={typo}
          bold={bold}
          color={color}
          data-testid={FORM_LABEL_TEST_ID}
          {...ownProps}
        >
          {children}
        </Text>
        {HelpComponent}
      </div>
    )
  }
)

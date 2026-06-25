'use client'

import { Children, Fragment, forwardRef, isValidElement } from 'react'

import classNames from 'classnames'



import { Divider } from '~/src/beta/Divider'
import { Help } from '~/src/beta/Help'
import { HELP_DISPLAY_NAME } from '~/src/beta/Help/Help'
import { Text } from '~/src/beta/Text'
import { isEmpty } from '~/src/utils/type'

import type { SettingsFieldProps, SettingsProps } from './Settings.types'

import styles from './Settings.module.scss'

function SettingsFieldHelp({ help }: Pick<SettingsFieldProps, 'help'>) {
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
}

/**
 * `Settings` groups independently saved setting fields.
 */
export const Settings = forwardRef<HTMLDivElement, SettingsProps>(
  function Settings({ children, className, ...rest }, forwardedRef) {
    if (!children) {
      return null
    }

    return (
      <div
        ref={forwardedRef}
        className={classNames(styles.Settings, className)}
        {...rest}
      >
        {Children.map(children, (child, index) => (
          <Fragment key={index}>
            {index > 0 && (
              <Divider
                className={styles.SettingsDivider}
                withoutSideIndent
              />
            )}
            {child}
          </Fragment>
        ))}
      </div>
    )
  }
)

/**
 * `SettingsField` renders one independently saved setting row.
 */
export const SettingsField = forwardRef<HTMLDivElement, SettingsFieldProps>(
  function SettingsField(
    {
      children,
      label,
      description,
      help,
      labelPosition = 'left',
      className,
      ...rest
    },
    forwardedRef
  ) {
    if (isEmpty(label) || !children) {
      return null
    }

    return (
      <div
        ref={forwardedRef}
        className={classNames(
          styles.SettingsField,
          labelPosition === 'left' ? styles.LabelLeft : styles.LabelTop,
          className
        )}
        {...rest}
      >
        <div className={styles.SettingsFieldLabelArea}>
          <div className={styles.SettingsFieldLabelRow}>
            <Text
              className={styles.SettingsFieldLabel}
              typo="14"
              fontWeight="500"
              color="text-neutral"
              truncated
            >
              {label}
            </Text>
            <SettingsFieldHelp help={help} />
          </div>

          {!isEmpty(description) && (
            <Text
              className={styles.SettingsFieldDescription}
              typo="13"
              color="text-neutral-lighter"
              align="left"
            >
              {description}
            </Text>
          )}
        </div>

        <div className={styles.SettingsFieldControl}>{children}</div>
      </div>
    )
  }
)

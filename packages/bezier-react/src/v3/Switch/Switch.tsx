'use client'

import { forwardRef } from 'react'

import * as SwitchPrimitive from '@radix-ui/react-switch'
import classNames from 'classnames'

import useId from '~/src/hooks/useId'
import { getFormFieldSizeClassName } from '~/src/types/props-helpers'
import { BaseButton } from '~/src/v3/BaseButton'
import { useFormFieldProps } from '~/src/v3/FormField'
import { Text } from '~/src/v3/Text'

import { type SwitchProps } from './Switch.types'

import styles from './Switch.module.scss'

export const SWITCH_TEST_ID = 'bezier-v3-switch'

/**
 * `Switch` is a control that allows the user to toggle a setting on or off.
 * It can be used with an inline label or standalone.
 */
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  function Switch(
    {
      children,
      checked,
      defaultChecked = false,
      onCheckedChange,
      className,
      id: idProp,
      ...rest
    },
    forwardedRef
  ) {
    const {
      id: formFieldId,
      hasError,
      size,
      ...formFieldProps
    } = useFormFieldProps(rest)
    const id = useId(idProp ?? formFieldId, 'bezier-switch')

    return (
      <div
        className={classNames(
          styles.Container,
          getFormFieldSizeClassName('m')
        )}
      >
        <SwitchPrimitive.Root
          asChild
          checked={checked}
          defaultChecked={defaultChecked}
          onCheckedChange={onCheckedChange}
          data-invalid={formFieldProps['aria-invalid']}
          data-testid={SWITCH_TEST_ID}
          {...formFieldProps}
        >
          <BaseButton
            ref={forwardedRef}
            id={id}
            className={classNames(styles.Switch, className)}
          >
            <SwitchPrimitive.Thumb asChild>
              <span className={styles.SwitchThumb} />
            </SwitchPrimitive.Thumb>
          </BaseButton>
        </SwitchPrimitive.Root>
        {children && (
          <Text
            as="label"
            // TODO: Apply polymorphic types to `as` prop.
            // @ts-expect-error
            htmlFor={id}
            className={styles.Label}
            typo="14"
            fontWeight="500"
            color="text-neutral"
          >
            {children}
          </Text>
        )}
      </div>
    )
  }
)

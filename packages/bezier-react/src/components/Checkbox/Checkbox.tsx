import React, { forwardRef } from 'react'

import {
  CheckBoldIcon,
  HyphenBoldIcon,
} from '@channel.io/bezier-icons'
import classNames from 'classnames'

import useId from '~/src/hooks/useId'
import { getFormFieldSizeClassName } from '~/src/types/props-helpers'

import {
  CheckboxPrimitive,
  CheckboxPrimitiveIndicator,
} from '~/src/alpha-components/CheckboxPrimitive'
import { BaseButton } from '~/src/components/BaseButton'
import { useFormFieldProps } from '~/src/components/FormControl'
import { Icon } from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import {
  type CheckboxProps,
  type CheckedState,
} from './Checkbox.types'

import styles from './Checkbox.module.scss'

interface CheckIconProps {
  style: React.CSSProperties
  'data-state': 'checked' | 'unchecked' | 'indeterminate'
  'data-disabled': boolean | undefined
}

/* NOTE: Props are injected at runtime by `CheckboxPrimitive.Indicator`. */
const CheckIcon = forwardRef<SVGSVGElement, CheckIconProps>(function CheckIcon(
  props,
  forwardedRef,
) {
  // eslint-disable-next-line react/destructuring-assignment
  const state = props['data-state']
  const isUnchecked = state === 'unchecked'
  const isIndeterminate = state === 'indeterminate'

  return (
    <Icon
      className={styles.CheckIcon}
      ref={forwardedRef}
      source={!isIndeterminate ? CheckBoldIcon : HyphenBoldIcon}
      size="xs"
      color={isUnchecked ? 'bg-black-dark' : 'bgtxt-absolute-white-dark'}
      {...props}
    />
  )
})

function CheckboxImpl<Checked extends CheckedState>({
  children,
  className,
  checked,
  id: idProp,
  ...rest
}: CheckboxProps<Checked>, forwardedRef: React.Ref<HTMLButtonElement>) {
  const {
    id: formFieldId,
    hasError,
    ...formFieldProps
  } = useFormFieldProps(rest)

  const id = useId(idProp ?? formFieldId, 'bezier-checkbox')

  return (
    <div className={classNames(
      styles.Container,
      getFormFieldSizeClassName('m'),
    )}
    >
      <CheckboxPrimitive
        asChild
        className={classNames(
          styles.Checkbox,
          className,
        )}
        ref={forwardedRef}
        id={id}
        checked={checked}
        data-invalid={formFieldProps['aria-invalid']}
        {...formFieldProps}
      >
        <BaseButton>
          <CheckboxPrimitiveIndicator
            asChild
            /* NOTE: To allow the icon to be rendered even if unchecked. */
            forceMount
          >
            { /* @ts-expect-error */ }
            <CheckIcon />
          </CheckboxPrimitiveIndicator>
        </BaseButton>
      </CheckboxPrimitive>
      { children && (
        <Text
          as="label"
          // TODO: Apply polymorphic types to `as` prop.
          // @ts-expect-error
          htmlFor={id}
          className={styles.Label}
          typo="14"
          color="txt-black-darkest"
        >
          { children }
        </Text>
      ) }
    </div>
  )
}

/**
 * `Checkbox` is a control that allows the user to toggle between checked and not checked.
 * It can be used with labels or standalone.
 * @example
 *
 * ```tsx
 * const [checked, setChecked] = useState(false)
 * // Controlled / With label
 * <Checkbox
 *   checked={checked}
 *   onCheckedChange={setChecked}
 * >
 *   Label
 * </Checkbox>
 * // Controlled / Standalone
 * <Checkbox
 *   checked={checked}
 *   onCheckedChange={setChecked}
 * />
 * // Uncontrolled
 * <Checkbox
 *   defaultChecked={true}
 * >
 *   Label
 * </Checkbox>
 * ```
 */
export const Checkbox = forwardRef(CheckboxImpl) as <Checked extends CheckedState>(
  props: CheckboxProps<Checked> & { ref?: React.ForwardedRef<HTMLButtonElement> }
) => ReturnType<typeof CheckboxImpl<Checked>>

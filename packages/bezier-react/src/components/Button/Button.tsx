import React, {
  forwardRef,
  useCallback,
} from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { warn } from '~/src/utils/assert'

import { BaseButton } from '~/src/components/BaseButton'
import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import {
  LegacyIcon,
  isIconName,
} from '~/src/components/LegacyIcon'
import {
  Spinner,
  SpinnerSize,
} from '~/src/components/Spinner'
import { Text } from '~/src/components/Text'

import type {
  ButtonProps,
  SideContent,
} from './Button.types'
import {
  ButtonColorVariant,
  ButtonSize,
  ButtonStyleVariant,
} from './Button.types'

import styles from './Button.module.scss'

export const BUTTON_TEST_ID = 'bezier-button'

function getTypography(size: ButtonSize) {
  return ({
    [ButtonSize.XS]: '13',
    [ButtonSize.S]: '13',
    [ButtonSize.M]: '14',
    [ButtonSize.L]: '15',
    [ButtonSize.XL]: '18',
  } as const)[size]
}

function getIconSize(size: ButtonSize) {
  return ({
    [ButtonSize.XS]: IconSize.XS,
    [ButtonSize.S]: IconSize.XS,
    [ButtonSize.M]: IconSize.S,
    [ButtonSize.L]: IconSize.S,
    [ButtonSize.XL]: IconSize.Normal,
  } as const)[size]
}

function getSpinnerSize(size: ButtonSize) {
  return ({
    [ButtonSize.XS]: SpinnerSize.XS,
    [ButtonSize.S]: SpinnerSize.XS,
    [ButtonSize.M]: SpinnerSize.S,
    [ButtonSize.L]: SpinnerSize.S,
    [ButtonSize.XL]: SpinnerSize.S,
  } as const)[size]
}

function ButtonSideContent({
  size,
  children,
}: {
  size: ButtonSize
  children: SideContent
}) {
  if (isIconName(children)) {
    warn('Deprecation: IconName as a value for the leftContent property of a Button has been deprecated. Use the Icon of bezier-icons instead.')
    return (
      <LegacyIcon
        className={styles.ButtonIcon}
        name={children}
        size={getIconSize(size)}
      />
    )
  }

  if (isBezierIcon(children)) {
    return (
      <Icon
        className={styles.ButtonIcon}
        source={children}
        size={getIconSize(size)}
      />
    )
  }

  return <>{ children }</>
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({
  as = BaseButton,
  className,
  type = 'button',
  text,
  disabled = false,
  loading = false,
  active = false,
  size = ButtonSize.M,
  styleVariant = ButtonStyleVariant.Primary,
  colorVariant = ButtonColorVariant.Blue,
  leftContent,
  rightContent,
  onClick,
  ...rest
}, forwardedRef) {
  const Comp = as as typeof BaseButton

  const handleClick = useCallback<React.MouseEventHandler<HTMLButtonElement>>((event) => {
    if (!disabled) {
      onClick?.(event)
    }
  }, [
    onClick,
    disabled,
  ])

  return (
    <Comp
      // eslint-disable-next-line react/button-has-type
      type={type}
      ref={forwardedRef}
      className={classNames(
        styles.Button,
        styles[`size-${size}`],
        styles[`style-${styleVariant}`],
        styles[`color-${colorVariant}`],
        active && styles.active,
        className,
      )}
      disabled={disabled}
      onClick={handleClick}
      data-testid={BUTTON_TEST_ID}
      data-bezier-component="Button"
      {...rest}
    >
      <div
        className={classNames(
          styles.ButtonContent,
          loading && styles.loading,
        )}
      >
        <ButtonSideContent size={size}>
          { leftContent }
        </ButtonSideContent>

        { text && (
          <Text
            className={styles.ButtonText}
            typo={getTypography(size)}
            bold
          >
            { text }
          </Text>
        ) }

        <ButtonSideContent size={size}>
          { rightContent }
        </ButtonSideContent>
      </div>

      { loading && (
        <div className={styles.ButtonLoader}>
          <Spinner size={getSpinnerSize(size)} />
        </div>
      ) }
    </Comp>
  )
})

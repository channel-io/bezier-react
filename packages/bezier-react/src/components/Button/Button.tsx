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
import { Spinner } from '~/src/components/Spinner'
import { Text } from '~/src/components/Text'

import type {
  ButtonProps,
  ButtonSize,
  SideContent,
} from './Button.types'

import styles from './Button.module.scss'

export const BUTTON_TEST_ID = 'bezier-button'

function getTypography(size: ButtonSize) {
  return ({
    xs: '13',
    s: '13',
    m: '14',
    l: '15',
    xl: '18',
  } as const)[size]
}

function getIconSize(size: ButtonSize) {
  return ({
    xs: IconSize.XS,
    s: IconSize.XS,
    m: IconSize.S,
    l: IconSize.S,
    xl: IconSize.Normal,
  } as const)[size]
}

function getSpinnerSize(size: ButtonSize) {
  return ({
    xs: 'xs',
    s: 'xs',
    m: 's',
    l: 's',
    xl: 's',
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
  size = 'm',
  styleVariant = 'primary',
  colorVariant = 'blue',
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

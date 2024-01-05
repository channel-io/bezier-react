import React, {
  forwardRef,
  useCallback,
} from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { warn } from '~/src/utils/assert'
import {
  getMarginStyles,
  splitByMarginProps,
} from '~/src/utils/props'

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
  MouseEventHandler,
  SideContent,
} from './Button.types'
import {
  ButtonColorVariant,
  ButtonSize,
  ButtonStyleVariant,
} from './Button.types'

import styles from './Button.module.scss'

export const BUTTON_TEST_ID = 'bezier-react-button'
export const BUTTON_INNER_CONTENT_TEST_ID = 'bezier-react-button-inner-content'
export const BUTTON_TEXT_TEST_ID = 'bezier-react-button-text'

function getTypography(size: ButtonSize) {
  return {
    [ButtonSize.XS]: '13' as const,
    [ButtonSize.S]: '13' as const,
    [ButtonSize.M]: '14' as const,
    [ButtonSize.L]: '15' as const,
    [ButtonSize.XL]: '18' as const,
  }[size]
}

function getIconSize(size: ButtonSize) {
  return {
    [ButtonSize.XS]: IconSize.XS as const,
    [ButtonSize.S]: IconSize.XS as const,
    [ButtonSize.M]: IconSize.S as const,
    [ButtonSize.L]: IconSize.S as const,
    [ButtonSize.XL]: IconSize.Normal as const,
  }[size]
}

function getSpinnerSize(size: ButtonSize) {
  return {
    [ButtonSize.XS]: SpinnerSize.XS as const,
    [ButtonSize.S]: SpinnerSize.XS as const,
    [ButtonSize.M]: SpinnerSize.S as const,
    [ButtonSize.L]: SpinnerSize.S as const,
    [ButtonSize.XL]: SpinnerSize.S as const,
  }[size]
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, forwardedRef) {
  const [marginProps, marginRest] = splitByMarginProps(props)
  const marginStyles = getMarginStyles(marginProps)

  const {
    style,
    className,
    testId = BUTTON_TEST_ID,
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
  } = marginRest

  const handleClick = useCallback<MouseEventHandler>((event) => {
    if (!disabled) {
      onClick?.(event)
    }
  }, [
    onClick,
    disabled,
  ])

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      ref={forwardedRef}
      style={{
        ...marginStyles,
        ...style,
      }}
      className={classNames(
        styles.Button,
        styles[`size-${size}`],
        styles[`style-${styleVariant}`],
        styles[`color-${colorVariant}`],
        active && styles.active,
        marginStyles.className,
        className,
      )}
      disabled={disabled}
      data-testid={testId}
      data-component="BezierButton"
      onClick={handleClick}
      {...rest}
    >
      <div
        className={classNames(
          styles.ButtonContent,
          loading && styles.loading,
        )}
        data-testid={BUTTON_INNER_CONTENT_TEST_ID}
      >
        <ButtonSideContent size={size}>
          { leftContent }
        </ButtonSideContent>

        { text && (
          <Text
            className={styles.ButtonText}
            testId={BUTTON_TEXT_TEST_ID}
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
    </button>
  )
})

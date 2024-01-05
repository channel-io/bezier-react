import React, {
  forwardRef,
  useCallback,
} from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { warn } from '~/src/utils/assert'
import { noop } from '~/src/utils/function'

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

import type ButtonProps from './Button.types'
import {
  type MouseEventHandler,
  type SideContent,
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({
  as,
  className,
  style,
  interpolation,
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
  onClick = noop,
  ...rest
}, forwardedRef) {
  const handleClick = useCallback<MouseEventHandler>((event) => {
    if (!disabled) { onClick(event) }
    return null
  }, [
    onClick,
    disabled,
  ])

  const renderSideContent = useCallback((content?: SideContent) => {
    if (isIconName(content)) {
      warn('Deprecation: IconName as a value for the leftContent property of a Button has been deprecated. Use the Icon of bezier-icons instead.')
      return (
        <LegacyIcon
          name={content}
          size={getIconSize(size)}
          className={styles.ButtonIcon}
        />
      )
    }

    if (isBezierIcon(content)) {
      return (
        <Icon
          source={content}
          size={getIconSize(size)}
          className={styles.ButtonIcon}
        />
      )
    }

    return content
  }, [size])

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      ref={forwardedRef}
      style={style}
      className={classNames(
        styles.Button,
        styles[`size-${size}`],
        styles[`style-${styleVariant}`],
        styles[`color-${colorVariant}`],
        active && styles.active,
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
          loading && styles.hidden,
        )}
        data-testid={BUTTON_INNER_CONTENT_TEST_ID}
      >
        { renderSideContent(leftContent) }

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

        { renderSideContent(rightContent) }
      </div>

      { loading && (
        <div className={styles.ButtonLoader}>
          <Spinner size={getSpinnerSize(size)} />
        </div>
      ) }
    </button>
  )
})

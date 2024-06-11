import React, { forwardRef, useEffect, useState } from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import classNames from 'classnames'

import { AlphaSpinner } from '~/src/components/AlphaSpinner'
import { BaseButton } from '~/src/components/BaseButton'
import { Icon, type IconSize } from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import { type ToggleButtonProps } from './ToggleButton.types'

import styles from './ToggleButton.module.scss'

function SideContent({
  size,
  content,
}: {
  size: IconSize
  content?: ToggleButtonProps['prefixContent']
}) {
  return isBezierIcon(content) ? (
    <Icon
      source={content}
      size={size}
      className={styles.ButtonIcon}
    />
  ) : (
    content
  )
}

export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
  function ToggleButton(
    {
      as = BaseButton,
      text,
      prefixContent,
      suffixContent,
      variant = 'primary',
      shape,
      size = 'm',
      defaultSelected,
      selected,
      className,
      loading,
      onSelectedChange,
      ...rest
    },
    forwardedRef
  ) {
    const [isSelected, setIsSelected] = useState(defaultSelected ?? false)
    const isControlled = selected !== undefined

    useEffect(
      function synchronizeState() {
        if (isControlled) {
          setIsSelected(selected)
        }
      },
      [selected, isControlled]
    )

    const handleSelectedChange = (selected: boolean) => {
      if (!isControlled) {
        setIsSelected(selected)
      }

      onSelectedChange?.(selected)
    }

    const Comp = as as typeof BaseButton
    const ICON_SIZE = 's'

    return (
      <TogglePrimitive.Root
        pressed={isSelected}
        defaultPressed={defaultSelected}
        asChild
        onPressedChange={handleSelectedChange}
        {...rest}
      >
        <Comp
          ref={forwardedRef}
          className={classNames(
            styles.Button,
            styles[`size-${size}`],
            styles[`variant-${variant}`],
            shape && styles[`shape-${shape}`],
            className
          )}
        >
          <div
            className={classNames(
              styles.ButtonContent,
              loading && styles.loading
            )}
          >
            <SideContent
              size={ICON_SIZE}
              content={prefixContent}
            />

            {/* TODO: use AlphaText later, add typo */}
            <Text
              className={styles.ButtonText}
              bold={isSelected}
              typo="14"
              data-text={text}
            >
              {text}
            </Text>

            <SideContent
              size={ICON_SIZE}
              content={suffixContent}
            />
          </div>

          {loading && (
            <div
              className={classNames(
                styles.ButtonLoader,
                styles[`size-${ICON_SIZE}`]
              )}
            >
              <AlphaSpinner
                className={styles.Spinner}
                variant="secondary"
              />
            </div>
          )}
        </Comp>
      </TogglePrimitive.Root>
    )
  }
)

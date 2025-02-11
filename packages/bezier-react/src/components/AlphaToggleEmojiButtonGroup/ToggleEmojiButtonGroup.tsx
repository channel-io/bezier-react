import type { CSSProperties } from 'react'
import { Children, forwardRef, useState } from 'react'

import * as ToggleGroup from '@radix-ui/react-toggle-group'
import classNames from 'classnames'

import useMergeRefs from '~/src/hooks/useMergeRefs'
import { cssDimension } from '~/src/utils/style'

import {
  EMOJI_BUTTON_GROUP_GAP,
  EMOJI_BUTTON_SIZE,
  useToggleEmojiButtonSize,
} from '~/src/components/AlphaToggleEmojiButtonGroup/useToggleEmojiButtonSize'
import { BaseButton } from '~/src/components/BaseButton'
import { Emoji } from '~/src/components/Emoji'

import {
  type ToggleEmojiButtonGroupProps,
  type ToggleEmojiButtonSourceProps,
} from './ToggleEmojiButtonGroup.types'

import styles from './ToggleEmojiButtonGroup.module.scss'

const EMOJI_SIZE = 30

/**
 * Toggle Button that contains `Emoji` component with size fixed to 30.
 * It should be used with `ToggleEmojiButtonGroup` component.
 * @example
 * ```tsx
 * <ToggleEmojiButtonSource
 *   content={
 *     <Emoji
 *       imageUrl="https://cf.exp.channel.io/asset/emoji/images/80/a.png"
 *       name="A"
 *    />
 *   }
 * />
 * ```
 */
export const ToggleEmojiButtonSource = forwardRef<
  HTMLButtonElement,
  ToggleEmojiButtonSourceProps
>(function ToggleEmojiButtonSource(
  { name, variant, className, selected, size = 'm', value, onResize, ...rest },
  forwardedRef
) {
  return (
    <ToggleGroup.Item
      value={value}
      asChild
    >
      <BaseButton
        ref={forwardedRef}
        className={classNames(
          styles.ToggleEmojiButtonSource,
          styles[`size-${size}`],
          styles[`variant-${variant}`],
          className
        )}
        {...rest}
      >
        <div className={classNames(styles.ButtonContent)}>
          <Emoji
            name={name}
            size={`${EMOJI_SIZE}`}
          />
        </div>
      </BaseButton>
    </ToggleGroup.Item>
  )
})

/**
 * Component for grouping `ToggleEmojiButtonSource`.
 * @example
 * ```tsx
 * <ToggleEmojiButtonGroup
 *   fillDirection="horizontal"
 * >
 *   <ToggleEmojiButtonSource content={<Emoji />} />
 *   <ToggleEmojiButtonSource content={<Emoji />} />
 * </ToggleEmojiButtonGroup>
 * ```
 */
export const ToggleEmojiButtonGroup = forwardRef<
  HTMLDivElement,
  ToggleEmojiButtonGroupProps
>(function ToggleEmojiButtonGroup(
  {
    fillDirection,
    value,
    className,
    defaultValue,
    children,
    style,
    dir = 'ltr',
    onValueChange,
    ...rest
  },
  forwardedRef
) {
  const [container, setContainer] = useState<null | HTMLDivElement>(null)
  const mergedRefs = useMergeRefs(setContainer, forwardedRef)
  const shouldResizeButton = fillDirection === 'all'
  const resizedButtonSize = useToggleEmojiButtonSize({
    container,
    enabled: shouldResizeButton,
    buttonCount: Children.count(children),
  })

  return (
    <ToggleGroup.Root
      type="single"
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      value={value}
      ref={mergedRefs}
      style={
        {
          '--b-toggle-emoji-button-emoji-size': cssDimension(EMOJI_SIZE),
          '--b-toggle-emoji-button-size': cssDimension(
            shouldResizeButton ? resizedButtonSize : EMOJI_BUTTON_SIZE
          ),
          '--b-toggle-emoji-button-group-gap': cssDimension(
            EMOJI_BUTTON_GROUP_GAP
          ),
          ...style,
        } as CSSProperties
      }
      className={classNames(
        styles.ToggleEmojiButtonGroup,
        fillDirection && styles[`fillDirection-${fillDirection}`],
        className
      )}
      {...rest}
    >
      {children}
    </ToggleGroup.Root>
  )
})

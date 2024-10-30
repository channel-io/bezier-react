import React, {
  type CSSProperties,
  type ReactEventHandler,
  forwardRef,
  useMemo,
  useRef,
  useState,
} from 'react'

import * as ToggleGroup from '@radix-ui/react-toggle-group'
import classNames from 'classnames'

import useMergeRefs from '~/src/hooks/useMergeRefs'
import { cssDimension } from '~/src/utils/style'

import { AlphaLoader } from '~/src/components/AlphaLoader'
import {
  ToggleEmojiButtonProvider,
  useToggleEmojiButtonContext,
} from '~/src/components/AlphaToggleEmojiButtonGroup/ToggleEmojiButtonGroupContext'
import {
  EMOJI_BUTTON_GROUP_GAP,
  EMOJI_BUTTON_SIZE,
  useResizeButton,
} from '~/src/components/AlphaToggleEmojiButtonGroup/useResizeButton'
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
  {
    name,
    variant,
    className,
    selected,
    size = 'm',
    loading,
    style,
    value,
    onResize,
    ...rest
  },
  forwardedRef
) {
  const ref = useRef<HTMLButtonElement>(null)
  const mergedRefs = useMergeRefs(ref, forwardedRef)
  const { fillDirection } = useToggleEmojiButtonContext()

  const { adjustButtonSize } = useResizeButton({ button: ref.current })

  const handleResize: ReactEventHandler<HTMLButtonElement> = (e) => {
    onResize?.(e)

    if (fillDirection === 'all') {
      adjustButtonSize()
    }
  }

  return (
    <ToggleGroup.Item
      value={value}
      asChild
    >
      <BaseButton
        ref={mergedRefs}
        onResize={handleResize}
        style={
          {
            '--b-toggle-emoji-button-size': cssDimension(EMOJI_BUTTON_SIZE),
            '--b-toggle-emoji-button-emoji-size': cssDimension(EMOJI_SIZE),
            ...style,
          } as CSSProperties
        }
        className={classNames(
          styles.ToggleEmojiButtonSource,
          styles[`size-${size}`],
          styles[`variant-${variant}`],
          className
        )}
        {...rest}
      >
        <div
          className={classNames(
            styles.ButtonContent,
            loading && styles.loading
          )}
        >
          <Emoji
            name={name}
            size={`${EMOJI_SIZE}`}
          />
        </div>

        {loading && (
          <div className={classNames(styles.ButtonLoader)}>
            <AlphaLoader
              className={styles.Loader}
              size="s"
              variant="secondary"
            />
          </div>
        )}
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
  { fillDirection, value, className, children, style, onValueChange, ...rest },
  forwardedRef
) {
  const [ref, setRef] = useState<null | HTMLDivElement>(null)
  const mergedRefs = useMergeRefs(setRef, forwardedRef)

  return (
    <ToggleGroup.Root
      type="single"
      onValueChange={onValueChange}
      value={value}
    >
      <ToggleEmojiButtonProvider
        value={useMemo(
          () => ({
            container: ref,
            fillDirection,
            childrenSize: React.Children.count(children),
          }),
          [children, fillDirection, ref]
        )}
      >
        <div
          ref={mergedRefs}
          style={
            {
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
        </div>
      </ToggleEmojiButtonProvider>
    </ToggleGroup.Root>
  )
})

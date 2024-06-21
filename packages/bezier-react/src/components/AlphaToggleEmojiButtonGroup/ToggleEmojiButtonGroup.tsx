import React, {
  type CSSProperties,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import * as Toggle from '@radix-ui/react-toggle'
import classNames from 'classnames'

import useMergeRefs from '~/src/hooks/useMergeRefs'
import { cssDimension } from '~/src/utils/style'

import { AlphaSpinner } from '~/src/components/AlphaSpinner'
import {
  ToggleEmojiButtonProvider,
  useToggleEmojiButtonContext,
} from '~/src/components/AlphaToggleEmojiButtonGroup/ToggleEmojiButtonGroupContext'
import { BaseButton } from '~/src/components/BaseButton'

import {
  type ToggleEmojiButtonGroupProps,
  type ToggleEmojiButtonSourceProps,
} from './ToggleEmojiButtonGroup.types'

import styles from './ToggleEmojiButtonGroup.module.scss'

const GAP = 6
const SIZE = 54

/**
 * Toggle Button that contains `Emoji` component inside.
 * It should be used with `ToggleEmojiButtonGroup` component.
 * @example
 * ```tsx
 * <ToggleEmojiButtonSource
 *   content={
 *     <Emoji
 *       size="30"
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
    content,
    variant,
    className,
    selected,
    size = 'm',
    loading,
    style,
    ...rest
  },
  forwardedRef
) {
  const { container, childrenSize } = useToggleEmojiButtonContext()

  const ref = useRef<HTMLButtonElement | null>(null)
  const mergedRefs = useMergeRefs(ref, forwardedRef)

  const adjustButtonSizes = useCallback(() => {
    if (!container || !ref.current) {
      return
    }

    const containerWidth = container.clientWidth
    const containerHeight = container.clientHeight
    const size = Math.max(
      Math.min(
        (containerWidth - GAP * (childrenSize - 1)) / childrenSize,
        containerHeight - GAP
      ),
      SIZE
    )

    ref.current.style.width = `${size}px`
    ref.current.style.height = `${size}px`
  }, [childrenSize, container])

  useEffect(
    function setResizeObserver() {
      const resizeObserver = new ResizeObserver(() => {
        adjustButtonSizes()
      })

      if (container) {
        resizeObserver.observe(container)
        container.addEventListener('resize', adjustButtonSizes)
      }

      return () => {
        if (container) {
          resizeObserver.unobserve(container)
          container.removeEventListener('resize', adjustButtonSizes)
        }
      }
    },
    [adjustButtonSizes, container]
  )

  return (
    <Toggle.Root asChild>
      <BaseButton
        ref={mergedRefs}
        onResize={adjustButtonSizes}
        style={
          {
            '--b-toggle-emoji-button-size': cssDimension(SIZE),
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
          {content}
        </div>

        {loading && (
          <div className={classNames(styles.ButtonLoader)}>
            <AlphaSpinner
              className={styles.Spinner}
              variant="secondary"
            />
          </div>
        )}
      </BaseButton>
    </Toggle.Root>
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
  { fillDirection, className, children, style, ...rest },
  forwardedRef
) {
  const [ref, setRef] = useState<null | HTMLDivElement>(null)
  const mergedRefs = useMergeRefs(setRef, forwardedRef)

  return (
    <ToggleEmojiButtonProvider
      value={useMemo(
        () => ({
          container: ref,
          childrenSize: React.Children.count(children),
        }),
        [children, ref]
      )}
    >
      <div
        ref={mergedRefs}
        style={
          {
            '--b-toggle-emoji-button-group-gap': cssDimension(GAP),
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
  )
})

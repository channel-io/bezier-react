'use client'

import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import classNames from 'classnames'

import { isEmpty } from '~/src/utils/type'
import { HStack } from '~/src/v3/HStack'
import { Icon } from '~/src/v3/Icon'
import { Text } from '~/src/v3/Text'

import {
  AlphaTooltipPrimitive,
  AlphaTooltipPrimitiveContent,
  type AlphaTooltipPrimitiveContentProps,
  AlphaTooltipPrimitivePortal,
  AlphaTooltipPrimitiveProvider,
  AlphaTooltipPrimitiveTrigger,
} from '~/src/components/AlphaTooltipPrimitive'
import { InvertedThemeProvider } from '~/src/components/ThemeProvider'
import { useRootElement } from '~/src/components/WindowProvider'

import { type TooltipPosition, type TooltipProps } from './Tooltip.types'

import styles from './Tooltip.module.scss'

function getSideAndAlign(
  placement: TooltipPosition
): Pick<AlphaTooltipPrimitiveContentProps, 'side' | 'align'> {
  switch (placement) {
    case 'top-center':
      return {
        side: 'top',
        align: 'center',
      }
    case 'top-left':
      return {
        side: 'top',
        align: 'start',
      }
    case 'top-right':
      return {
        side: 'top',
        align: 'end',
      }
    case 'right-center':
      return {
        side: 'right',
        align: 'center',
      }
    case 'right-top':
      return {
        side: 'right',
        align: 'start',
      }
    case 'right-bottom':
      return {
        side: 'right',
        align: 'end',
      }
    case 'bottom-center':
      return {
        side: 'bottom',
        align: 'center',
      }
    case 'bottom-left':
      return {
        side: 'bottom',
        align: 'start',
      }
    case 'bottom-right':
      return {
        side: 'bottom',
        align: 'end',
      }
    case 'left-center':
      return {
        side: 'left',
        align: 'center',
      }
    case 'left-top':
      return {
        side: 'left',
        align: 'start',
      }
    case 'left-bottom':
      return {
        side: 'left',
        align: 'end',
      }
    default:
      return {
        side: undefined,
        align: undefined,
      }
  }
}

/**
 * `Tooltip` shows additional information when the trigger is hovered or focused.
 *
 * Trigger components must spread props and forward refs because Tooltip uses
 * Radix's `asChild` trigger composition.
 */
export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(
    {
      children,
      defaultShow,
      onShow: onShowProp,
      onHide: onHideProp,
      disabled,
      title,
      content,
      description,
      icon,
      placement = 'bottom-center',
      offset = 4,
      container: containerProp,
      keepInContainer = true,
      allowHover = false,
      delayShow = 0,
      delayHide = 0,
      className,
      ...rest
    },
    forwardedRef
  ) {
    const [show, setShow] = useState<boolean>(defaultShow ?? false)
    const timeoutRef = useRef<NodeJS.Timeout>(undefined)

    const rootElement = useRootElement()
    const container = containerProp ?? rootElement

    const shouldBeHidden = useMemo(
      () => disabled || isEmpty(content),
      [disabled, content]
    )

    const onShow = useCallback(() => {
      setShow(true)
      onShowProp?.()
    }, [onShowProp])

    const onHide = useCallback(() => {
      setShow(false)
      onHideProp?.()
    }, [onHideProp])

    useEffect(
      function forceHide() {
        if (shouldBeHidden) {
          onHide()
        }
      },
      [shouldBeHidden, onHide]
    )

    useEffect(function cleanUpTimeout() {
      return function cleanUp() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }, [])

    const onOpenChange = useCallback(
      (open: boolean) => {
        if (shouldBeHidden) {
          return
        }

        if (open) {
          onShow()
          return
        }

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
          timeoutRef.current = undefined
        }

        if (delayHide > 0) {
          timeoutRef.current = setTimeout(() => {
            onHide()
          }, delayHide)
          return
        }

        onHide()
      },
      [shouldBeHidden, delayHide, onShow, onHide]
    )

    return (
      <AlphaTooltipPrimitiveProvider skipDelayDuration={0}>
        <AlphaTooltipPrimitive
          open={show && !shouldBeHidden}
          defaultOpen={defaultShow}
          delayDuration={delayShow}
          disableHoverableContent={!allowHover}
          onOpenChange={onOpenChange}
        >
          <AlphaTooltipPrimitiveTrigger asChild>
            {children}
          </AlphaTooltipPrimitiveTrigger>

          <AlphaTooltipPrimitivePortal container={container}>
            <InvertedThemeProvider>
              <AlphaTooltipPrimitiveContent
                {...rest}
                {...getSideAndAlign(placement)}
                asChild
                ref={forwardedRef}
                sideOffset={offset}
                avoidCollisions={keepInContainer}
                collisionPadding={8}
                hideWhenDetached
              >
                <HStack
                  spacing={4}
                  className={classNames(styles.Tooltip, className)}
                >
                  <div className={styles.TooltipContainer}>
                    {title && (
                      <Text
                        typo="13"
                        fontWeight="600"
                        marginBottom={2}
                        color="text-neutral"
                      >
                        {title}
                      </Text>
                    )}

                    <Text
                      typo="13"
                      color="text-neutral"
                      truncated={20}
                      className={styles.TooltipContent}
                    >
                      {content}
                    </Text>

                    {description && (
                      <Text
                        typo="12"
                        color="text-neutral"
                      >
                        {description}
                      </Text>
                    )}
                  </div>

                  {icon && (
                    <Icon
                      source={icon}
                      size="16"
                      color="icon-neutral"
                      className={styles.Icon}
                    />
                  )}
                </HStack>
              </AlphaTooltipPrimitiveContent>
            </InvertedThemeProvider>
          </AlphaTooltipPrimitivePortal>
        </AlphaTooltipPrimitive>
      </AlphaTooltipPrimitiveProvider>
    )
  }
)

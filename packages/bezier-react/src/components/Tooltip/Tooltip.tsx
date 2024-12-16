'use client'

import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { isEmpty } from '~/src/utils/type'

import {
  AlphaTooltipPrimitive,
  AlphaTooltipPrimitiveContent,
  type AlphaTooltipPrimitiveContentProps,
  AlphaTooltipPrimitivePortal,
  AlphaTooltipPrimitiveProvider,
  AlphaTooltipPrimitiveTrigger,
} from '~/src/components/AlphaTooltipPrimitive'
import { Icon } from '~/src/components/Icon'
import { HStack } from '~/src/components/Stack'
import { Text } from '~/src/components/Text'
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
      // NOTE: should not reach here
      return {
        side: undefined,
        align: undefined,
      }
  }
}

/**
 * `Tooltip` is a component that shows additional information when the mouse hovers or the keyboard is focused.
 *
 * Components that pass to children **must spread props and forward ref.**
 * @example
 * ```tsx
 * // Your component must spread props and forward ref.
 * const Button = React.forwardRef((props, forwardedRef) => (<button {...props} ref={forwardedRef} />))
 * // Then, you can use `Tooltip` with your component.
 * <Tooltip content="Ta-da!">
 *   <Button>Hover me</Button>
 * </Tooltip>
 * ```
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

    useEffect(
      function cleanUpTimeout() {
        return function cleanUp() {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
          }
        }
      },
      [shouldBeHidden]
    )

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
          open={show}
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
                  className={styles.Tooltip}
                >
                  <div className={styles.TooltipContainer}>
                    {title && (
                      <Text
                        typo="13"
                        bold
                        marginBottom={2}
                        color="txt-black-darkest"
                      >
                        {title}
                      </Text>
                    )}

                    <Text
                      color="txt-black-darkest"
                      className={styles.TooltipContent}
                      truncated={20}
                      typo="13"
                    >
                      {content}
                    </Text>

                    {description && (
                      <Text
                        typo="12"
                        color="txt-black-dark"
                      >
                        {description}
                      </Text>
                    )}
                  </div>

                  {icon && (
                    <Icon
                      size="xs"
                      color="txt-black-darkest"
                      source={icon}
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

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { InvertedThemeProvider } from '~/src/providers/ThemeProvider'
import { useWindow } from '~/src/providers/WindowProvider'
import { createContext } from '~/src/utils/react'
import {
  isBoolean,
  isEmpty,
} from '~/src/utils/type'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import { HStack } from '~/src/components/Stack'
import { Text } from '~/src/components/Text'

import {
  TooltipPosition,
  type TooltipProps,
  type TooltipProviderProps,
} from './Tooltip.types'

import styles from './Tooltip.module.scss'

function getSideAndAlign(
  placement: TooltipPosition,
): Pick<TooltipPrimitive.TooltipContentProps, 'side' | 'align'> {
  switch (placement) {
    case TooltipPosition.TopCenter:
      return {
        side: 'top',
        align: 'center',
      }
    case TooltipPosition.TopLeft:
      return {
        side: 'top',
        align: 'start',
      }
    case TooltipPosition.TopRight:
      return {
        side: 'top',
        align: 'end',
      }
    case TooltipPosition.RightCenter:
      return {
        side: 'right',
        align: 'center',
      }
    case TooltipPosition.RightTop:
      return {
        side: 'right',
        align: 'start',
      }
    case TooltipPosition.RightBottom:
      return {
        side: 'right',
        align: 'end',
      }
    case TooltipPosition.BottomCenter:
      return {
        side: 'bottom',
        align: 'center',
      }
    case TooltipPosition.BottomLeft:
      return {
        side: 'bottom',
        align: 'start',
      }
    case TooltipPosition.BottomRight:
      return {
        side: 'bottom',
        align: 'end',
      }
    case TooltipPosition.LeftCenter:
      return {
        side: 'left',
        align: 'center',
      }
    case TooltipPosition.LeftTop:
      return {
        side: 'left',
        align: 'start',
      }
    case TooltipPosition.LeftBottom:
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

const [
  /**
   * NOTE: Custom context use because the radix-ui doesn't support `delayHide`.
   */
  TooltipGlobalContextProvider,
  useTooltipGlobalContext,
] = createContext<Required<Pick<TooltipProviderProps, 'delayHide'>> | null>(null, 'TooltipProvider')

/**
 * `TooltipProvider` is used to globally provide props to child tooltips.
 *
 * @example
 *
 * ```tsx
 * <TooltipProvider allowHover delayShow={1000}>
 *   <Tooltip />
 * </TooltipProvider>
 * ```
 */
export function TooltipProvider({
  children,
  allowHover = false,
  delayShow = 300,
  delayHide = 0,
  skipDelayShow = 500,
}: TooltipProviderProps) {
  const contextValue = useMemo(() => ({
    delayHide,
  }), [delayHide])

  return (
    <TooltipPrimitive.Provider
      delayDuration={delayShow}
      skipDelayDuration={skipDelayShow}
      disableHoverableContent={!allowHover}
    >
      <TooltipGlobalContextProvider value={contextValue}>
        { children }
      </TooltipGlobalContextProvider>
    </TooltipPrimitive.Provider>
  )
}

/**
 * `Tooltip` is a component that shows additional information when the mouse hovers or the keyboard is focused.
 *
 * @example
 *
 * ```tsx
 * // Anatomy of the Tooltip
 * <TooltipProvider>
 *   <Tooltip />
 * </TooltipProvider>
 *
 * // Example of a Tooltip with a button
 * <Tooltip content="Ta-da!">
 *   <button>Hover me</button>
 * </Tooltip>
 * ```
 */
export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(function Tooltip({
  as,
  children,
  defaultShow,
  onShow: onShowProp,
  onHide: onHideProp,
  disabled,
  title,
  content,
  description,
  icon,
  placement = TooltipPosition.BottomCenter,
  offset = 4,
  container: givenContainer,
  keepInContainer = true,
  allowHover,
  delayShow,
  delayHide: delayHideProp,
  ...rest
}, forwardedRef) {
  const { rootElement } = useWindow()
  const [show, setShow] = useState<boolean>(defaultShow ?? false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const { delayHide: globalDelayHide } = useTooltipGlobalContext('Tooltip')
  const delayHide = delayHideProp ?? globalDelayHide

  const defaultContainer = rootElement
  const container = givenContainer ?? defaultContainer

  const shouldBeHidden = useMemo(() => (
    disabled || isEmpty(content)
  ), [
    disabled,
    content,
  ])

  const onShow = useCallback(() => {
    setShow(true)
    onShowProp?.()
  }, [onShowProp])

  const onHide = useCallback(() => {
    setShow(false)
    onHideProp?.()
  }, [onHideProp])

  useEffect(function forceHide() {
    if (shouldBeHidden) {
      onHide()
    }
  }, [
    shouldBeHidden,
    onHide,
  ])

  useEffect(function cleanUpTimeout() {
    return function cleanUp() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [shouldBeHidden])

  const onOpenChange = useCallback((open: boolean) => {
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
  }, [
    shouldBeHidden,
    delayHide,
    onShow,
    onHide,
  ])

  return (
    <TooltipPrimitive.Root
      open={show}
      defaultOpen={defaultShow}
      delayDuration={delayShow}
      disableHoverableContent={isBoolean(allowHover) ? !allowHover : undefined}
      onOpenChange={onOpenChange}
    >
      <TooltipPrimitive.Trigger asChild>
        { children }
      </TooltipPrimitive.Trigger>

      <TooltipPrimitive.Portal container={container}>
        <InvertedThemeProvider>
          <TooltipPrimitive.Content
            {...rest}
            {...getSideAndAlign(placement)}
            asChild
            ref={forwardedRef}
            sideOffset={offset}
            avoidCollisions={keepInContainer}
            collisionPadding={8}
            hideWhenDetached
          >
            <HStack spacing={4} className={styles['tooltip-content']}>
              <div className={styles['text-container']}>
                { title && (
                  <Text
                    typo="13"
                    bold
                    mb={2}
                    color="txt-black-darkest"
                  >
                    { title }
                  </Text>
                ) }

                <Text
                  color="txt-black-darkest"
                  className={styles.content}
                  typo="13"
                >
                  { content }
                </Text>

                { description && (
                  <Text
                    typo="12"
                    color="txt-black-dark"
                  >
                    { description }
                  </Text>
                ) }
              </div>

              { icon && (
                <Icon
                  size={IconSize.XS}
                  color="txt-black-darkest"
                  m={1}
                  source={icon}
                />
              ) }
            </HStack>
          </TooltipPrimitive.Content>
        </InvertedThemeProvider>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  )
})

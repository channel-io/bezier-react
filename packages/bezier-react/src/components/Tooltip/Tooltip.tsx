import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { isEmpty } from '~/src/utils/type'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import { HStack } from '~/src/components/Stack'
import { Text } from '~/src/components/Text'
import { InvertedThemeProvider } from '~/src/components/ThemeProvider'
import { useWindow } from '~/src/components/WindowProvider'

import {
  TooltipPosition,
  type TooltipProps,
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

/**
 * `Tooltip` is a component that shows additional information when the mouse hovers or the keyboard is focused.
 * If you want to compose another component with `Tooltip`, **it must spread props and forward ref.**
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
export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(function Tooltip({
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
  container: containerProp,
  keepInContainer = true,
  allowHover = false,
  delayShow = 0,
  delayHide = 0,
  ...rest
}, forwardedRef) {
  const [show, setShow] = useState<boolean>(defaultShow ?? false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const { rootElement } = useWindow()
  const container = containerProp ?? rootElement

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
    <TooltipPrimitive.Provider skipDelayDuration={0}>
      <TooltipPrimitive.Root
        open={show}
        defaultOpen={defaultShow}
        delayDuration={delayShow}
        disableHoverableContent={!allowHover}
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
              <HStack
                spacing={4}
                className={styles.Tooltip}
              >
                <div className={styles.TooltipContainer}>
                  { title && (
                    <Text
                      typo="13"
                      bold
                      marginBottom={2}
                      color="txt-black-darkest"
                    >
                      { title }
                    </Text>
                  ) }

                  <Text
                    color="txt-black-darkest"
                    className={styles.TooltipContent}
                    truncated={20}
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
                    source={icon}
                    className={styles.Icon}
                  />
                ) }
              </HStack>
            </TooltipPrimitive.Content>
          </InvertedThemeProvider>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
})

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { document } from '~/src/utils/domUtils'
import { isBoolean } from '~/src/utils/typeUtils'

import {
  TooltipPosition,
  type TooltipProps,
  type TooltipProviderProps,
} from './Tooltip.types'

import * as Styled from './Tooltip.styled'

// TODO: (@ed) Evolve it into a commonly reusable function
// FIXME: duplicate
function createContext<ContextValue>(
  providerName: string,
  defaultValue: ContextValue,
) {
  const Context = React.createContext<ContextValue>(defaultValue)

  function useContext(consumerName: string) {
    const contextValue = React.useContext(Context)

    if (!contextValue) {
      throw new Error(`'${consumerName}' must be used within '${providerName}'`)
    }

    return contextValue
  }

  return [
    Context.Provider,
    useContext,
  ] as const
}

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
] = createContext<Required<Pick<TooltipProviderProps, 'delayHide'>> | null>('TooltipProvider', null)

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
  delayShow = 0,
  delayHide = 0,
  skipDelayShow = 0,
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
  content,
  description,
  icon,
  placement = TooltipPosition.BottomCenter,
  offset = 4,
  container = document.body,
  keepInContainer = true,
  allowHover,
  delayShow,
  delayHide: delayHideProp,
  ...rest
}, forwardedRef) {
  const [show, setShow] = useState<boolean>(defaultShow ?? false)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const { delayHide: globalDelayHide } = useTooltipGlobalContext('Tooltip')

  const delayHide = delayHideProp ?? globalDelayHide

  useEffect(function cleanUpTimeout() {
    return function cleanUp() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const onShow = useCallback(() => {
    setShow(true)
    onShowProp?.()
  }, [onShowProp])

  const onHide = useCallback(() => {
    setShow(false)
    onHideProp?.()
  }, [onHideProp])

  const onOpenChange = useCallback((open: boolean) => {
    if (disabled) { return }

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
    disabled,
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
          <Styled.TooltipContent forwardedAs={as}>
            <div>
              <Styled.Content>
                { content }
              </Styled.Content>

              { description && (
                <Styled.Description>
                  { description }
                </Styled.Description>
              ) }
            </div>

            { icon && (
              <Styled.Icon source={icon} />
            ) }
          </Styled.TooltipContent>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  )
})

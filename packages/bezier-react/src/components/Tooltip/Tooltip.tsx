import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import useMergeRefs from '~/src/hooks/useMergeRefs'
import { document } from '~/src/utils/domUtils'

import {
  type TooltipContentProps,
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

interface TooltipCustomContentContextValue extends TooltipContentProps {
  ref: (element: HTMLDivElement | null) => void
}

const [
  /**
   * NOTE: Custom context use because the radix-ui doesn't support `delayHide`.
   */
  TooltipGlobalContextProvider,
  useTooltipGlobalContext,
] = createContext<Required<Pick<TooltipProviderProps, 'delayHide'>> | null>('TooltipProvider', null)

const [
  TooltipCustomContentContextProvider,
  useTooltipCustomContentContext,
] = createContext<TooltipCustomContentContextValue | null>('Tooltip', null)

export function TooltipProvider({
  children,
  delayShow = 0,
  delayHide = 0,
  skipDelayShow = 0,
  allowHover = false,
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

const TooltipContentImpl = forwardRef<HTMLDivElement, TooltipContentProps>(function TooltipContentImpl({
  children,
  description,
  ...rest
}, forwardedRef) {
  return (
    <Styled.TooltipContent
      ref={forwardedRef}
      {...rest}
    >
      <Styled.TooltipText>
        { children }
      </Styled.TooltipText>
      { description && (
        <Styled.Description>
          { description }
        </Styled.Description>
      ) }
    </Styled.TooltipContent>
  )
})

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(function TooltipContent({
  children,
  ...rest
}, forwardedRef) {
  const {
    ref,
    ...contentProps
  } = useTooltipCustomContentContext('TooltipContent')

  return (
    <TooltipContentImpl
      ref={useMergeRefs(ref, forwardedRef)}
      {...contentProps}
      {...rest}
    >
      { children }
    </TooltipContentImpl>
  )
})

export const Tooltip = forwardRef<HTMLElement, TooltipProps>(function Tooltip({
  children,
  defaultShow,
  onShow,
  onHide,
  content,
  description,
  placement = TooltipPosition.BottomCenter,
  offset = 4,
  disabled,
  container = document.body,
  keepInContainer = true,
  allowHover = false,
  delayShow,
  delayHide: delayHideProp,
  ...rest
}, forwardedRef) {
  const [show, setShow] = useState<boolean>(defaultShow ?? false)
  const [customContentElement, setCustomContentElement] = useState<HTMLDivElement | null>(null)

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

  const onOpenChange = useCallback((open: boolean) => {
    if (disabled) { return }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = undefined
    }

    if (open) {
      setShow(open)
      onShow?.()
      return
    }

    const hide = () => {
      setShow(open)
      onHide?.()
    }

    if (delayHide > 0) {
      timeoutRef.current = setTimeout(() => {
        hide()
      }, delayHide)
      return
    }

    hide()
  }, [
    disabled,
    delayHide,
    onShow,
    onHide,
  ])

  const contentProps = useMemo<TooltipPrimitive.TooltipContentProps>(() => ({
    ...getSideAndAlign(placement),
    description,
    sideOffset: offset,
    avoidCollisions: keepInContainer,
    collisionPadding: 8,
  }), [
    placement,
    description,
    offset,
    keepInContainer,
  ])

  const customContentContextValue = useMemo(() => ({
    ...contentProps,
    ref: setCustomContentElement,
  }), [contentProps])

  const ContentRoot = customContentElement ? React.Fragment : TooltipContentImpl

  return (
    <TooltipPrimitive.Root
      open={show}
      defaultOpen={defaultShow}
      delayDuration={delayShow}
      disableHoverableContent={!allowHover}
      onOpenChange={onOpenChange}
    >
      <TooltipPrimitive.Trigger
        asChild
        ref={forwardedRef as React.Ref<HTMLButtonElement>}
        {...rest}
      >
        { children }
      </TooltipPrimitive.Trigger>

      <TooltipPrimitive.Portal container={container}>
        <TooltipCustomContentContextProvider value={customContentContextValue}>
          <ContentRoot {...contentProps}>
            { content }
          </ContentRoot>
        </TooltipCustomContentContextProvider>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  )
})

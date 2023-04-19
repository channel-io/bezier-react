import React, {
  forwardRef,
  useMemo,
  useState,
} from 'react'

import { Slot } from '@radix-ui/react-slot'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import useMergeRefs from '~/src/hooks/useMergeRefs'
import { document } from '~/src/utils/domUtils'

import {
  type TooltipContentProps,
  TooltipPosition,
  type TooltipProps,
} from './Tooltip.types'

import * as Styled from './Tooltip.styled'

export const TooltipProvider = TooltipPrimitive.Provider

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
  TooltipCustomContentContextProvider,
  useTooltipCustomContentContext,
] = createContext<TooltipCustomContentContextValue | null>('Tooltip', null)

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

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(function Tooltip({
  children,
  content,
  placement = TooltipPosition.BottomCenter,
  offset = 4,
  disabled,
  container = document.body,
  keepInContainer = true,
  delayShow = 0,
  useDefaultTrigger = false,
  ...rest
}, forwardedRef) {
  const [customContentElement, setCustomContentElement] = useState<HTMLDivElement | null>(null)

  const contentProps = useMemo<TooltipPrimitive.TooltipContentProps>(() => ({
    ...rest,
    ...getSideAndAlign(placement),
    sideOffset: offset,
    avoidCollisions: keepInContainer,
    collisionPadding: 16,
  }), [
    placement,
    offset,
    keepInContainer,
    rest,
  ])

  const customContentContextValue = useMemo(() => ({
    ...contentProps,
    ref: setCustomContentElement,
  }), [contentProps])

  const TriggerRoot = !useDefaultTrigger ? Slot : Styled.DefaultTrigger

  const ContentRoot = customContentElement ? React.Fragment : TooltipContentImpl

  return (
    <TooltipPrimitive.Root
      open={disabled ? false : undefined}
      delayDuration={delayShow}
    >
      <TooltipPrimitive.Trigger asChild>
        <TriggerRoot>
          { children }
        </TriggerRoot>
      </TooltipPrimitive.Trigger>

      <TooltipPrimitive.Portal container={container}>
        <TooltipCustomContentContextProvider value={customContentContextValue}>
          <ContentRoot
            ref={forwardedRef}
            {...contentProps}
          >
            { content }
          </ContentRoot>
        </TooltipCustomContentContextProvider>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  )
})

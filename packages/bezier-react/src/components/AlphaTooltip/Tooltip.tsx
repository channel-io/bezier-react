import React, {
  forwardRef,
  useMemo,
  useState,
} from 'react'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import useMergeRefs from '~/src/hooks/useMergeRefs'
import { document } from '~/src/utils/domUtils'
import {
  isArray,
  isString,
} from '~/src/utils/typeUtils'

import { TooltipPosition } from './Tooltip.types'

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

function splitStringByLineBreak(str: string) {
  return (
    str.split('\n').map((chunk, index) => {
      if (index === 0) {
        return (
          <Styled.TooltipText key={chunk}>
            { chunk }
          </Styled.TooltipText>
        )
      }

      return (
        <React.Fragment key={chunk}>
          <br />
          <Styled.TooltipText>
            { chunk }
          </Styled.TooltipText>
        </React.Fragment>
      )
    })
  )
}

function parseContentByLineBreak(content: React.ReactNode): React.ReactNode {
  if (isString(content)) {
    return splitStringByLineBreak(content)
  }

  if (isArray(content)) {
    return content.map(item => (
      isString(item)
        ? splitStringByLineBreak(item)
        : item
    ))
  }

  return content
}

interface TooltipCustomContentContextValue extends TooltipPrimitive.TooltipContentProps {
  ref: (element: HTMLDivElement | null) => void
}

const [
  TooltipCustomContentContextProvider,
  useTooltipCustomContentContext,
] = createContext<TooltipCustomContentContextValue | null>('Tooltip', null)

// TODO: (@ed) prop type declaration
export const TooltipContent = forwardRef<HTMLDivElement, any>(function TooltipContent({
  children,
  ...rest
}, forwardedRef) {
  const {
    ref,
    ...contentProps
  } = useTooltipCustomContentContext('TooltipContent')

  /* FIXME: duplicate */
  return (
    <Styled.TooltipContent
      ref={useMergeRefs(ref, forwardedRef)}
      {...contentProps}
      {...rest}
    >
      <Styled.EllipsisableContent>
        { parseContentByLineBreak(children) }
      </Styled.EllipsisableContent>
    </Styled.TooltipContent>
  )
})

const collisionPadding = {
  top: 16,
  left: 16,
  bottom: 16,
  right: 16,
}

export const TooltipProvider = TooltipPrimitive.Provider

export const Tooltip = forwardRef<HTMLDivElement, any>(function Tooltip({
  children,
  content,
  placement = TooltipPosition.BottomCenter,
  offset = 4,
  container = document.body,
  keepInContainer = true,
  delayShow = 0,
  // TODO: implement
  delayHide = 2000,
}, forwardedRef) {
  const [customContentElement, setCustomContentElement] = useState<HTMLDivElement | null>(null)

  const contentProps = useMemo<TooltipPrimitive.TooltipContentProps>(() => ({
    ...getSideAndAlign(placement),
    sideOffset: offset,
    avoidCollisions: keepInContainer,
    collisionPadding,
  }), [
    placement,
    offset,
    keepInContainer,
  ])

  const customContentContextValue = useMemo(() => ({
    ...contentProps,
    ref: setCustomContentElement,
  }), [contentProps])

  const parsedContent = useMemo(() => parseContentByLineBreak(content), [content])

  const ContentRoot = !customContentElement ? Styled.TooltipContent : React.Fragment

  return (
    <TooltipPrimitive.Root delayDuration={delayShow}>
      <TooltipPrimitive.Trigger>
        { children }
      </TooltipPrimitive.Trigger>

      <TooltipPrimitive.Portal container={container}>
        <TooltipCustomContentContextProvider value={customContentContextValue}>
          <ContentRoot {...contentProps}>
            <Styled.EllipsisableContent>
              { parsedContent }
            </Styled.EllipsisableContent>
          </ContentRoot>
        </TooltipCustomContentContextProvider>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  )
})

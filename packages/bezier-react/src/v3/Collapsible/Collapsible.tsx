'use client'

import {
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useId,
  useMemo,
  useState,
} from 'react'
import * as React from 'react'

import classNames from 'classnames'

import { createContext } from '~/src/utils/react'
import { isNil } from '~/src/utils/type'

import type {
  CollapsibleCloseProps,
  CollapsibleContentProps,
  CollapsibleProps,
  CollapsibleState,
  CollapsibleTriggerProps,
  CollapsibleTriggerRenderProps,
} from './Collapsible.types'

import styles from './Collapsible.module.scss'

export const COLLAPSIBLE_TEST_ID = 'bezier-v3-collapsible'
export const COLLAPSIBLE_CONTENT_TEST_ID = 'bezier-v3-collapsible-content'

type CollapsibleContextValue = {
  open: boolean
  disabled: boolean
  triggerId: string
  contentId: string
  setOpen: (open: boolean) => void
  toggle: () => void
  close: () => void
}

const [CollapsibleContextProvider, useCollapsibleContext] =
  createContext<CollapsibleContextValue | null>(null, 'Collapsible')

function getState(open: boolean): CollapsibleState {
  return open ? 'open' : 'closed'
}

function isNativeButtonElement(element: React.ReactElement) {
  return typeof element.type === 'string' && element.type === 'button'
}

function getTriggerA11yProps({
  open,
  disabled,
  triggerId,
  contentId,
}: Pick<
  CollapsibleContextValue,
  'open' | 'disabled' | 'triggerId' | 'contentId'
>) {
  return {
    id: triggerId,
    'aria-controls': contentId,
    'aria-expanded': open,
    'aria-disabled': disabled || undefined,
    'data-state': getState(open),
    'data-active': open,
  }
}

function getButtonTriggerProps({
  disabled,
}: Pick<CollapsibleContextValue, 'disabled'>) {
  return {
    type: 'button' as const,
    disabled: disabled || undefined,
  }
}

/**
 * Internal disclosure primitive for purpose-built components such as
 * `CollapsibleSection`.
 *
 * Keep this out of the public v3 barrel until concrete product usage proves
 * that a low-level escape hatch is needed. Adding a public primitive later is
 * cheap, but removing it after consumers depend on it is not.
 */
export const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  function Collapsible(
    {
      children,
      className,
      open: openProp,
      defaultOpen = false,
      disabled = false,
      onOpenChange,
      ...rest
    },
    forwardedRef
  ) {
    const triggerId = useId()
    const contentId = useId()
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
    const controlled = !isNil(openProp)
    const open = controlled ? Boolean(openProp) : uncontrolledOpen

    const setOpen = useCallback(
      (nextOpen: boolean) => {
        if (disabled) {
          return
        }

        if (!controlled) {
          setUncontrolledOpen(nextOpen)
        }

        onOpenChange?.(nextOpen)
      },
      [controlled, disabled, onOpenChange]
    )

    const toggle = useCallback(() => {
      setOpen(!open)
    }, [open, setOpen])

    const close = useCallback(() => {
      setOpen(false)
    }, [setOpen])

    const contextValue = useMemo(
      (): CollapsibleContextValue => ({
        open,
        disabled,
        triggerId,
        contentId,
        setOpen,
        toggle,
        close,
      }),
      [close, contentId, disabled, open, setOpen, toggle, triggerId]
    )

    return (
      <CollapsibleContextProvider value={contextValue}>
        <div
          ref={forwardedRef}
          className={classNames(styles.Collapsible, className)}
          data-state={getState(open)}
          data-testid={COLLAPSIBLE_TEST_ID}
          {...rest}
        >
          {children}
        </div>
      </CollapsibleContextProvider>
    )
  }
)

export function CollapsibleTrigger({
  children,
  disabled: disabledProp = false,
  onClick,
  onKeyDown,
  ...rest
}: CollapsibleTriggerProps) {
  const context = useCollapsibleContext('CollapsibleTrigger')
  const disabled = context.disabled || disabledProp
  const triggerProps = {
    ...getTriggerA11yProps({
      open: context.open,
      disabled,
      triggerId: context.triggerId,
      contentId: context.contentId,
    }),
    ...getButtonTriggerProps({ disabled }),
    ...rest,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(event)
      if (!event.defaultPrevented && !disabled) {
        context.toggle()
      }
    },
    onKeyDown,
  }

  if (typeof children === 'function') {
    return children({
      open: context.open,
      disabled,
      triggerProps,
    } satisfies CollapsibleTriggerRenderProps)
  }

  if (!isValidElement(children)) {
    return null
  }

  const childProps = children.props as {
    ref?: React.Ref<HTMLElement>
    onClick?: React.MouseEventHandler<HTMLElement>
    onKeyDown?: React.KeyboardEventHandler<HTMLElement>
  }
  const nativeButton = isNativeButtonElement(children)
  const domNonButton = typeof children.type === 'string' && !nativeButton
  const activeProps =
    typeof children.type === 'string'
      ? { 'data-active': context.open }
      : { active: context.open }

  return cloneElement(children, {
    ref: childProps.ref,
    ...getTriggerA11yProps({
      open: context.open,
      disabled,
      triggerId: context.triggerId,
      contentId: context.contentId,
    }),
    ...(!domNonButton && getButtonTriggerProps({ disabled })),
    ...(domNonButton && {
      role: 'button',
      tabIndex: disabled ? -1 : 0,
    }),
    ...rest,
    ...activeProps,
    onClick: (event: React.MouseEvent<HTMLElement>) => {
      childProps.onClick?.(event)
      onClick?.(event as unknown as React.MouseEvent<HTMLButtonElement>)
      if (!event.defaultPrevented && !disabled) {
        context.toggle()
      }
    },
    onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => {
      childProps.onKeyDown?.(event)
      onKeyDown?.(event as unknown as React.KeyboardEvent<HTMLButtonElement>)
      if (event.defaultPrevented || nativeButton || disabled) {
        return
      }

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        context.toggle()
      }
    },
  } as Partial<typeof children.props>)
}

export const CollapsibleContent = forwardRef<
  HTMLDivElement,
  CollapsibleContentProps
>(function CollapsibleContent(
  { children, className, forceMount = false, ...rest },
  forwardedRef
) {
  const { open, triggerId, contentId } = useCollapsibleContext(
    'CollapsibleContent'
  )

  if (!open && !forceMount) {
    return null
  }

  return (
    <div
      ref={forwardedRef}
      id={contentId}
      className={classNames(styles.CollapsibleContent, className)}
      data-state={getState(open)}
      data-testid={COLLAPSIBLE_CONTENT_TEST_ID}
      aria-labelledby={triggerId}
      hidden={!open}
      {...rest}
    >
      {children}
    </div>
  )
})

export function CollapsibleClose({
  children,
  onClick,
  ...rest
}: CollapsibleCloseProps) {
  const { close } = useCollapsibleContext('CollapsibleClose')

  if (!isValidElement(children)) {
    return null
  }

  const childProps = children.props as {
    onClick?: React.MouseEventHandler<HTMLElement>
  }

  return cloneElement(children, {
    ...rest,
    onClick: (event: React.MouseEvent<HTMLElement>) => {
      childProps.onClick?.(event)
      onClick?.(event as unknown as React.MouseEvent<HTMLButtonElement>)
      if (!event.defaultPrevented) {
        close()
      }
    },
  } as Partial<typeof children.props>)
}

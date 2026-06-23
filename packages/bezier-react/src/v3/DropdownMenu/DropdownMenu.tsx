'use client'

import {
  Children,
  Fragment,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'
import * as React from 'react'

import { ChevronSmallRightIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import useEventHandler from '~/src/hooks/useEventHandler'
import useMergeRefs from '~/src/hooks/useMergeRefs'
import { createContext } from '~/src/utils/react'
import { cssDimension } from '~/src/utils/style'
import { isNil } from '~/src/utils/type'
import { BaseItem } from '~/src/v3/BaseItem/BaseItem'
import { Divider } from '~/src/v3/Divider'
import { Overlay } from '~/src/v3/Overlay'

import { useWindow } from '~/src/components/WindowProvider'

import type {
  DropdownMenuGroupProps,
  DropdownMenuItemProps,
  DropdownMenuProps,
  DropdownMenuSeparatorProps,
  DropdownMenuSubContentProps,
  DropdownMenuSubProps,
  DropdownMenuSubTriggerProps,
  DropdownMenuTriggerProps,
} from './DropdownMenu.types'

import styles from './DropdownMenu.module.scss'

const MENU_ITEM_SELECTOR =
  '[data-b-dropdown-menu-item="true"]:not([aria-disabled="true"])'

type DropdownMenuContextValue = {
  open: boolean
  size: NonNullable<DropdownMenuProps['size']>
  menuId: string
  overlayContainer: HTMLElement | null
  close: () => void
}

const [DropdownMenuContextProvider, useDropdownMenuContext] =
  createContext<DropdownMenuContextValue>({
    open: false,
    size: 'm',
    menuId: '',
    overlayContainer: null,
    close: () => {},
  })

type DropdownMenuSubContextValue = {
  open: boolean
  focusOnOpen: boolean
  trigger: HTMLElement | null
  content: HTMLElement | null
  setTrigger: (element: HTMLElement | null) => void
  setContent: (element: HTMLElement | null) => void
  openSub: (options?: { focusOnOpen?: boolean }) => void
  closeSub: () => void
  scheduleCloseSub: () => void
  clearCloseTimer: () => void
  containsElement: (element: EventTarget | null) => boolean
}

const [DropdownMenuSubContextProvider, useDropdownMenuSubContext] =
  createContext<DropdownMenuSubContextValue>({
    open: false,
    focusOnOpen: false,
    trigger: null,
    content: null,
    setTrigger: () => {},
    setContent: () => {},
    openSub: () => {},
    closeSub: () => {},
    scheduleCloseSub: () => {},
    clearCloseTimer: () => {},
    containsElement: () => false,
  })

type DropdownMenuTriggerInjectedProps = {
  setTriggerElement?: (element: HTMLElement | null) => void
  setOpen?: (open: boolean) => void
}

function isDropdownMenuTriggerElement(
  child: React.ReactNode
): child is React.ReactElement<DropdownMenuTriggerProps> {
  return isValidElement(child) && child.type === DropdownMenuTrigger
}

function flattenChildren(children: React.ReactNode): React.ReactNode[] {
  return Children.toArray(children).flatMap((child) => {
    if (
      isValidElement<{ children?: React.ReactNode }>(child) &&
      child.type === Fragment
    ) {
      return flattenChildren(child.props.children)
    }

    return [child]
  })
}

function splitDropdownMenuChildren(children: React.ReactNode) {
  return flattenChildren(children).reduce<{
    trigger: React.ReactNode | null
    items: React.ReactNode[]
  }>(
    (result, child) => {
      if (isDropdownMenuTriggerElement(child)) {
        result.trigger = child
      } else {
        result.items.push(child)
      }

      return result
    },
    {
      trigger: null,
      items: [],
    }
  )
}

function isSidePosition(position: NonNullable<DropdownMenuProps['position']>) {
  return position.startsWith('left') || position.startsWith('right')
}

function getOverlayMargins({
  position,
  offset,
}: {
  position: NonNullable<DropdownMenuProps['position']>
  offset: number
}) {
  return isSidePosition(position)
    ? { marginX: offset, marginY: 0 }
    : { marginX: 0, marginY: offset }
}

function getFocusableItems(container: HTMLElement | null) {
  if (!container) {
    return []
  }

  return Array.from(container.querySelectorAll<HTMLElement>(MENU_ITEM_SELECTOR))
}

function focusItem(container: HTMLElement | null, index: number) {
  getFocusableItems(container)[index]?.focus()
}

function moveFocus(container: HTMLElement | null, delta: number) {
  const items = getFocusableItems(container)

  if (items.length === 0) {
    return
  }

  const currentIndex = items.findIndex(
    (item) => item === document.activeElement
  )
  const nextIndex =
    currentIndex === -1
      ? delta > 0
        ? 0
        : items.length - 1
      : (currentIndex + delta + items.length) % items.length

  items[nextIndex]?.focus()
}

function DropdownMenuContent({
  children,
  autoFocusOnMount = false,
  onKeyDown,
}: {
  children: React.ReactNode
  autoFocusOnMount?: boolean
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>
}) {
  const { menuId } = useDropdownMenuContext()
  const { window } = useWindow()
  const contentRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = useCallback<React.KeyboardEventHandler<HTMLDivElement>>(
    (event) => {
      onKeyDown?.(event)

      if (event.defaultPrevented) {
        return
      }

      switch (event.key) {
        case 'ArrowDown': {
          event.preventDefault()
          moveFocus(contentRef.current, 1)
          break
        }
        case 'ArrowUp': {
          event.preventDefault()
          moveFocus(contentRef.current, -1)
          break
        }
        case 'Home': {
          event.preventDefault()
          focusItem(contentRef.current, 0)
          break
        }
        case 'End': {
          event.preventDefault()
          const items = getFocusableItems(contentRef.current)
          items[items.length - 1]?.focus()
          break
        }
      }
    },
    [onKeyDown]
  )

  useEffect(() => {
    if (autoFocusOnMount) {
      window.requestAnimationFrame(() => {
        focusItem(contentRef.current, 0)
      })
    }
  }, [autoFocusOnMount, window])

  return (
    <div
      id={menuId}
      ref={contentRef}
      className={styles.DropdownMenuContent}
      role="menu"
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  )
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  function DropdownMenu(
    {
      children,
      className,
      style,
      show,
      defaultShow = false,
      container,
      target,
      position = 'bottom-left',
      offset = 6,
      keepInContainer = false,
      width = 224,
      maxHeight,
      size = 'm',
      onShow,
      onHide,
      ...rest
    },
    forwardedRef
  ) {
    const generatedId = useId()
    const menuId = rest.id ?? generatedId
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultShow)
    const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(
      null
    )
    const [rootElement, setRootElement] = useState<HTMLDivElement | null>(null)
    const controlled = !isNil(show)
    const open = controlled ? Boolean(show) : uncontrolledOpen
    const overlayTarget = target ?? triggerElement
    const { trigger, items } = splitDropdownMenuChildren(children)
    const hasInternalTrigger = isValidElement(trigger)
    const overlayContainer =
      container ?? (hasInternalTrigger ? rootElement : null)

    const setOpen = useCallback(
      (nextOpen: boolean) => {
        if (!controlled) {
          setUncontrolledOpen(nextOpen)
        }

        if (nextOpen) {
          onShow?.()
        } else {
          onHide?.()
        }
      },
      [controlled, onHide, onShow]
    )

    const close = useCallback(() => {
      setOpen(false)
      triggerElement?.focus()
    }, [setOpen, triggerElement])

    const contextValue = useMemo(
      (): DropdownMenuContextValue => ({
        open,
        size,
        menuId,
        overlayContainer,
        close,
      }),
      [close, menuId, open, overlayContainer, size]
    )

    const overlayMargins = getOverlayMargins({ position, offset })

    const triggerElementNode = hasInternalTrigger
      ? cloneElement(trigger, {
          setTriggerElement,
          setOpen,
        } as DropdownMenuTriggerInjectedProps)
      : trigger

    const overlayElement = (
      <Overlay
        ref={forwardedRef}
        className={classNames(styles.DropdownMenu, className)}
        style={
          {
            '--b-v3-dropdown-menu-width': cssDimension(width),
            '--b-v3-dropdown-menu-max-height': maxHeight
              ? cssDimension(maxHeight)
              : 'none',
            ...style,
          } as React.CSSProperties
        }
        show={open}
        target={overlayTarget}
        container={overlayContainer}
        position={position}
        marginX={overlayMargins.marginX}
        marginY={overlayMargins.marginY}
        keepInContainer={keepInContainer}
        onHide={close}
        {...rest}
      >
        <DropdownMenuContent autoFocusOnMount>{items}</DropdownMenuContent>
      </Overlay>
    )

    return (
      <DropdownMenuContextProvider value={contextValue}>
        {hasInternalTrigger ? (
          <div
            ref={setRootElement}
            className={styles.DropdownMenuRoot}
          >
            {triggerElementNode}
            {overlayElement}
          </div>
        ) : (
          <>
            {triggerElementNode}
            {overlayElement}
          </>
        )}
      </DropdownMenuContextProvider>
    )
  }
)

export function DropdownMenuTrigger({
  children,
  ...injectedProps
}: DropdownMenuTriggerProps & DropdownMenuTriggerInjectedProps) {
  const { open, menuId } = useDropdownMenuContext()
  const childProps = isValidElement(children)
    ? (children.props as {
        ref?: React.Ref<HTMLElement>
        onClick?: React.MouseEventHandler<HTMLElement>
        onKeyDown?: React.KeyboardEventHandler<HTMLElement>
      })
    : null
  const triggerRef = useMergeRefs(
    childProps?.ref,
    injectedProps.setTriggerElement
  )

  if (!isValidElement(children) || !childProps) {
    return null
  }

  const activeProps =
    typeof children.type === 'string'
      ? { 'data-active': open }
      : { active: open }

  return cloneElement(children, {
    ref: triggerRef,
    'aria-controls': open ? menuId : undefined,
    'aria-expanded': open,
    'aria-haspopup': 'menu',
    'data-state': open ? 'open' : 'closed',
    ...activeProps,
    onClick: (event: React.MouseEvent<HTMLElement>) => {
      childProps.onClick?.(event)
      if (!event.defaultPrevented) {
        injectedProps.setOpen?.(!open)
      }
    },
    onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => {
      childProps.onKeyDown?.(event)
      if (event.defaultPrevented) {
        return
      }

      if (
        event.key === 'ArrowDown' ||
        event.key === 'Enter' ||
        event.key === ' '
      ) {
        event.preventDefault()
        injectedProps.setOpen?.(true)
      }
    },
  } as Partial<typeof children.props>)
}

export const DropdownMenuItem = forwardRef<
  HTMLDivElement,
  DropdownMenuItemProps
>(function DropdownMenuItem(
  {
    className,
    content,
    disabled = false,
    variant = 'neutral',
    description,
    leadingContent,
    trailingContent,
    closeOnSelect = true,
    onSelect,
    onKeyDown,
    ...rest
  },
  forwardedRef
) {
  const { size, close } = useDropdownMenuContext()

  const handleSelect = useCallback(
    (
      event:
        | React.MouseEvent<HTMLDivElement>
        | React.KeyboardEvent<HTMLDivElement>
    ) => {
      if (disabled) {
        return
      }

      onSelect?.(event)

      if (!('defaultPrevented' in event) || !event.defaultPrevented) {
        if (closeOnSelect) {
          close()
        }
      }
    },
    [close, closeOnSelect, disabled, onSelect]
  )

  return (
    <BaseItem
      ref={forwardedRef}
      className={className}
      role="menuitem"
      tabIndex={disabled ? undefined : -1}
      aria-disabled={disabled || undefined}
      data-b-dropdown-menu-item="true"
      disabled={disabled}
      size={size}
      variant={variant}
      description={description}
      leadingContent={leadingContent}
      trailingContent={trailingContent}
      {...rest}
      onClick={(event) => {
        if (!event.defaultPrevented) {
          handleSelect(event)
        }
      }}
      onKeyDown={(event) => {
        onKeyDown?.(event)
        if (event.defaultPrevented) {
          return
        }

        if (event.key === 'Enter' || event.key === ' ') {
          handleSelect(event)
          event.preventDefault()
        }
      }}
    >
      {content}
    </BaseItem>
  )
})

export const DropdownMenuGroup = forwardRef<
  HTMLDivElement,
  DropdownMenuGroupProps
>(function DropdownMenuGroup(
  { children, className, label, ...rest },
  forwardedRef
) {
  const generatedId = useId()

  return (
    <div
      ref={forwardedRef}
      className={classNames(styles.DropdownMenuGroup, className)}
      role="group"
      aria-labelledby={generatedId}
      {...rest}
    >
      <div
        id={generatedId}
        className={styles.DropdownMenuGroupLabel}
      >
        {label}
      </div>
      <div className={styles.DropdownMenuGroupContent}>{children}</div>
    </div>
  )
})

export const DropdownMenuSeparator = forwardRef<
  HTMLDivElement,
  DropdownMenuSeparatorProps
>(function DropdownMenuSeparator({ className, ...rest }, forwardedRef) {
  return (
    <Divider
      ref={forwardedRef}
      className={classNames(styles.DropdownMenuSeparator, className)}
      orientation="horizontal"
      withoutSideIndent
      {...rest}
    />
  )
})

export function DropdownMenuSub({ children }: DropdownMenuSubProps) {
  const { window } = useWindow()
  const [open, setOpen] = useState(false)
  const [focusOnOpen, setFocusOnOpen] = useState(false)
  const [trigger, setTrigger] = useState<HTMLElement | null>(null)
  const [content, setContent] = useState<HTMLElement | null>(null)
  const closeTimerRef = useRef<number | null>(null)

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current != null) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }, [window])

  const closeSub = useCallback(() => {
    clearCloseTimer()
    setOpen(false)
    setFocusOnOpen(false)
  }, [clearCloseTimer])

  const openSub = useCallback(
    ({ focusOnOpen: nextFocusOnOpen = false } = {}) => {
      clearCloseTimer()
      setFocusOnOpen(nextFocusOnOpen)
      setOpen(true)
    },
    [clearCloseTimer]
  )

  const scheduleCloseSub = useCallback(() => {
    clearCloseTimer()
    closeTimerRef.current = window.setTimeout(closeSub, 100)
  }, [clearCloseTimer, closeSub, window])

  const containsElement = useCallback(
    (element: EventTarget | null) =>
      element instanceof Node &&
      Boolean(trigger?.contains(element) || content?.contains(element)),
    [content, trigger]
  )

  const contextValue = useMemo(
    (): DropdownMenuSubContextValue => ({
      open,
      focusOnOpen,
      trigger,
      content,
      setTrigger,
      setContent,
      openSub,
      closeSub,
      scheduleCloseSub,
      clearCloseTimer,
      containsElement,
    }),
    [
      clearCloseTimer,
      closeSub,
      containsElement,
      content,
      focusOnOpen,
      open,
      openSub,
      scheduleCloseSub,
      trigger,
    ]
  )

  return (
    <DropdownMenuSubContextProvider value={contextValue}>
      {children}
    </DropdownMenuSubContextProvider>
  )
}

export const DropdownMenuSubTrigger = forwardRef<
  HTMLDivElement,
  DropdownMenuSubTriggerProps
>(function DropdownMenuSubTrigger(
  { onKeyDown, onPointerEnter, onPointerLeave, ...rest },
  forwardedRef
) {
  const { open, setTrigger, openSub, scheduleCloseSub, containsElement } =
    useDropdownMenuSubContext()
  const triggerRef = useMergeRefs(forwardedRef, setTrigger)

  return (
    <DropdownMenuItem
      {...rest}
      ref={triggerRef}
      aria-expanded={open}
      aria-haspopup="menu"
      closeOnSelect={false}
      trailingContent={<ChevronSmallRightIcon className={styles.SubChevron} />}
      onPointerEnter={(event) => {
        onPointerEnter?.(event)
        if (!event.defaultPrevented) {
          openSub()
        }
      }}
      onPointerLeave={(event) => {
        onPointerLeave?.(event)
        if (!event.defaultPrevented && !containsElement(event.relatedTarget)) {
          scheduleCloseSub()
        }
      }}
      onKeyDown={(event) => {
        onKeyDown?.(event)
        if (event.defaultPrevented) {
          return
        }

        if (
          event.key === 'ArrowRight' ||
          event.key === 'Enter' ||
          event.key === ' '
        ) {
          event.preventDefault()
          openSub({ focusOnOpen: true })
        }
      }}
    />
  )
})

export const DropdownMenuSubContent = forwardRef<
  HTMLDivElement,
  DropdownMenuSubContentProps
>(function DropdownMenuSubContent(
  {
    children,
    className,
    style,
    onKeyDown,
    onPointerEnter,
    onPointerLeave,
    container,
    position = 'right-top',
    offset = 4,
    keepInContainer = false,
    width = 224,
    maxHeight,
    size,
    onHide,
    ...rest
  },
  forwardedRef
) {
  const rootContext = useDropdownMenuContext()
  const { size: rootSize } = rootContext
  const {
    open,
    focusOnOpen,
    trigger,
    setContent,
    closeSub,
    clearCloseTimer,
    scheduleCloseSub,
    containsElement,
  } = useDropdownMenuSubContext()
  const { document } = useWindow()
  const mergedRef = useMergeRefs(forwardedRef, setContent)
  const overlayMargins = getOverlayMargins({ position, offset })

  const handleHide = useCallback(() => {
    closeSub()
    onHide?.()
  }, [closeSub, onHide])

  const handleKeyDown = useCallback<React.KeyboardEventHandler<HTMLDivElement>>(
    (event) => {
      onKeyDown?.(event)

      if (event.defaultPrevented) {
        return
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        handleHide()
        trigger?.focus()
      }
    },
    [handleHide, onKeyDown, trigger]
  )

  const handleDocumentKeyDown = useCallback(
    (event: HTMLElementEventMap['keydown']) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        handleHide()
        trigger?.focus()
      }
    },
    [handleHide, trigger]
  )

  useEventHandler(document, 'keydown', handleDocumentKeyDown, open)

  return (
    <Overlay
      ref={mergedRef}
      className={classNames(styles.DropdownMenu, className)}
      style={
        {
          '--b-v3-dropdown-menu-width': cssDimension(width),
          '--b-v3-dropdown-menu-max-height': maxHeight
            ? cssDimension(maxHeight)
            : 'none',
          ...style,
        } as React.CSSProperties
      }
      show={open}
      target={trigger}
      container={container ?? rootContext.overlayContainer}
      containerClassName={styles.SubmenuOverlayContainer}
      position={position}
      marginX={overlayMargins.marginX}
      marginY={overlayMargins.marginY}
      keepInContainer={keepInContainer}
      onHide={handleHide}
      onKeyDown={handleKeyDown}
      onPointerEnter={(event) => {
        onPointerEnter?.(event)
        if (!event.defaultPrevented) {
          clearCloseTimer()
        }
      }}
      onPointerLeave={(event) => {
        onPointerLeave?.(event)
        if (!event.defaultPrevented && !containsElement(event.relatedTarget)) {
          scheduleCloseSub()
        }
      }}
      {...rest}
    >
      <DropdownMenuContextProvider
        value={{
          ...rootContext,
          size: size ?? rootSize,
        }}
      >
        <DropdownMenuContent autoFocusOnMount={focusOnOpen}>
          {children}
        </DropdownMenuContent>
      </DropdownMenuContextProvider>
    </Overlay>
  )
})

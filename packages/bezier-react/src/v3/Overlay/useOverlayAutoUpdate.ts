import { type RefObject, useCallback, useEffect, useRef } from 'react'

import type { OverlayTarget } from './Overlay.types'

function isElementTarget(
  target: OverlayTarget | null | undefined
): target is HTMLElement {
  return (target as { nodeType?: number } | null | undefined)?.nodeType === 1
}

function isScrollableElement(element: HTMLElement, window: Window) {
  const { overflow, overflowX, overflowY } = window.getComputedStyle(element)

  return /(auto|scroll|overlay)/.test(`${overflow}${overflowX}${overflowY}`)
}

function getScrollableAncestors({
  target,
  container,
  rootElement,
  window,
}: {
  target?: OverlayTarget | null
  container: HTMLElement
  rootElement: HTMLElement
  window: Window
}) {
  const ancestors = new Set<HTMLElement | Window>([window])

  if (container !== rootElement) {
    ancestors.add(container)
  }

  if (!isElementTarget(target)) {
    return Array.from(ancestors)
  }

  let element = target.parentElement

  while (element && element !== rootElement) {
    if (isScrollableElement(element, window)) {
      ancestors.add(element)
    }

    element = element.parentElement
  }

  return Array.from(ancestors)
}

interface UseOverlayAutoUpdateArgs {
  enabled: boolean
  target?: OverlayTarget | null
  floatingRef: RefObject<HTMLElement | null>
  container: HTMLElement
  rootElement: HTMLElement
  window: Window
  onUpdate: () => void
}

export function useOverlayAutoUpdate({
  enabled,
  target,
  floatingRef,
  container,
  rootElement,
  window,
  onUpdate,
}: UseOverlayAutoUpdateArgs) {
  const updateRafRef = useRef<number | null>(null)

  const cancelScheduledUpdate = useCallback(() => {
    if (updateRafRef.current != null) {
      window.cancelAnimationFrame(updateRafRef.current)
      updateRafRef.current = null
    }
  }, [window])

  const scheduleUpdate = useCallback(() => {
    if (updateRafRef.current != null) {
      return
    }

    updateRafRef.current = window.requestAnimationFrame(() => {
      updateRafRef.current = null
      onUpdate()
    })
  }, [onUpdate, window])

  useEffect(() => {
    if (!enabled) {
      cancelScheduledUpdate()
    }

    return cancelScheduledUpdate
  }, [cancelScheduledUpdate, enabled])

  useEffect(() => {
    if (!enabled) {
      return
    }

    window.addEventListener('resize', scheduleUpdate, { passive: true })

    return () => {
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [enabled, scheduleUpdate, window])

  useEffect(() => {
    if (!enabled) {
      return
    }

    const scrollParents = getScrollableAncestors({
      target,
      container,
      rootElement,
      window,
    })

    scrollParents.forEach((scrollParent) => {
      scrollParent.addEventListener('scroll', scheduleUpdate, {
        passive: true,
      })
    })

    return () => {
      scrollParents.forEach((scrollParent) => {
        scrollParent.removeEventListener('scroll', scheduleUpdate)
      })

      cancelScheduledUpdate()
    }
  }, [
    cancelScheduledUpdate,
    container,
    enabled,
    rootElement,
    scheduleUpdate,
    target,
    window,
  ])

  useEffect(() => {
    const ResizeObserverConstructor = (
      window as Window & { ResizeObserver?: typeof ResizeObserver }
    ).ResizeObserver

    if (!enabled || !ResizeObserverConstructor) {
      return
    }

    const observedElements = new Set<Element>()
    const resizeObserver = new ResizeObserverConstructor(scheduleUpdate)

    if (isElementTarget(target)) {
      observedElements.add(target)
    }

    if (floatingRef.current) {
      observedElements.add(floatingRef.current)
    }

    observedElements.add(container)

    observedElements.forEach((element) => {
      resizeObserver.observe(element)
    })

    return () => {
      resizeObserver.disconnect()
    }
  }, [container, enabled, floatingRef, scheduleUpdate, target, window])
}

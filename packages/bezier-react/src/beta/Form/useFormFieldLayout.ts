import { useRef } from 'react'

import { useIsomorphicLayoutEffect } from '~/src/hooks/useIsomorphicLayoutEffect'

/**
 * Grid rows couple the description height to the control/error spacing. Measure
 * each column independently so wrappers and stateful controls keep their DOM.
 */
export function useFormFieldLayout(enabled: boolean) {
  const ref = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const field = ref.current
    const view = field?.ownerDocument.defaultView
    if (!enabled || !field || !view) {
      return
    }

    const observed = new Set<HTMLElement>()
    const clearOffset = (element: HTMLElement) => {
      element.style.removeProperty('--b-form-offset')
    }
    const clearLayout = () => {
      observed.forEach(clearOffset)
      field.style.removeProperty('--b-form-height')
      delete field.dataset.bFormLayout
      field.removeAttribute('data-b-form-label-only')
    }
    const update = () => {
      if (view.getComputedStyle(field).display !== 'grid') {
        clearLayout()
        return
      }
      const items = Array.from(field.children)
        .filter(
          (element): element is HTMLElement =>
            element instanceof view.HTMLElement
        )
        .map((element) => ({ element, style: view.getComputedStyle(element) }))
        .filter(
          ({ element, style }) =>
            element.getClientRects().length > 0 &&
            style.position !== 'absolute' &&
            style.position !== 'fixed'
        )
        .sort((a, b) => Number(a.style.order) - Number(b.style.order))
      field.toggleAttribute(
        'data-b-form-label-only',
        items.length > 0 &&
          items.every(({ style }) => style.gridColumnStart === '1')
      )
      const heights = [0, 0]
      const previousOrders = [-1, -1]
      const offsets = items.map(({ element, style }) => {
        const column = style.gridColumnStart === '1' ? 0 : 1
        const order = Number(style.order)
        const gap =
          column === 1 &&
          previousOrders[column] !== -1 &&
          !(order === 3 && previousOrders[column] === 3)
            ? 4
            : 0
        const offset = heights[column] + gap
        // offsetHeight rounds fractional pixels; computed height also stays
        // independent of any transform applied by a containing dialog.
        const height =
          parseFloat(style.height) +
          (style.boxSizing === 'border-box'
            ? 0
            : [
                style.paddingTop,
                style.paddingBottom,
                style.borderTopWidth,
                style.borderBottomWidth,
              ].reduce((total, value) => total + (parseFloat(value) || 0), 0))
        heights[column] =
          offset +
          (Number.isNaN(height) ? element.offsetHeight : height) +
          (parseFloat(style.marginTop) || 0) +
          (parseFloat(style.marginBottom) || 0)
        previousOrders[column] = order
        return { element, column, offset }
      })
      offsets.forEach(({ element, column, offset }) => {
        const centeredOffset =
          offset + (column === 0 ? Math.max(0, (36 - heights[0]) / 2) : 0)
        const value = `${centeredOffset}px`
        if (element.style.getPropertyValue('--b-form-offset') !== value) {
          element.style.setProperty('--b-form-offset', value)
        }
      })
      field.style.setProperty(
        '--b-form-height',
        `${Math.max(40, ...heights)}px`
      )
      field.dataset.bFormLayout = 'measured'
    }
    const resizeObserver = new ResizeObserver(update)
    const refresh = () => {
      const children = new Set(
        Array.from(field.children).filter(
          (element): element is HTMLElement =>
            element instanceof view.HTMLElement
        )
      )
      observed.forEach((element) => {
        if (!children.has(element)) {
          resizeObserver.unobserve(element)
          clearOffset(element)
          observed.delete(element)
        }
      })
      children.forEach((element) => {
        if (!observed.has(element)) {
          observed.add(element)
          resizeObserver.observe(element, { box: 'border-box' })
        }
      })
      update()
    }
    const mutationObserver = new MutationObserver(refresh)
    mutationObserver.observe(field, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'hidden'],
    })
    refresh()
    return () => {
      mutationObserver.disconnect()
      resizeObserver.disconnect()
      clearLayout()
    }
  }, [enabled])

  return ref
}

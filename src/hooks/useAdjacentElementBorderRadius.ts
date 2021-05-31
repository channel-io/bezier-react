/* External dependencies */
import {
  useState,
  useEffect,
} from 'react'

function flattenBorderTopStyle(elem: HTMLElement) {
  elem.style.borderTopLeftRadius = '0px'
  elem.style.borderTopRightRadius = '0px'
}

function flattenBorderBottomStyle(elem: HTMLElement) {
  elem.style.borderBottomLeftRadius = '0px'
  elem.style.borderBottomRightRadius = '0px'
}

function resetBorderTopStyle(elem: HTMLElement) {
  elem.style.borderTopLeftRadius = ''
  elem.style.borderTopRightRadius = ''
}

function resetBorderBottmStyle(elem: HTMLElement) {
  elem.style.borderBottomLeftRadius = ''
  elem.style.borderBottomRightRadius = ''
}

function useAdjacentElementBorderRadius<ElementType extends HTMLElement>(
  element: ElementType | null,
  filterAdjacentElementFunc: (element: ElementType) => boolean,
  isFilteredElement?: boolean,
) {
  const [nextSibling, setNextSibling] = useState<ElementType | null>(null)
  const [previousSibling, setPreviousSibling] = useState<ElementType | null>(null)

  // eslint-disable-next-line prefer-arrow-callback
  useEffect(function updateAdjacentElement() {
    if (!element) { return }

    function filterAdjacentElement(targetElement: ElementType | null) {
      if (!targetElement) { return null }
      return filterAdjacentElementFunc(targetElement) ? targetElement : null
    }

    setNextSibling(filterAdjacentElement(element.nextSibling as ElementType))
    setPreviousSibling(filterAdjacentElement(element.previousSibling as ElementType))
  }, [
    element,
    filterAdjacentElementFunc,
    isFilteredElement,
  ])

  // eslint-disable-next-line prefer-arrow-callback
  useEffect(function stylingElementBorderRadius() {
    if (!element) { return }

    if (isFilteredElement && nextSibling) {
      flattenBorderBottomStyle(element)
    } else {
      resetBorderBottmStyle(element)
    }

    if (isFilteredElement && previousSibling) {
      flattenBorderTopStyle(element)
    } else {
      resetBorderTopStyle(element)
    }
  }, [
    isFilteredElement,
    element,
    nextSibling,
    previousSibling,
  ])

  // eslint-disable-next-line prefer-arrow-callback
  useEffect(function stylingNextSiblingBorderRadius() {
    if (!nextSibling) { return }

    if (isFilteredElement) {
      flattenBorderTopStyle(nextSibling)
    } else {
      resetBorderTopStyle(nextSibling)
    }
  }, [
    isFilteredElement,
    nextSibling,
  ])

  // eslint-disable-next-line prefer-arrow-callback
  useEffect(function stylingPrevSiblingBorderRadius() {
    if (!previousSibling) { return }

    if (isFilteredElement) {
      flattenBorderBottomStyle(previousSibling)
    } else {
      resetBorderBottmStyle(previousSibling)
    }
  }, [
    isFilteredElement,
    previousSibling,
  ])
}

export default useAdjacentElementBorderRadius

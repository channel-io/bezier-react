/* External dependencies */
import {
  useState,
  useEffect,
} from 'react'

function flattenBorderTopRadiusStyle(elem: HTMLElement) {
  elem.style.borderTopLeftRadius = '0px'
  elem.style.borderTopRightRadius = '0px'
}

function flattenBorderBottomRadiusStyle(elem: HTMLElement) {
  elem.style.borderBottomLeftRadius = '0px'
  elem.style.borderBottomRightRadius = '0px'
}

function resetBorderTopRadiusStyle(elem: HTMLElement) {
  elem.style.borderTopLeftRadius = ''
  elem.style.borderTopRightRadius = ''
}

function resetBorderBottomRadiusStyle(elem: HTMLElement) {
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
  useEffect(function styleElementBorderRadius() {
    if (!element) { return }

    if (isFilteredElement && nextSibling) {
      flattenBorderBottomRadiusStyle(element)
    } else {
      resetBorderBottomRadiusStyle(element)
    }

    if (isFilteredElement && previousSibling) {
      flattenBorderTopRadiusStyle(element)
    } else {
      resetBorderTopRadiusStyle(element)
    }
  }, [
    isFilteredElement,
    element,
    nextSibling,
    previousSibling,
  ])

  // eslint-disable-next-line prefer-arrow-callback
  useEffect(function styleNextSiblingBorderRadius() {
    if (!nextSibling) { return }

    if (isFilteredElement) {
      flattenBorderTopRadiusStyle(nextSibling)
    } else {
      resetBorderTopRadiusStyle(nextSibling)
    }
  }, [
    isFilteredElement,
    nextSibling,
  ])

  // eslint-disable-next-line prefer-arrow-callback
  useEffect(function stylePrevSiblingBorderRadius() {
    if (!previousSibling) { return }

    if (isFilteredElement) {
      flattenBorderBottomRadiusStyle(previousSibling)
    } else {
      resetBorderBottomRadiusStyle(previousSibling)
    }
  }, [
    isFilteredElement,
    previousSibling,
  ])
}

export default useAdjacentElementBorderRadius

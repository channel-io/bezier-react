/* External dependencies */
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
} from 'react'
import ReactDom from 'react-dom'

/* Internal dependencies */
import { document, getRootElement } from 'Utils/domUtils'
import * as Styled from './BaseModal.styled'
import type { BaseModalProps } from './BaseModal.types'

function BaseModal(
  {
    children,
    show,
    onHide,
    autoFocus = true,
    padded = true,
    backdropClassName = '',
    targetElement = getRootElement(),
    zIndex = 1e7,
    style,
    ...rests
  }: BaseModalProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const baseModalBodyRef = useRef<HTMLDivElement>(null)

  const onClickBackgroundOverlay = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    onHide()
  }, [onHide])

  const onCloseModalByEsc = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape': {
        e.stopPropagation()
        onHide()
        break
      }
    }
  }, [onHide])

  useEffect(function initCloseEvent() {
    if (show) {
      document.addEventListener('keydown', onCloseModalByEsc)
      return function cleanup() {
        document.removeEventListener('keydown', onCloseModalByEsc)
      }
    }
    return undefined
  }, [
    show,
    onCloseModalByEsc,
  ])

  useEffect(function initAutoFocus() {
    if (autoFocus && show && baseModalBodyRef.current) {
      baseModalBodyRef.current.focus()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show])

  if (!targetElement || !show) { return null }

  return (
    ReactDom.createPortal(
      <Styled.BaseModalWrapper
        ref={forwardedRef}
        data-testid="BaseModal"
        padded={padded}
        style={{
          zIndex,
        }}
      >
        <Styled.BaseModalBackgroundOverlay
          className={backdropClassName}
          data-testid="BaseModal__Background"
          onClick={onClickBackgroundOverlay}
        />
        <Styled.BaseModalChildrenScrollArea
          tabIndex={-1}
          data-testid="BaseModal__Children"
          {...rests}
          ref={baseModalBodyRef}
        >
          { children }
        </Styled.BaseModalChildrenScrollArea>
      </Styled.BaseModalWrapper>,
      targetElement,
    )
  )
}

export default forwardRef(BaseModal)

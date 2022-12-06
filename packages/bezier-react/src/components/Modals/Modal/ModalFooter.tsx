/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import { ModalFooterProps } from './Modal.types'
import * as Styled from './Modal.styled'

/**
 * `ModalFooter` is a simple wrapper of the footer of the modal content.
 * Usually, it contains the action buttons of the modal.
 */
export const ModalFooter = forwardRef(function ModalFooter({
  leftContent,
  rightContent,
  ...rest
}: ModalFooterProps, forwardedRef: React.Ref<HTMLElement>) {
  return (
    <Styled.Footer
      ref={forwardedRef}
      {...rest}
    >
      { leftContent && (
        <Styled.FooterLeftContent>
          { leftContent }
        </Styled.FooterLeftContent>
      ) }

      { rightContent && (
        <Styled.FooterRightContent>
          { rightContent }
        </Styled.FooterRightContent>
      ) }
    </Styled.Footer>
  )
})

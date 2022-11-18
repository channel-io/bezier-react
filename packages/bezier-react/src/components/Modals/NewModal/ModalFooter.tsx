/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import { ModalFooterProps } from './Modal.types'
import * as Styled from './Modal.styled'

export const ModalFooter = forwardRef(function ModalFooter({
  leftContent,
  rightContent,
  ...rest
}: ModalFooterProps, forwardedRef: React.Ref<HTMLDivElement>) {
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

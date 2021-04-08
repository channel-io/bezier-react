/* External dependencies */
import React, { forwardRef, Ref } from 'react'

/* Internal dependencies */
import { Icon, IconSize } from '../Icon'
import ToastProps, { Placement } from './Toast.types'
import { Container, IconWrapper, Content, Close } from './Toast.styled'

function Toast(
  {
    placement = Placement.BottomLeft,
    appearance = 'info',
    content = '',
    as,
    ...props
  }: ToastProps,
  forwardedRef: Ref<any>,
) {
  return (
    <Container
      placement={placement}
      ref={forwardedRef}
      {...props}
    >
      <IconWrapper
        appearance={appearance}
      >
        <Icon
          name="info-filled"
          size={IconSize.S}
        />
      </IconWrapper>
      <Content>
        { content }
      </Content>
      <Close>
        <Icon
          name="cancel"
          size={IconSize.XS}
        />
      </Close>
    </Container>
  )
}

export default forwardRef(Toast)

/* External dependencies */
import React, { forwardRef, Ref } from 'react'

/* Internal dependencies */
import { Icon, IconSize } from '../Icon'
import ToastProps, { Appearance } from './Toast.types'
import { Container, IconWrapper, Content, Close, ActionContent } from './Toast.styled'

const Toast = (
  {
    as,
    appearance = Appearance.Info,
    content = '',
    iconName = 'info-filled',
    actionItem,
    onMouseEnter,
    onMouseLeave,
    onDismiss,
    ...props
  }: ToastProps,
  forwardedRef: Ref<any>,
) => (
  <Container
    ref={forwardedRef}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    {...props}
  >
    <IconWrapper
      appearance={appearance}
    >
      <Icon
        name={iconName}
        size={IconSize.S}
      />
    </IconWrapper>
    <Content>
      { content }
      { ' ' }
      { actionItem && actionItem.content && (
        <ActionContent>
          { ` ${actionItem?.content}` }
        </ActionContent>
      ) }
    </Content>
    <Close onClick={onDismiss}>
      <Icon
        name="cancel"
        size={IconSize.XS}
      />
    </Close>
  </Container>
)

export default forwardRef(Toast)

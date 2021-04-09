/* External dependencies */
import React, { forwardRef, Ref } from 'react'

/* Internal dependencies */
import { Typography } from '../../foundation'
import { Icon, IconSize } from '../Icon'
import { Text } from '../Text'
import ToastProps, { ToastAppearance } from './Toast.types'
import {
  Element,
  IconWrapper,
  Close,
  ActionContent,
  NormalContent,
  Content,
} from './Toast.styled'

const ToastElement = (
  {
    as,
    appearance = ToastAppearance.Info,
    content = '',
    iconName = 'info-filled',
    actionContent,
    actionOnClick,
    onMouseEnter,
    onMouseLeave,
    onDismiss,
    ...props
  }: ToastProps,
  forwardedRef: Ref<any>,
) => (
  <Element
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
    <Content
      actionContent={actionContent}
      actionOnClick={actionOnClick}
    >
      <Text
        typo={Typography.Size14}
        style={{
          height: '18px',
        }}
      >
        <NormalContent>
          { content }
        </NormalContent>
        { ' ' }
        { actionContent && actionOnClick && (
          <ActionContent onClick={() => actionOnClick()}>
            { actionContent }
          </ActionContent>
        ) }
      </Text>
    </Content>
    <Close onClick={onDismiss}>
      <Icon
        name="cancel"
        size={IconSize.XS}
      />
    </Close>
  </Element>
)

export default forwardRef(ToastElement)

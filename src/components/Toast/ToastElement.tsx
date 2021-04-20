/* External dependencies */
import React, { Fragment, forwardRef, Ref, useMemo } from 'react'
import { v4 as uuid } from 'uuid'

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
    onClick,
    onDismiss,
    ...props
  }: ToastProps,
  forwardedRef: Ref<any>,
) => {
  const getNewLineComponent = useMemo(() => (
    content.split('\n').map((str, index) => {
      if (index === 0) {
        return (
          <Text key={uuid()} typo={Typography.Size14}>
            { str }
          </Text>
        )
      }

      return (
        <Fragment key={uuid()}>
          <br />
          <Text
            typo={Typography.Size14}
          >
            { str }
          </Text>
        </Fragment>
      )
    })
  ), [content])

  return (
    <Element
      ref={forwardedRef}
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
        onClick={onClick}
      >
        <Text
          typo={Typography.Size14}
          style={{
            height: '18px',
          }}
        >
          <NormalContent>
            { getNewLineComponent }
          </NormalContent>
          { ' ' }
          { actionContent && onClick && (
            <ActionContent onClick={() => onClick()}>
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
}

export default forwardRef(ToastElement)

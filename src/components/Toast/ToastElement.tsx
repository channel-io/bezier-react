/* External dependencies */
import React, { Fragment, forwardRef, Ref, useMemo } from 'react'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { Typography } from '../../foundation'
import { Icon, IconSize } from '../Icon'
import { Text } from '../Text'
import ToastProps, { ToastPreset } from './Toast.types'
import {
  Element,
  IconWrapper,
  Close,
  ActionContent,
  NormalContent,
  Content,
} from './Toast.styled'
import { getToastPreset } from './utils'

const ToastElement = (
  {
    as,
    preset = ToastPreset.Default,
    content = '',
    appearance,
    iconName,
    actionContent,
    onClick,
    onDismiss,
    ...props
  }: ToastProps,
  forwardedRef: Ref<any>,
) => {
  const newLineComponent = useMemo(() => (
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

  const {
    appearance: presetAppearance,
    iconName: presetIconName,
  } = useMemo(() => getToastPreset(preset), [preset])

  return (
    <Element
      ref={forwardedRef}
      {...props}
    >
      <IconWrapper
        appearance={appearance ?? presetAppearance}
      >
        <Icon
          name={iconName ?? presetIconName}
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
            { newLineComponent }
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

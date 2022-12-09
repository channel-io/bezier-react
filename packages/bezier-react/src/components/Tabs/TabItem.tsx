/* External dependencies */
import React, {
  forwardRef,
  useContext,
} from 'react'
import * as Tabs from '@radix-ui/react-tabs'

/* Internal dependencies */
import {
  ButtonColorVariant,
  ButtonSize,
  ButtonStyleVariant,
} from 'Components/Button'
import {
  TabItemProps,
  TabSize,
} from './Tabs.types'
import TabListContext from './TabListContext'
import * as Styled from './TabItem.styled'

const getButtonSizeBy = (height: TabSize) => {
  switch (height) {
    case TabSize.L:
      return ButtonSize.L
    case TabSize.Normal:
      return ButtonSize.M
    default:
    case TabSize.XS:
      return ButtonSize.S
  }
}

export const TabItem = forwardRef(function TabItem({
  disabled,
  value,
  children,
  ...rest
}: TabItemProps, forwardedRef: React.Ref<HTMLButtonElement>) {
  const { size } = useContext(TabListContext)

  if (typeof children !== 'string') {
    return null
  }

  return (
    <Tabs.TabsTrigger
      disabled={disabled}
      value={value}
      asChild
    >
      <Styled.Button
        disabled={disabled}
        text={children}
        size={getButtonSizeBy(size)}
        colorVariant={ButtonColorVariant.MonochromeLight}
        styleVariant={ButtonStyleVariant.Tertiary}
        ref={forwardedRef}
        {...rest}
      />
    </Tabs.TabsTrigger>
  )
})

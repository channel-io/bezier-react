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

const getButtonSizeBy = (size: TabSize) => {
  switch (size) {
    case TabSize.L:
      return ButtonSize.L
    case TabSize.M:
      return ButtonSize.M
    default:
    case TabSize.S:
      return ButtonSize.S
  }
}

/**
 * `TabItem` is a button that activates its associated content.
 */
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

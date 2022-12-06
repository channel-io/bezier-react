/* External dependencies */
import { get } from 'lodash-es'

/* Internal dependencies */
import React, {
  forwardRef,
  useContext,
} from 'react'
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

const TAB_ITEM_DISPLAY_NAME = 'TabItem'
export function isTabItem(element: any): element is React.ReactElement<TabItemProps> {
  return React.isValidElement(element) &&
    get(element, 'type.displayName') === TAB_ITEM_DISPLAY_NAME
}

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

function _TabItem({
  disabled,
  children,
  ...rest
}: TabItemProps, forwardedRef: React.Ref<HTMLDivElement>) {
  const { height } = useContext(TabListContext)

  if (typeof children !== 'string') {
    return null
  }

  return (
    <Styled.Button
      disabled={disabled}
      text={children}
      size={getButtonSizeBy(height)}
      colorVariant={ButtonColorVariant.MonochromeLight}
      styleVariant={ButtonStyleVariant.Tertiary}
      ref={forwardedRef}
      {...rest}
    />
  )
}

const TabItem = forwardRef(_TabItem)
TabItem.displayName = TAB_ITEM_DISPLAY_NAME

export default TabItem

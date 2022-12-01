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
  TabsSize,
} from './Tabs.types'
import TabsListContext from './TabsListContext'
import * as Styled from './TabItem.styled'

const TAB_ITEM_DISPLAY_NAME = 'TabItem'
export function isTabItem(element: any): element is React.ReactElement<TabItemProps> {
  return React.isValidElement(element) &&
    get(element, 'type.displayName') === TAB_ITEM_DISPLAY_NAME
}

export const getButtonSizeBy = (height: TabsSize) => {
  switch (height) {
    case TabsSize.L:
      return ButtonSize.L
    case TabsSize.Normal:
      return ButtonSize.M
    default:
    case TabsSize.XS:
      return ButtonSize.S
  }
}

function _TabItem({
  disabled,
  children,
  ...rest
}: TabItemProps, forwardedRef: React.Ref<HTMLDivElement>) {
  const { height } = useContext(TabsListContext)

  if (typeof children !== 'string') {
    return null
  }

  return (
    <Styled.Wrapper
      ref={forwardedRef}
      height={height}
      {...rest}
    >
      <Styled.Button
        disabled={disabled}
        text={children}
        size={getButtonSizeBy(height)}
        colorVariant={ButtonColorVariant.MonochromeLight}
        styleVariant={ButtonStyleVariant.Tertiary}
      />
    </Styled.Wrapper>
  )
}

const TabItem = forwardRef(_TabItem)
TabItem.displayName = TAB_ITEM_DISPLAY_NAME

export default TabItem

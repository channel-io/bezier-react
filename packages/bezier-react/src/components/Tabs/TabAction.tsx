/* External dependencies */
import React, {
  forwardRef,
  useContext,
} from 'react'

/* Internal dependencies */
import { Typography } from '~/src/foundation'

import { isNil } from '~/src/utils/typeUtils'

import {
  IconSize,
  OpenInNewIcon,
} from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import TabListContext from './TabListContext'
import {
  type TabActionElement,
  type TabActionProps,
  TabSize,
} from './Tabs.types'

import * as Styled from './TabAction.styled'

const getTypoBy = (size: TabSize) => {
  switch (size) {
    case TabSize.L:
      return Typography.Size14
    case TabSize.M:
    case TabSize.S:
    default:
      return Typography.Size13
  }
}

const getIconSizeBy = (size: TabSize) => {
  switch (size) {
    case TabSize.L:
      return IconSize.S
    default:
      return IconSize.XS
  }
}

/**
 * `TabAction` is a button for more action to open a new link or navigate to a different url.
 * If it has `href` props, it should act as a link.
 */
export const TabAction = forwardRef(function TabAction<Link extends string | undefined>({
  href,
  children,
  onClick,
  ...rest
}: TabActionProps<Link>, forwardedRef: React.Ref<TabActionElement<Link>>,
) {
  const { size } = useContext(TabListContext)

  return (
    isNil(href) ? (
      <Styled.ToolbarButton
        size={size}
        onClick={onClick}
        ref={forwardedRef}
        {...rest}
      >
        <Text
          bold
          typo={getTypoBy(size)}
        >
          { children }
        </Text>
      </Styled.ToolbarButton>
    ) : (
      <Styled.ToolbarLink
        size={size}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        ref={forwardedRef}
        {...rest}
      >
        <Text
          bold
          typo={getTypoBy(size)}
        >
          { children }
        </Text>
        <Styled.LinkIcon
          source={OpenInNewIcon}
          size={getIconSizeBy(size)}
        />
      </Styled.ToolbarLink>
    )
  )
})

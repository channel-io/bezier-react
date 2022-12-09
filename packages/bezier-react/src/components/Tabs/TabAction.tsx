/* External dependencies */
import React, {
  useCallback,
  ReactNode,
  ReactElement,
  useContext,
  forwardRef,
} from 'react'
import {
  isNil,
  noop,
  get,
} from 'lodash-es'

/* Internal dependencies */
import { Typography } from 'Foundation'
import {
  IconSize,
  OpenInNewIcon,
} from 'Components/Icon'
import { Text } from 'Components/Text'
import TabListContext from './TabListContext'
import {
  TabActionProps,
  TabSize,
} from './Tabs.types'
import * as Styled from './TabAction.styled'

const getTypoBy = (size: TabSize) => {
  switch (size) {
    case TabSize.L:
      return Typography.Size14
    case TabSize.Normal:
    case TabSize.XS:
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

const TAB_ACTION_DISPLAY_NAME = 'TabAction'

export const isTabAction = (element: ReactNode): element is ReactElement<TabActionProps> =>
  React.isValidElement(element) && get(element, 'type.displayName') === TAB_ACTION_DISPLAY_NAME

function _TabAction({
  href,
  children,
  onClick = noop,
  ...rest
}: TabActionProps, forwardedRef: React.Ref<HTMLDivElement>,
) {
  const { size } = useContext(TabListContext)

  const BackgroundWithProps = useCallback(({
    children: _children,
    ..._rest
  }: {
    children: React.ReactNode
    onClick: TabActionProps['onClick']
  }) => {
    if (isNil(href)) {
      return (
        <Styled.Background
          size={size}
          {..._rest}
        >
          { _children }
        </Styled.Background>
      )
    }

    return (
      <Styled.Background
        size={size}
        href={href}
        as="a"
        target="_blank"
        rel="noopener noreferrer"
        {..._rest}
      >
        { _children }
      </Styled.Background>
    )
  }, [
    size,
    href,
  ])

  return (
    <Styled.Wrapper ref={forwardedRef}>
      <BackgroundWithProps
        onClick={onClick}
        {...rest}
      >
        <Text
          bold
          typo={getTypoBy(size)}
        >
          { children }
        </Text>
        { !isNil(href) && (
          <Styled.LinkIcon
            source={OpenInNewIcon}
            size={getIconSizeBy(size)}
          />
        ) }
      </BackgroundWithProps>
    </Styled.Wrapper>
  )
}

const TabAction = forwardRef(_TabAction)
TabAction.displayName = TAB_ACTION_DISPLAY_NAME

export default TabAction

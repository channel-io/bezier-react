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
  TabActionOptions,
  TabSize,
} from './Tabs.types'
import * as Styled from './TabAction.styled'

const getTypo = (height: TabSize) => {
  switch (height) {
    case TabSize.L:
      return Typography.Size14
    case TabSize.Normal:
    case TabSize.XS:
    default:
      return Typography.Size13
  }
}

const getIconSize = (height: TabSize) => {
  switch (height) {
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
}: TabActionProps, forwardedRef: React.Ref<HTMLDivElement>,
) {
  const { height } = useContext(TabListContext)

  const BackgroundWithProps = useCallback(({
    children: _children,
    ...rest
  }: {
    children: React.ReactNode
    onClick: TabActionOptions['onClick']
  }) => {
    if (isNil(href)) {
      return (
        <Styled.Background
          height={height}
          {...rest}
        >
          { _children }
        </Styled.Background>
      )
    }

    return (
      <Styled.Background
        height={height}
        href={href}
        as="a"
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        { _children }
      </Styled.Background>
    )
  }, [
    height,
    href,
  ])

  return (
    <Styled.Wrapper ref={forwardedRef}>
      <BackgroundWithProps onClick={onClick}>
        <Text
          bold
          typo={getTypo(height)}
        >
          { children }
        </Text>
        { !isNil(href) && (
          <Styled.LinkIcon
            source={OpenInNewIcon}
            size={getIconSize(height)}
          />
        ) }
      </BackgroundWithProps>
    </Styled.Wrapper>
  )
}

const TabAction = forwardRef(_TabAction)
TabAction.displayName = TAB_ACTION_DISPLAY_NAME

export default TabAction

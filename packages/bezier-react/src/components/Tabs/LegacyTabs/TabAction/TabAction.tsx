/* External dependencies */
import React, { Ref, forwardRef, useMemo, useCallback } from 'react'
import { get, isNil, noop } from 'lodash-es'

/* Internal dependencies */
import { Typography } from '~/src/foundation'
import { Text } from '~/src/components/Text'
import { IconSize, OpenInNewIcon } from '~/src/components/Icon'
import TabsSize from '~/src/components/Tabs/LegacyTabs/TabsSize'
import TabActionProps from './TabAction.types'
import { Wrapper, Background, LinkIcon } from './TabAction.styled'

// TODO: 테스트 코드 작성
const TAB_ACTIONS_TEST_ID = 'bezier-react-tab-action'
const TAB_ACTIONS_COMPONENT_NAME = 'TabAction'

export function isTabAction(element: any): element is React.ReactElement<TabActionProps> {
  return React.isValidElement(element) &&
    get(element, 'type.displayName') === TAB_ACTIONS_COMPONENT_NAME
}

function TabActionComponent(
  {
    testId = TAB_ACTIONS_TEST_ID,
    disabled = false,
    href,
    height = TabsSize.Normal,
    onClick = noop,
    children,
  }: TabActionProps,
  forwardedRef: Ref<HTMLDivElement>,
) {
  const backgroundSizeProp = useMemo(() => {
    if (height >= TabsSize.L) {
      return {
        padding: 14,
        borderRadius: 12,
      }
    }
    if (height > TabsSize.XS) {
      return {
        padding: 7,
        borderRadius: 8,
      }
    }
    return {
      padding: 7,
      borderRadius: 6,
    }
  }, [height])

  const textTypo = useMemo(() => {
    if (height >= TabsSize.L) {
      return Typography.Size14
    }
    return Typography.Size13
  }, [height])

  const iconSize = useMemo(() => {
    if (height >= TabsSize.L) {
      return IconSize.S
    }
    return IconSize.XS
  }, [height])

  const BackgroundWithProps = useCallback(({
    children: _children,
    ...otherProps
  }: {
    children: React.ReactNode
    onClick: (e: any) => void
  }) => {
    if (isNil(href)) {
      return (
        <Background
          {...otherProps}
        >
          { _children }
        </Background>
      )
    }

    return (
      <Background
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...otherProps}
      >
        { _children }
      </Background>
    )
  }, [href])

  return (
    <Wrapper
      ref={forwardedRef}
      data-testid={testId}
      data-disabled={disabled}
      height={height}
    >
      <BackgroundWithProps
        onClick={onClick}
        {...backgroundSizeProp}
      >
        <Text bold typo={textTypo}>
          { children }
        </Text>
        { !isNil(href) && (
          <LinkIcon
            source={OpenInNewIcon}
            size={iconSize}
          />
        ) }
      </BackgroundWithProps>
    </Wrapper>
  )
}

const TabAction = forwardRef(TabActionComponent)
TabAction.displayName = TAB_ACTIONS_COMPONENT_NAME

export default TabAction

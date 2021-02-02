/* External dependencies */
import React, {
  Ref,
  forwardRef,
  useMemo,
  useCallback,
  useState,
} from 'react'
import { get, noop } from 'lodash-es'

/* Internal dependencies */
import { Text } from '../Text'
import { mergeClassNames } from '../../utils/stringUtils'
import TabItemProps from './TabItem.types'
import { Wrapper, Background } from './TabItem.styled'

export const TAB_ITEM_COMPONENT_NAME = 'TabItem'
export const TAB_ITEM_TEST_ID = 'ch-design-system-tab-item'

export function isTabItem(element: any): element is React.ReactElement<TabItemProps> {
  return React.isValidElement(element) &&
    get(element, 'type.displayName') === TAB_ITEM_COMPONENT_NAME
}

function TabItemComponent({
  as,
  testId = TAB_ITEM_TEST_ID,
  disabled = false,
  height = 45,
  withIndicator = true,
  /* ActivatableElement props */
  activeClassName,
  active,
  /* OptionItem props */
  optionKey,
  /* HTMLAttribute props */
  className,
  children,
  onClick = noop,
  ...otherProps
}: TabItemProps, forwardedRef: Ref<any>) {
  const [isHovered, setIsHovered] = useState(false)

  const clazzName = useMemo(() => (
    mergeClassNames(className, ((active && activeClassName) || undefined))
  ), [
    className,
    activeClassName,
    active,
  ])

  const handleClick = useCallback((e) => {
    if (!active && !disabled) {
      onClick(e)
    }
  }, [active, disabled, onClick])

  const handleMouseEnter = useCallback(() => setIsHovered(true), [])

  const handleMouseLeave = useCallback(() => setIsHovered(false), [])

  return (
    <Wrapper
      ref={forwardedRef}
      as={as}
      className={clazzName}
      height={height}
      active={active}
      disabled={disabled}
      withIndicator={withIndicator}
      data-option-key={optionKey}
      data-testid={testId}
      data-disabled={disabled}
      data-active={active || undefined}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...otherProps}
    >
      <Background
        isHovered={isHovered}
        disabled={disabled}
      >
        <Text bold>
          { children }
        </Text>
      </Background>
    </Wrapper>
  )
}

const TabItem = forwardRef(TabItemComponent)
TabItem.displayName = TAB_ITEM_COMPONENT_NAME

export default TabItem

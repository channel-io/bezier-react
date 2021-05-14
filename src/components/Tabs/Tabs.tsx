/* External dependencies */
import React, {
  Ref,
  forwardRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react'
import { v4 as uuid } from 'uuid'
import {
  noop,
  isNumber,
  isEmpty,
  get,
  identity,
} from 'lodash-es'

/* Internal dependencies */
import { isTabItem } from '../TabItem'
import { isTabAction } from '../TabAction'
import TabsProps from './Tabs.types'
import { Wrapper, TabItemWrapper, TabActions } from './Tabs.styled'

export const TABS_TEST_ID = 'ch-bezier-react-tabs'

function Tabs({
  as,
  testId = TABS_TEST_ID,
  disabled = false,
  height,
  optionsWrapperClassName,
  withIndicator,
  indicatorThickness,
  /* OptionItemHost props */
  selectedOptionIndex = 0,
  onChangeOption = noop,
  /* HTMLAttribute props */
  children,
  ...otherProps
}: TabsProps, forwardedRef: Ref<any>) {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(selectedOptionIndex)

  useEffect(() => {
    if (isNumber(selectedOptionIndex)) {
      setCurrentTabIndex(selectedOptionIndex)
    }
  }, [selectedOptionIndex])

  const handleClickTab = useCallback((
    tabIndex: number,
    optionKey: string,
    allowActive: boolean = true,
  ) => {
    if (allowActive) { setCurrentTabIndex(tabIndex) }
    onChangeOption(optionKey, tabIndex)
  }, [onChangeOption])

  const Content = useMemo(() => (
    React.Children.map(children, (element, index: number) => {
      if (isTabItem(element)) {
        return React.cloneElement(element, {
          active: get(element.props, 'allowActive', true) && (currentTabIndex === index),
          height,
          disabled,
          withIndicator,
          indicatorThickness,
          onClick: (event: React.MouseEvent<HTMLElement>) => {
            event.persist()
            handleClickTab(index, element.props.optionKey, get(element.props, 'allowActive', true))
            if (element.props.onClick) { element.props.onClick(event) }
          },
        })
      }
      if (isTabAction(element)) { return null }
      return element
    })
  ), [
    disabled,
    height,
    withIndicator,
    indicatorThickness,
    children,
    currentTabIndex,
    handleClickTab,
  ])

  const Actions = useMemo(() => {
    const actions = React.Children.map(children, (child) => {
      if (isTabAction(child)) {
        return React.cloneElement(child, { key: child.key || uuid(), height, disabled })
      }
      return null
    })?.filter(identity)

    if (isEmpty(actions)) {
      return null
    }

    return (
      <TabActions>
        { actions }
      </TabActions>
    )
  }, [height, disabled, children])

  return (
    <Wrapper
      ref={forwardedRef}
      data-testid={testId}
      data-disabled={disabled}
      data-active-index={currentTabIndex}
      {...otherProps}
    >
      <TabItemWrapper className={optionsWrapperClassName}>
        { Content }
      </TabItemWrapper>

      { Actions }
    </Wrapper>
  )
}

export default forwardRef(Tabs)

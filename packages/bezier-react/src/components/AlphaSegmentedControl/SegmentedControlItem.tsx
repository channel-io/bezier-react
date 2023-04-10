import React, {
  forwardRef,
  useCallback,
} from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import useMergeRefs from '~/src/hooks/useMergeRefs'

import {
  useSegmentedControlContext,
  useSegmentedControlItemListContext,
} from './SegmentedControl'
import { type SegmentedControlItemProps } from './SegmentedControl.types'

import * as Styled from './SegmentedControl.styled'

// TODO: type declaration
const Item = forwardRef(function Item({
  children,
  ...rest
}, forwardedRef) {
  const { setSelectedElement } = useSegmentedControlItemListContext('SegmentedControlItem')

  const checked = rest?.['data-state'] === 'checked' || rest?.['data-state'] === 'active'

  const ref = useMergeRefs(
    forwardedRef,
    useCallback((node: HTMLButtonElement | null) => {
      if (checked) {
        setSelectedElement(node)
      }
    }, [
      checked,
      setSelectedElement,
    ]),
  )

  return (
    <Styled.Item
      {...rest}
      ref={ref}
    >
      <Styled.ItemLabel>
        { children }
      </Styled.ItemLabel>
    </Styled.Item>
  )
})

function SegmentedControlItemImpl<Value extends string>({
  value,
  children,
  className: classNameProp,
  ...rest
}: SegmentedControlItemProps<Value>, forwardedRef: React.Ref<HTMLButtonElement>) {
  const { type } = useSegmentedControlContext('SegmentedControlItem')

  const SegmentedControlItem = type === 'radiogroup'
    ? RadioGroupPrimitive.Item
    : TabsPrimitive.Trigger

  return (
    <SegmentedControlItem
      asChild
      ref={forwardedRef}
      value={value}
      {...rest}
    >
      <Item>
        { children }
      </Item>
    </SegmentedControlItem>
  )
}

export const SegmentedControlItem = forwardRef(SegmentedControlItemImpl) as <Value extends string>(
  props: SegmentedControlItemProps<Value> & { ref?: React.ForwardedRef<HTMLButtonElement> }
) => ReturnType<typeof SegmentedControlItemImpl<Value>>

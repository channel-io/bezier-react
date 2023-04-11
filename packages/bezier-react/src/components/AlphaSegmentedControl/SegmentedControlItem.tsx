import React, {
  forwardRef,
  useCallback,
} from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import useMergeRefs from '~/src/hooks/useMergeRefs'
import { ariaAttr } from '~/src/utils/domUtils'

import {
  type SegmentedControlItemProps,
  type SegmentedControlType,
} from './SegmentedControl.types'
import {
  useSegmentedControlContext,
  useSegmentedControlItemListContext,
} from './SegmentedControlContext'

import * as Styled from './SegmentedControl.styled'

/**
 * NOTE: (@ed) A property injected at runtime by the radix-ui lib.
 */
type ItemProps<Type extends SegmentedControlType> = (
  Type extends 'radiogroup'
    ? { 'data-state'?: 'unchecked' | 'checked' }
    : { 'data-state'?: 'inactive' | 'active' }
) & React.HTMLAttributes<HTMLButtonElement>

const Item = forwardRef<HTMLButtonElement, ItemProps<SegmentedControlType>>(function Item({
  children,
  ...rest
}, forwardedRef) {
  const { type } = useSegmentedControlContext('SegmentedControlItem')
  const { setSelectedElement } = useSegmentedControlItemListContext('SegmentedControlItem')

  const checked = type === 'radiogroup'
    ? (rest as ItemProps<'radiogroup'>)?.['data-state'] === 'checked'
    : (rest as ItemProps<'tabs'>)?.['data-state'] === 'active'

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
      data-checked={ariaAttr(checked)}
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

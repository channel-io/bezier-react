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
  type SegmentedControlProps,
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
)
& React.HTMLAttributes<HTMLButtonElement>
& Partial<SegmentedControlItemProps<Type>>
& Required<Pick<SegmentedControlProps<Type, string>, 'type'>>

const Item = forwardRef<HTMLButtonElement, ItemProps<SegmentedControlType>>(function Item({
  children,
  type,
  leftContent,
  rightContent,
  ...rest
}, forwardedRef) {
  const { setSelectedElement } = useSegmentedControlItemListContext('SegmentedControlItem')

  const checked = type === 'radiogroup'
    ? (rest as ItemProps<typeof type>)?.['data-state'] === 'checked'
    : (rest as ItemProps<typeof type>)?.['data-state'] === 'active'

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
      <Styled.ItemContainer>
        { leftContent }
        <Styled.ItemLabel>
          { children }
        </Styled.ItemLabel>
        { rightContent }
      </Styled.ItemContainer>
    </Styled.Item>
  )
})

function SegmentedControlItemImpl<Value extends string>({
  children,
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
      {...rest}
    >
      <Item type={type}>
        { children }
      </Item>
    </SegmentedControlItem>
  )
}

/**
 * `SegmentedControlItem` component is each item in `SegmentedControl`.
 *
 * If the type of `SegmentedControl` is `radiogroup`, this component acts as a radio item.
 * In this case, it must be used as a child of `SegmentedControl`.
 *
 * If the type of `SegmentedControl` is `tabs`, this component acts as a tab item.
 * In this case, it must be used as a child of `SegmentedControlTabList`.
 */
export const SegmentedControlItem = forwardRef(SegmentedControlItemImpl) as <Value extends string>(
  props: SegmentedControlItemProps<Value> & { ref?: React.ForwardedRef<HTMLButtonElement> }
) => JSX.Element

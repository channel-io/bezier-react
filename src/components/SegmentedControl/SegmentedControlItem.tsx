/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { SegmentedControlItemProps } from './SegmentedControl.types'
import { OptionItemWrapper } from './SegmentedControl.styled'

function SegmentedControlItem({
  as,
  disabled = false,
  active = false,
  /* HTMLAttribute props */
  children,
}: SegmentedControlItemProps) {
  return (
    <OptionItemWrapper
      as={as}
      disabled={disabled}
      active={active}
    >
      { children }
    </OptionItemWrapper>
  )
}

export default SegmentedControlItem

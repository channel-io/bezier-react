/* External dependencies */
import React, { Children, forwardRef } from 'react'

/* Internal dependencies */
import { HStack, StackItem } from 'Components/Stack'
import ButtonGroupProps from './ButtonGroup.types'

function ButtonGroup(
  {
    children,
    hasGap = true,
    ...props
  }: ButtonGroupProps,
  forwardedRef: React.Ref<HTMLElement>,
) {
  const spacing = hasGap ? 6 : 0

  return (
    <HStack
      spacing={spacing}
      ref={forwardedRef}
      {...props}
    >
      {
        Children.map(
          children,
          (element) => (
            <StackItem>
              { element }
            </StackItem>
          ),
        )
      }
    </HStack>
  )
}

export default forwardRef(ButtonGroup)


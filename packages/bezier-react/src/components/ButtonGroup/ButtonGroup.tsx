/* External dependencies */
import React, { Children, forwardRef } from 'react'

/* Internal dependencies */
import { HStack, StackItem } from 'Components/Stack'
import ButtonGroupProps from './ButtonGroup.types'

function ButtonGroup(
  {
    children,
    justify = 'center',
    withoutSpacing = false,
    ...props
  }: ButtonGroupProps,
  forwardedRef: React.Ref<HTMLElement>,
) {
  const spacing = withoutSpacing ? 0 : 6

  return (
    <HStack
      spacing={spacing}
      justify={justify}
      ref={forwardedRef}
      role="group"
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


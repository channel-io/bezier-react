/* External dependencies */
import React, { Children, forwardRef } from 'react'

/* Internal dependencies */
import { HStack, StackItem } from 'Components/Stack'
import ButtonGroupProps from './ButtonGroup.types'

function ButtonGroup(
  {
    testId = 'bezier-react-button-group',
    hasGap = true,
    children,
  }: ButtonGroupProps,
  forwardedRef: React.Ref<HTMLElement>,
) {
  const SPACING = hasGap ? 6 : 0

  return (
    <HStack
      spacing={SPACING}
      ref={forwardedRef}
      testId={testId}
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


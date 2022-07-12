/* External dependencies */
import React, { Children, forwardRef } from 'react'

/* Internal dependencies */
import { HStack, StackItem } from 'Components/Stack'
import { isButton } from 'Components/Button/Button'
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
          // eslint-disable-next-line consistent-return
          (element) => {
            if (isButton(element)) {
              return (
                <StackItem>
                  { element }
                </StackItem>
              )
            }

            // eslint-disable-next-line no-console
            console.warn('There is a child of a ButtonGroup that is not a Button component')
          },
        )
      }
    </HStack>
  )
}

export default forwardRef(ButtonGroup)


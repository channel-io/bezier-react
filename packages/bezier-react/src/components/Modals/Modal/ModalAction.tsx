/* External dependencies */
import React, {
  forwardRef,
} from 'react'

/* Internal dependencies */
import type { ModalActionProps } from './Modal.types'
import * as Styled from './Modal.styled'

const ModalAction = (
  {
    className,
    leftContent,
    rightContent,
    ...rests
  }: ModalActionProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) => {
  if (!leftContent && !rightContent) {
    return null
  }

  return (
    <Styled.Action
      data-testid="Modal__Action"
      {...rests}
      ref={forwardedRef}
      className={className}
    >
      <div>
        { leftContent }
      </div>
      <div>
        { rightContent }
      </div>
    </Styled.Action>
  )
}

export default forwardRef(ModalAction)

/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import { ClientWrapper } from './Client.styled'
import ClientProps from './Client.types'

export const CLIENT_TEST_ID = 'ch-bezier-react-client'

function Client(
  {
    style,
    className,
    testId = CLIENT_TEST_ID,
    children,
    ...otherProps
  }: ClientProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  return (
    <ClientWrapper
      ref={forwardedRef}
      style={style}
      className={className}
      testId={testId}
      {...otherProps}
    >
      { children }
    </ClientWrapper>
  )
}

export default forwardRef(Client)

/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import ContentAreaProps from './ContentArea.types'
import { ContentAreaWrapper } from './ContentArea.styled'

export const CONTENT_AREA_TEST_ID = 'ch-design-system-content-area'

function ContentArea(
  {
    style,
    className,
    testId = CONTENT_AREA_TEST_ID,
    children,
    ...otherProps
  }: ContentAreaProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  return (
    <ContentAreaWrapper
      style={style}
      className={className}
      data-testid={testId}
      ref={forwardedRef}
      {...otherProps}
    >
      { children }
    </ContentAreaWrapper>
  )
}

export default forwardRef(ContentArea)

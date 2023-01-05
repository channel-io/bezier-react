/* External dependencies */
import React, { forwardRef, memo, Ref } from 'react'

/* Internal dependencies */
import { ValueItemProps } from './ValueItem.types'
import * as Styled from './ValueItem.styled'
import { TEST_ID_MAP } from '~/src/components/KeyValueListItem/KeyValueListItem.const'

function ValueItem(
  {
    testId = TEST_ID_MAP.VALUE_ITEM,
    interpolation,
    children,
    ...props
  }: ValueItemProps,
  forwardedRef: Ref<HTMLDivElement>,
) {
  return (
    <Styled.ValueWrapper
      data-testid={testId}
      {...props}
      ref={forwardedRef}
      interpolation={interpolation}
    >
      { children }
    </Styled.ValueWrapper>
  )
}

export default memo(forwardRef(ValueItem))

import React, {
  forwardRef,
  memo,
  type Ref,
} from 'react'

import { TEST_ID_MAP } from '~/src/components/KeyValueListItem/KeyValueListItem.const'

import { type ValueItemProps } from './ValueItem.types'

import * as Styled from './ValueItem.styled'

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

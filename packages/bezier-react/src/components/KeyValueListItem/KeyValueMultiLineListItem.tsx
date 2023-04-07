import React, {
  type Ref,
  forwardRef,
} from 'react'

import { TEST_ID_MAP } from './KeyValueListItem.const'
import { type KeyValueListItemProps } from './KeyValueListItem.types'
import {
  ItemAction,
  KeyItem,
  ValueItem,
} from './common'

import * as Styled from './KeyValueMultiLineListItem.styled'

function KeyValueMultiLineListItem(
  {
    className,
    interpolation,
    valueWrapperInterpolation,
    keyWrapperInterpolation,
    keyIcon,
    keyContent,
    actions,
    testId = TEST_ID_MAP.MULTILINE_ROOT,
    children,
    onClickKey,
    onClickValue,
    ...props
  }: KeyValueListItemProps,
  forwardedRef: Ref<HTMLDivElement>,
) {
  return (
    <Styled.Wrapper
      data-testid={testId}
      {...props}
      ref={forwardedRef}
      interpolation={interpolation}
      className={className}
    >
      <Styled.KeyItemContainer onClick={onClickKey}>
        <KeyItem
          keyIcon={keyIcon}
          interpolation={keyWrapperInterpolation}
        >
          { keyContent }
        </KeyItem>
        <ItemAction actions={actions} />
      </Styled.KeyItemContainer>
      <Styled.ValueItemContainer onClick={onClickValue}>
        <ValueItem interpolation={valueWrapperInterpolation} multiline>
          { children }
        </ValueItem>
      </Styled.ValueItemContainer>
    </Styled.Wrapper>
  )
}

export default forwardRef(KeyValueMultiLineListItem)

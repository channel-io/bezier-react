/* External dependencies */
import React, { forwardRef, Ref } from 'react'

/* Internal dependencies */
import { ValueItem, ItemAction, KeyItem } from './common'
import { TEST_ID_MAP } from './KeyValueListItem.const'
import { KeyValueListItemProps } from './KeyValueListItem.types'
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

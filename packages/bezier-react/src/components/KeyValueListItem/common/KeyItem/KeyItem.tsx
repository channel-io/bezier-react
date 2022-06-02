/* External dependencies */
import React, { forwardRef, memo, Ref, useMemo } from 'react'
import { isString } from 'lodash-es'
import { isIconName } from '@channel.io/bezier-react-icons'

/* Internal dependencies */
import { Typography } from 'Foundation'
import { Icon, IconSize } from 'Components/Icon'
import { TEST_ID_MAP } from 'Components/KeyValueListItem/KeyValueListItem.const'
import { KeyItemProps } from './KeyItem.types'
import * as Styled from './KeyItem.styled'

function KeyItem(
  {
    className,
    interpolation,
    keyIcon,
    testId = TEST_ID_MAP.KEY_ITEM,
    children,
    ...props
  }: KeyItemProps,
  forwardedRef: Ref<HTMLDivElement>,
) {
  const KeyIcon = useMemo(() => {
    if (isIconName(keyIcon)) {
      return (
        <Icon
          name={keyIcon}
          size={IconSize.S}
          color="txt-black-dark"
        />
      )
    }
    return keyIcon
  }, [keyIcon])

  const KeyText = useMemo(() => {
    if (isString(children)) {
      return (
        <Styled.KeyText bold typo={Typography.Size12}>
          { children }
        </Styled.KeyText>
      )
    }
    return children
  }, [children])

  return (
    <Styled.KeyContentStack
      testId={testId}
      {...props}
      ref={forwardedRef}
      interpolation={interpolation}
    >
      { KeyIcon }
      { KeyText }
    </Styled.KeyContentStack>
  )
}

export default memo(forwardRef(KeyItem))

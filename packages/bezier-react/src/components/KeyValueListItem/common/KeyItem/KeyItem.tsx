import React, {
  type Ref,
  forwardRef,
  memo,
  useMemo,
} from 'react'

import { Typography } from '~/src/foundation'

import { isString } from '~/src/utils/typeUtils'

import {
  Icon,
  IconSize,
  LegacyIcon,
  isBezierIcon,
  isIconName,
} from '~/src/components/Icon'
import { TEST_ID_MAP } from '~/src/components/KeyValueListItem/KeyValueListItem.const'

import { type KeyItemProps } from './KeyItem.types'

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
        <LegacyIcon
          size={IconSize.S}
          name={keyIcon}
          color="txt-black-dark"
        />
      )
    }

    if (isBezierIcon(keyIcon)) {
      return (
        <Icon
          size={IconSize.S}
          source={keyIcon}
          color="txt-black-dark"
        />
      )
    }

    return keyIcon
  }, [keyIcon])

  const KeyText = useMemo(() => {
    if (isString(children)) {
      return (
        <Styled.KeyText bold typo={Typography.Size12} truncated>
          { children }
        </Styled.KeyText>
      )
    }
    return children
  }, [children])

  return (
    <Styled.KeyContent
      data-testid={testId}
      {...props}
      ref={forwardedRef}
      interpolation={interpolation}
    >
      { KeyIcon }
      { KeyText }
    </Styled.KeyContent>
  )
}

export default memo(forwardRef(KeyItem))

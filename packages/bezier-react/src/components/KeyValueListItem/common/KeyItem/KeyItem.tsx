import React, {
  type Ref,
  forwardRef,
  memo,
  useMemo,
} from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'

import { isString } from '~/src/utils/type'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import { TEST_ID_MAP } from '~/src/components/KeyValueListItem/KeyValueListItem.const'
import { Text } from '~/src/components/Text'

import styles from '../../KeyValueListItem.module.scss'

import { type KeyItemProps } from './KeyItem.types'

function KeyItem(
  {
    className,
    keyIcon,
    testId = TEST_ID_MAP.KEY_ITEM,
    children,
    ...props
  }: KeyItemProps,
  forwardedRef: Ref<HTMLDivElement>,
) {
  const KeyIcon = useMemo(() => {
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
        <Text
          className={styles.KeyText}
          bold
          typo="12"
          color="txt-black-dark"
          truncated
        >
          { children }
        </Text>
      )
    }
    return children
  }, [children])

  return (
    <div
      {...props}
      className={styles.KeyContent}
      ref={forwardedRef}
      data-testid={testId}
    >
      { KeyIcon }
      { KeyText }
    </div>
  )
}

export default memo(forwardRef(KeyItem))

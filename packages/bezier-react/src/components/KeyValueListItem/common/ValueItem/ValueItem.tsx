import React, {
  type Ref,
  forwardRef,
  memo,
} from 'react'

import { TEST_ID_MAP } from '~/src/components/KeyValueListItem/KeyValueListItem.const'
import { Text } from '~/src/components/Text'

import styles from '../../KeyValueListItem.module.scss'

import { type ValueItemProps } from './ValueItem.types'

function ValueItem(
  {
    testId = TEST_ID_MAP.VALUE_ITEM,
    multiline,
    children,
    ...props
  }: ValueItemProps,
  forwardedRef: Ref<HTMLDivElement>,
) {
  return (
    <Text
      {...props}
      className={styles.ValueItem}
      ref={forwardedRef}
      typo="14"
      truncated={!multiline}
      data-testid={testId}
    >
      { children }
    </Text>
  )
}

export default memo(forwardRef(ValueItem))

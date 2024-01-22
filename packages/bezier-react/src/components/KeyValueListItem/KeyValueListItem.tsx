import React, {
  type Ref,
  forwardRef,
} from 'react'

import classNames from 'classnames'

import { TEST_ID_MAP } from './KeyValueListItem.const'
import { type KeyValueListItemProps } from './KeyValueListItem.types'
import {
  ItemAction,
  KeyItem,
  ValueItem,
} from './common'

import styles from './KeyValueListItem.module.scss'

function KeyValueListItem(
  {
    className,
    interpolation,
    valueWrapperInterpolation,
    keyWrapperInterpolation,
    keyIcon,
    keyContent,
    actions,
    testId = TEST_ID_MAP.ROOT,
    children,
    onClickKey,
    onClickValue,
    ...props
  }: KeyValueListItemProps,
  forwardedRef: Ref<HTMLDivElement>,
) {
  return (
    <div
      {...props}
      className={classNames(
        styles.KeyValueItemWrapper,
        styles.KeyValueSingleLineItem,
        className,
      )}
      ref={forwardedRef}
      data-testid={testId}
    >
      { /* Since it allows for click interaction, it should be interactive content,
        but since it has a button element nested inside it, this is bad HTML markup.
        It's difficult to fix this without changing the design,
        so we keep the legacy code that uses the div element. */ }
      { /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */ }
      <div
        className={classNames(
          styles.KeyValueItemInnerWrapper,
          styles.KeySingleLineItem,
          onClickKey && styles.clickable,
        )}
        onClick={onClickKey}
      >
        <KeyItem
          keyIcon={keyIcon}
          interpolation={keyWrapperInterpolation}
        >
          { keyContent }
        </KeyItem>
      </div>

      { /* Since it allows for click interaction, it should be interactive content,
        but since it has a button element nested inside it, this is bad HTML markup.
        It's difficult to fix this without changing the design,
        so we keep the legacy code that uses the div element. */ }
      { /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */ }
      <div
        className={classNames(
          styles.KeyValueItemInnerWrapper,
          styles.ValueSingleLineItem,
          onClickValue && styles.clickable,
        )}
        onClick={onClickValue}
      >
        <ValueItem interpolation={valueWrapperInterpolation}>
          { children }
        </ValueItem>
        <ItemAction actions={actions} />
      </div>
    </div>
  )
}

export default forwardRef(KeyValueListItem)

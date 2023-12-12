import React from 'react'

import classNames from 'classnames'

import sharedStyles from '~/src/components/shared.module.scss'

import styles from './AlphaBox.module.scss'

function getDisplayClassName(display) {
  switch (display) {
    case 'block':
      return sharedStyles['display-block']
    case 'inline':
      return sharedStyles['display-inline']
    case 'inline-block':
      return sharedStyles['display-inline-block']
    default:
      return ''
  }
}

export function AlphaBox({ display }) {
  return (
    <div className={classNames(
      styles.Box,
      sharedStyles.margin,
      sharedStyles.layout,
      getDisplayClassName(display),
    )}
    />
  )
}

/* External dependencies */
import React from 'react'

function getElementType<T extends Record<string, any>>(props: T): React.ElementType<T> {
  return props.as || 'div'
}

export default getElementType

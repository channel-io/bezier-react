/* External dependencies */
import React from 'react'

/* Internal dependencies */
import Icon from './Icon'
import type { IconProps } from './Icon.types'

function createIcon(iconFn: (props: React.SVGProps<SVGSVGElement>) => JSX.Element) {
  return ((props: IconProps) => (
    <Icon
      as={iconFn}
      {...props}
    />
  ))
}

export default createIcon

/* External dependencies */
import React from 'react'

/* Internal dependencies */
import BaseIcon from './BaseIcon'
import type IconProps from './Icon.types'

function createIcon(iconFn: (props: React.SVGProps<SVGSVGElement>) => JSX.Element) {
  return ((props: IconProps) => (
    <BaseIcon
      as={iconFn}
      {...props}
    />
  ))
}

export default createIcon

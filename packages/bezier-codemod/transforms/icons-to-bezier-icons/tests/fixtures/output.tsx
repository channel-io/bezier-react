/* eslint-disable */
/* External dependencies */
import React from 'react'
import { type IconName, AllIcon, CheckIcon as CheckIconSource } from '@channel.io/bezier-icons'
import { Button, Icon, IconSize } from '@channel.io/bezier-react'

/* Internal dependencies */
import { Foo } from './foo'

interface ComponentProps {
  iconName: IconName
}

function Component(props: ComponentProps) {
  return (
    <div {...props}>
      <Button />
      <Icon
        size={IconSize.S}
        source={AllIcon}
      />
      <Icon
        source={CheckIconSource}
      />
    </div>
  )
}

export default Component

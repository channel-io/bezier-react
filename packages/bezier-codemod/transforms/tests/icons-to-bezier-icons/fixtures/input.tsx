import React from 'react'
import { AllIcon, Button, CheckIcon as CheckIconSource, Icon, type IconName, IconSize } from '@channel.io/bezier-react'

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

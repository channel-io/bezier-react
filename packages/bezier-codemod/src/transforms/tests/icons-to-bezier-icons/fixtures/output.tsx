import React from 'react'
import { AllIcon, CheckIcon as CheckIconSource, type IconName } from '@channel.io/bezier-icons'
import { Button, Icon, IconSize, LegacyIcon } from '@channel.io/bezier-react'

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

import figma from '@figma/code-connect'

import { StatusBadge as AlphaStatusBadge } from './StatusBadge'

figma.connect(
  AlphaStatusBadge,
  'https://www.figma.com/design/KyhPPZeeC0JBmTclJGe3nn/Status?node-id=6%3A34',
  {
    props: {
      size: figma.enum('size', {
        medium: 'm',
        large: 'l',
      }),
      online: figma.boolean('online'),
      doNotDisturb: figma.boolean('doNotDisturb'),
    },
    example: (props) => (
      <AlphaStatusBadge
        size={props.size}
        online={props.online}
        doNotDisturb={props.doNotDisturb}
      />
    ),
  }
)

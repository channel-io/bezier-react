import figma from '@figma/code-connect'

import { AvatarGroup as AlphaAvatarGroup } from './AvatarGroup'

figma.connect(
  AlphaAvatarGroup,
  'https://www.figma.com/design/aJJF4bU82uR0jAsmWp5wlE/Navigation?node-id=1%3A19451',
  {
    props: {
      size: figma.enum('size', {
        '20': '20',
        '24': '24',
      } as const),
      ellipsisType: figma.enum('variants', {
        'icon (default)': 'icon',
        count: 'count',
      } as const),
      max: figma.nestedProps('⛔️️ alpha/Common/$AvatarGroupSource', {
        value: figma.enum('itemCount', {
          '2': 2,
          '3': 3,
          '4': 4,
          '5': 5,
        }),
      } as const),
    },
    example: (props) => (
      <AlphaAvatarGroup
        max={props.max.value}
        size={props.size}
        ellipsisType={props.ellipsisType}
      />
    ),
  }
)

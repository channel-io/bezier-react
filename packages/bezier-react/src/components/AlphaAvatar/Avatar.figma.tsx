import React from 'react'

import figma from '@figma/code-connect'

import { type StatusType } from '~/src/components/Status'

import { Avatar as AlphaAvatar } from './Avatar'
import { type AvatarProps } from './Avatar.types'

figma.connect<
  Pick<AvatarProps, 'size' | 'showBorder'> & {
    status: {
      value?: StatusType
    }
  }
>(
  AlphaAvatar,
  'https://www.figma.com/design/aJJF4bU82uR0jAsmWp5wlE/Navigation?node-id=1%3A19155',
  {
    props: {
      size: figma.enum('size', {
        '16': '16',
        '20': '20',
        '24': '24',
        '30': '30',
        '36': '36',
        '42': '42',
        '48': '48',
        '72': '72',
        '90': '90',
        '120': '120',
      }),
      status: figma.enum('badge', {
        none: {
          value: undefined,
        },
        chat: {
          value: undefined,
        },
        status: figma.nestedProps('⛔️️ alpha/Common/StatusBadge', {
          value: figma.boolean('online', {
            true: figma.boolean('doNotDisturb', {
              true: 'online-crescent',
              false: 'online',
            }),
            false: figma.boolean('doNotDisturb', {
              true: 'offline-crescent',
              false: 'offline',
            }),
          }),
        }),
      }),
      showBorder: figma.boolean('outlineBorder'),
    },
    example: (props) => (
      <AlphaAvatar
        size={props.size}
        avatarUrl="/* TODO */"
        name="/* TODO */"
        showBorder={props.showBorder}
        status={props.status.value}
      />
    ),
  }
)

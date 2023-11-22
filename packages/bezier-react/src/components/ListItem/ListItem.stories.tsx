import React, {
  useMemo,
  useState,
} from 'react'

import { InboxIcon } from '@channel.io/bezier-icons'
import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { compact } from '~/src/utils/array'

import ListItem from './ListItem'
import type ListItemProps from './ListItem.types'
import {
  ListItemSize,
  ListItemVariant,
} from './ListItem.types'

const meta: Meta<typeof ListItem> = {
  component: ListItem,
}
export default meta

interface ArgTypes extends ListItemProps {
  width: number
}

const Template: StoryFn<ArgTypes> = ({ width, ...listItemProps }) => (
  <div style={{ width }}>
    <ListItem optionKey="menu-item-0" {...listItemProps} />
  </div>
)

export const Primary = {
  render: Template,

  args: {
    width: 388,
    size: ListItemSize.M,
    content: '상담이 열릴 때',
    description:
      '고객이 첫 메시지를 보내거나, 매니저가 상담을 다시 열거나, 자동으로 리오픈되면 트리거됩니다.',
    rightContent: '',
    leftIcon: InboxIcon,
    active: false,
    focused: false,
    disableIconActive: false,
    descriptionMaxLines: 0,
    href: '',
  },

  argTypes: {
    width: {
      control: {
        type: 'range',
        min: 50,
        max: 500,
        step: 1,
      },
    },
    disabled: { control: { type: 'boolean' } },
    variant: {
      control: {
        type: 'radio',
      },
      options: [...Object.values(ListItemVariant)],
    },
    active: { control: { type: 'boolean' } },
    size: {
      control: {
        type: 'select',
      },
      options: ListItemSize,
    },
  },
}

interface CompositionProps {
  listRange: number
}

const CompositionTemplate = ({ listRange }: CompositionProps) => {
  const [activeIndex, setActiveIndex] = useState<Set<number>>(() => {
    const randomActiveIndex = Array.from(Array(listRange).keys()).map((index) => (Math.random() < 0.5 ? index : null))
    return new Set(compact<number>([...randomActiveIndex]))
  })

  const isActive = (index: number) => activeIndex.has(index)

  const toggleActive = (index: number) => setActiveIndex((prevSet) => {
    if (prevSet.has(index)) {
      prevSet.delete(index)
      return new Set(Array.from(prevSet))
    }
    return new Set(Array.from(prevSet.add(index)))
  })

  const list = useMemo(() => Array.from(Array(listRange).keys()), [listRange])

  return (
    <div>
      { list.map((index) => (
        <ListItem
          key={index}
          className={isActive(index) ? 'active' : undefined}
          optionKey={`menu-item-${index}`}
          active={isActive(index)}
          onClick={() => toggleActive(index)}
          content={`이것은 ${index}번 아이템입니다.`}
        />
      )) }
    </div>
  )
}

export const Composition: StoryObj<CompositionProps> = {
  render: CompositionTemplate,

  args: {
    listRange: 10,
  },

  argTypes: {
    listRange: {
      control: {
        type: 'range',
        min: 2,
        max: 20,
      },
    },
  },
}

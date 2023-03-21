/* External dependencies */
import React, {
  useState,
  useMemo,
} from 'react'
import base from 'paths.macro'
import {
  type Meta,
  type Story,
} from '@storybook/react'

/* Internal dependencies */
import { compact } from '~/src/utils/arrayUtils'
import { getTitle } from '~/src/utils/storyUtils'
import { InboxIcon } from '~/src/components/Icon'
import type ListItemProps from './ListItem.types'
import {
  ListItemSize,
  ListItemVariant,
} from './ListItem.types'
import ListItem from './ListItem'

export default {
  title: getTitle(base),
  component: ListItem,
} as Meta

interface ArgTypes extends ListItemProps {
  width: number
}

const Template: Story<ArgTypes> = ({ width, ...listItemProps }) => (
  <div style={{ width }}>
    <ListItem
      optionKey="menu-item-0"
      {...listItemProps}
    />
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  width: 388,
  size: ListItemSize.M,
  content: '상담이 열릴 때',
  description: '고객이 첫 메시지를 보내거나, 매니저가 상담을 다시 열거나, 자동으로 리오픈되면 트리거됩니다.',
  rightContent: '',
  leftIcon: InboxIcon,
  active: false,
  focused: false,
  disableIconActive: false,
  descriptionMaxLines: 0,
  href: '',
}

Primary.argTypes = {
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
      options: [
        ...Object.values(ListItemVariant),
      ],
    },
  },
  active: { control: { type: 'boolean' } },
  size: { control: { type: 'select', options: ListItemSize } },
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

export const Composition: Story<CompositionProps> = CompositionTemplate.bind({})

Composition.args = {
  listRange: 10,
}

Composition.argTypes = {
  listRange: {
    control: {
      type: 'range',
      min: 2,
      max: 20,
    },
  },
}

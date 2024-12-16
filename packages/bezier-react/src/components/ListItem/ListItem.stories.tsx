import { useState } from 'react'

import { InboxIcon } from '@channel.io/bezier-icons'
import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { range } from '~/src/utils/number'

import { ListItem } from './ListItem'
import { type ListItemProps } from './ListItem.types'

const meta: Meta<typeof ListItem> = {
  component: ListItem,
}

const Template: StoryFn<ListItemProps> = (props) => (
  <div style={{ width: 400 }}>
    <ListItem {...props} />
  </div>
)

export const Primary: StoryObj<ListItemProps> = {
  render: Template,
  args: {
    size: 's',
    content: '상담이 열릴 때',
    leftContent: InboxIcon,
    active: false,
    focused: false,
    description:
      '고객이 첫 메시지를 보내거나, 매니저가 상담을 다시 열거나, 자동으로 리오픈되면 트리거됩니다.',
    descriptionMaxLines: 2,
  },
}

const list = range(0, 10)

const CompositionTemplate = () => {
  const [activeIndex, setActiveIndex] = useState<Set<number>>(
    new Set([0, 1, 2, 4])
  )

  const isActive = (index: number) => activeIndex.has(index)

  const toggleActive = (index: number) =>
    setActiveIndex((prevSet) => {
      if (prevSet.has(index)) {
        prevSet.delete(index)
        return new Set(prevSet)
      }
      return new Set(prevSet.add(index))
    })

  return (
    <div style={{ width: 200 }}>
      {list.map((index) => (
        <ListItem
          key={index}
          active={isActive(index)}
          onClick={() => toggleActive(index)}
          content="Click me!"
        />
      ))}
    </div>
  )
}

export const Composition: StoryObj = {
  render: CompositionTemplate,
}

export default meta

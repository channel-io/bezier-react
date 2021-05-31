/* External dependencies */
import React, {
  useState,
  useMemo,
} from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import {
  iconList,
  getTitle,
} from '../../utils/storyUtils'
import ListItem from './ListItem'
import {
  ListItemSize,
  ListItemColorVariant,
} from './ListItem.types'

export default {
  title: getTitle(base),
  component: ListItem,
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
    colorVariant: {
      control: {
        type: 'radio',
        options: [
          ...Object.values(ListItemColorVariant),
        ],
      },
    },
    active: { control: { type: 'boolean' } },
    leftIcon: { control: { type: 'select', options: [...iconList, undefined] } },
    size: { control: { type: 'select', options: ListItemSize } },
  },
}

const Template = ({ width, ...otherListItemProps }) => (
  <div style={{ width }}>
    <ListItem
      optionKey="menu-item-0"
      {...otherListItemProps}
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
  leftIcon: 'inbox',
  active: false,
  disableIconActive: false,
  descriptionMaxLines: 0,
}

export const MultiListItem = ({
  listRange,
}) => {
  const [activeIndex, setActiveIndex] = useState<Set<number>>(new Set())

  const isActive = (index: number) => activeIndex.has(index)

  const toggleActive = (index: number) => setActiveIndex((prevSet) => {
    if (prevSet.has(index)) {
      prevSet.delete(index)
      return new Set([...prevSet])
    }
    return new Set([...prevSet.add(index)])
  })

  const list = useMemo(() => [...Array(listRange).keys()], [listRange])

  return (
    <div>
      { list.map((index) => (
        <ListItem
          key={index}
          className={isActive(index) && 'active'}
          optionKey={`menu-item-${index}`}
          active={isActive(index)}
          onClick={() => toggleActive(index)}
          content={`이것은 ${index}번 아이템입니다.`}
        />
      )) }
    </div>
  )
}

MultiListItem.args = {
  listRange: 10,
}

MultiListItem.argTypes = {
  listRange: {
    control: {
      type: 'range',
      min: 2,
      max: 20,
    },
  },
}

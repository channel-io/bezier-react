/* External dependencies */
import React, {
  useCallback,
  useState,
} from 'react'
import base from 'paths.macro'
import {
  Story,
  Meta,
} from '@storybook/react'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { getTitle } from '../../utils/etcUtils'
import { IconSize } from '../Icon'
import { Avatar } from '../Avatars/Avatar'
import OutlineItem from './OutlineItem'
import OutlineItemProps, {
  ChevronIconType,
} from './OutlineItem.types'

export default {
  title: getTitle(base),
  component: OutlineItem,
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta

const Template: Story<OutlineItemProps> = ({ ...otherOutlineItemProps }) => {
  const [open, setOpen] = useState(true)
  const [idx, setIdx] = useState(null)

  const handleToggle = useCallback(() => {
    setOpen(v => !v)
    //  if you want to manually activate specific elemenmt
    // setIdx(0)
  }, [])

  const handleClickGroup = useCallback((name: string) => {
    // eslint-disable-next-line no-console
    console.log(name)
    handleToggle()
  }, [handleToggle])

  const handleClickItem = useCallback((name, key, index) => {
    // eslint-disable-next-line no-console
    console.log(name, key, index)
    setIdx(index)
  }, [])

  return (
    <div style={{ width: 600, display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: 240 }}>
        <OutlineItem
          content="GL"
          leftIcon="dot"
          leftIconColor="bgtxt-teal-normal"
          name="nested"
        />
        <OutlineItem
          open={open}
          selectedMenuItemIndex={idx}
          onClick={handleClickGroup}
          onClickArrow={handleToggle}
          onChangeOption={handleClickItem}
          {...otherOutlineItemProps}
        >
          <OutlineItem
            content="product"
            open
            leftContent={(
              <Avatar
                size={IconSize.S}
              />
          )}
            leftIconColor="txt-black-dark"
            name="nested-2"
            // eslint-disable-next-line no-console
            onClick={console.log}
          >
            <OutlineItem
              optionKey="item-with-a"
              href="https://naver.com"
              content="🔥"
              leftIcon="dot"
              leftIconColor="txt-black-dark"
            />
            <OutlineItem
              content="feedback"
              leftIcon="dot"
              leftIconColor="bgtxt-olive-normal"
            />
          </OutlineItem>

          <OutlineItem
            content="bug"
            leftIcon="dot"
            leftIconColor="bgtxt-red-normal"
          />
        </OutlineItem>
        <OutlineItem
          content="etc"
          leftIcon="dot"
          leftIconColor="txt-black-dark"
        />
      </div>
      <div style={{ width: 240 }}>
        <OutlineItem
          open
          content="푸시 메시지 설정"
          leftIcon="email-unread"
        >
          <OutlineItem
            key={uuid()}
            optionKey="item-with-a"
            href="https://naver.com"
            content="모바일 SDK 푸시"
            leftIcon="app-push"
            leftIconColor="txt-black-dark"
          />
          <OutlineItem
            content="알림톡, 문자 푸시"
            leftIcon="sms"
          />
          <OutlineItem
            content="이메일 푸시"
            leftIcon="email"
          />
        </OutlineItem>
        <OutlineItem
          content="보안"
          leftIcon="security"
          leftIconColor=""
        />
      </div>

    </div>
  )
}

export const Primary: Story<OutlineItemProps> = Template.bind({})

Primary.args = {
  name: 'sample group',
  content: 'KR',
  chevronIconType: ChevronIconType.Small,
  chevronIconSize: IconSize.XS,
  leftIcon: 'dot',
  leftIconColor: 'bgtxt-pink-normal',
  selectedOptionIndex: null,
}

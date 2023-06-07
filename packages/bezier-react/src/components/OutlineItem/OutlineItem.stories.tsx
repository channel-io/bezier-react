import React, {
  useCallback,
  useState,
} from 'react'

import {
  AppPushIcon,
  DotIcon,
  EmailIcon,
  EmailUnreadIcon,
  SecurityIcon,
  SmsIcon,
} from '@channel.io/bezier-icons'
import {
  type Meta,
  type Story,
} from '@storybook/react'
import base from 'paths.macro'
import { v4 as uuid } from 'uuid'

import { getTitle } from '~/src/utils/storyUtils'

import {
  Avatar,
  AvatarSize,
} from '~/src/components/Avatars/Avatar'

import OutlineItem from './OutlineItem'
import type OutlineItemProps from './OutlineItem.types'

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

const Template: Story<OutlineItemProps> = (args) => {
  const [open, setOpen] = useState(true)
  const [idx, setIdx] = useState(null)

  const handleToggle = useCallback(() => {
    setOpen(v => !v)
    //  if you want to manually activate specific element
    // setIdx(0)
  }, [])

  const handleClickGroup = useCallback((_e, name?: string) => {
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
          leftIcon={DotIcon}
          leftIconColor="bgtxt-teal-normal"
          name="nested"
        />
        <OutlineItem
          open={open}
          selectedOutlineItemIndex={idx}
          onClick={handleClickGroup}
          onClickArrow={handleToggle}
          onChangeOption={handleClickItem}
          {...args}
        >
          <OutlineItem
            content="product"
            open
            leftContent={(
              <Avatar
                name="avatar"
                size={AvatarSize.Size20}
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
              leftIcon={DotIcon}
              leftIconColor="txt-black-dark"
            />
            <OutlineItem
              content="feedback"
              leftIcon={DotIcon}
              leftIconColor="bgtxt-olive-normal"
            />
          </OutlineItem>

          <OutlineItem
            content="bug"
            leftIcon={DotIcon}
            leftIconColor="bgtxt-red-normal"
          />
        </OutlineItem>
        <OutlineItem
          content="etc"
          leftIcon={DotIcon}
          leftIconColor="txt-black-dark"
        />
      </div>
      <div style={{ width: 240 }}>
        <OutlineItem
          open
          content="푸시 메시지 설정"
          leftIcon={EmailUnreadIcon}
        >
          <OutlineItem
            key={uuid()}
            optionKey="item-with-a"
            href="https://naver.com"
            content="모바일 SDK 푸시"
            leftIcon={AppPushIcon}
            leftIconColor="txt-black-dark"
          />
          <OutlineItem
            content="알림톡, 문자 푸시"
            leftIcon={SmsIcon}
          />
          <OutlineItem
            content="이메일 푸시"
            leftIcon={EmailIcon}
          />
        </OutlineItem>
        <OutlineItem
          content="보안"
          leftIcon={SecurityIcon}
        />
      </div>

    </div>
  )
}

export const Primary: Story<OutlineItemProps> = Template.bind({})

Primary.args = {
  name: 'sample group',
  content: 'KR',
  leftIcon: DotIcon,
  leftIconColor: 'bgtxt-pink-normal',
}

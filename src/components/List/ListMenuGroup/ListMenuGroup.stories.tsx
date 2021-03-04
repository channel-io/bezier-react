/* External dependencies */
import React, { useCallback, useState } from 'react'
import base from 'paths.macro'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { getTitle } from '../../../utils/etcUtils'
import { ListItem } from '../ListItem'
import ListMenuGroup from './ListMenuGroup'

export default {
  title: getTitle(base),
  component: ListMenuGroup,
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
    },
  },
}

const Template = ({ ...otherListMenuGroupProps }) => {
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
        <ListMenuGroup
          content="GL"
          leftIcon="dot"
          leftIconColor="bgtxt-teal-normal"
          name="nested"
        />
        <ListMenuGroup
          open={open}
          selectedMenuItemIndex={idx}
          onClick={handleClickGroup}
          onClickArrow={handleToggle}
          onChangeOption={handleClickItem}
          {...otherListMenuGroupProps}
        >
          <ListMenuGroup
            content="product"
            open
            leftIcon="dot"
            leftIconColor="txt-black-dark"
            name="nested-2"
            // eslint-disable-next-line no-console
            onClick={console.log}
          >
            <ListItem
              key={uuid()}
              optionKey="item-with-a"
              href="https://naver.com"
              content="🔥"
              leftIcon="dot"
              leftIconColor="txt-black-dark"
            />
            <ListMenuGroup
              content="feedback"
              leftIcon="dot"
              leftIconColor="bgtxt-olive-normal"
            />
          </ListMenuGroup>

          <ListMenuGroup
            content="bug"
            leftIcon="dot"
            leftIconColor="bgtxt-red-normal"
          />
        </ListMenuGroup>
        <ListMenuGroup
          content="etc"
          leftIcon="dot"
          leftIconColor="txt-black-dark"
        />
      </div>
      <div style={{ width: 240 }}>
        <ListMenuGroup
          open
          content="푸시 메시지 설정"
          leftIcon="email-unread"
        >
          <ListItem
            key={uuid()}
            optionKey="item-with-a"
            href="https://naver.com"
            content="모바일 SDK 푸시"
            leftIcon="app-push"
            leftIconColor="txt-black-dark"
          />
          <ListItem
            content="알림톡, 문자 푸시"
            leftIcon="sms"
          />
          <ListItem
            content="이메일 푸시"
            leftIcon="email"
          />
        </ListMenuGroup>
        <ListMenuGroup
          content="보안"
          leftIcon="security"
          leftIconColor=""
        />
      </div>

    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  name: 'sample group',
  content: 'KR',
  leftIcon: 'dot',
  leftIconColor: 'bgtxt-pink-normal',
  selectedOptionIndex: null,
}

import React, {
  useCallback,
  useState,
} from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import { base } from 'paths.macro'

import { styled } from '~/src/foundation'

import { getTitle } from '~/src/utils/storyUtils'
import { isNaN } from '~/src/utils/typeUtils'

import {
  Avatar,
  AvatarSize,
} from '~/src/components/Avatars/Avatar'

import { CheckableAvatar } from './CheckableAvatar'
import type CheckableAvatarProps from './CheckableAvatar.types'

const MOCK_AVATAR_URL = 'https://cf.channel.io/thumb/200x200/pub-file/1/606d87d059a6093594c0/ch-symbol-filled-smiley-bg.png'

const MOCK_AVATAR_LIST = [
  {
    id: 1,
    avatarUrl: 'https://bit.ly/code-beast',
    name: 'Christian Nwamba',
  },
  {
    id: 2,
    avatarUrl: 'https://bit.ly/tioluwani-kolawole',
    name: 'Kola Tioluwani',
  },
  {
    id: 3,
    avatarUrl: 'https://bit.ly/kent-c-dodds',
    name: 'Kent Dodds',
  },
  {
    id: 4,
    avatarUrl: 'https://bit.ly/ryan-florence',
    name: 'Ryan Florence',
  },
  {
    id: 5,
    avatarUrl: 'https://bit.ly/dan-abramov',
    name: 'Dan Abrahmov',
  },
  {
    id: 6,
    avatarUrl: 'https://bit.ly/prosper-baba',
    name: 'Prosper Otemuyiwa',
  },
  {
    id: 7,
    avatarUrl: 'https://bit.ly/sage-adebayo',
    name: 'Segun Adebayo',
  },
]

const avatarSizeList = Object.keys(AvatarSize)
  .filter(value => isNaN(Number(value)) === true)
  .map(key => AvatarSize[key])

export default {
  title: getTitle(base),
  component: CheckableAvatar,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: avatarSizeList,
      },
    },
    checkedBackgroundColor: {
      control: {
        type: 'radio',
        options: [
          'bgtxt-green-normal',
          'bgtxt-cobalt-normal',
        ],
      },
    },
  },
} as Meta

// NOTE: (@ed) border 색상을 명확하게 보여주기 위해 회색의 Wrapper를 추가했습니다
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-grey-light']};
`

type CheckableAvatarPropsWithAdditionalAvatar = CheckableAvatarProps & { withAdditionalAvatar: boolean }

const Template: Story<CheckableAvatarPropsWithAdditionalAvatar> = ({ withAdditionalAvatar, ...args }) => {
  const [checked, setChecked] = useState(false)

  const handleClick = useCallback(() => {
    setChecked(!checked)
  }, [checked])

  return (
    <Wrapper>
      <CheckableAvatar
        {...args}
        isChecked={checked}
        onClick={handleClick}
      >
        { withAdditionalAvatar && (
          <Avatar
            size={AvatarSize.Size20}
            avatarUrl={args.avatarUrl}
            name="additionalAvatar"
            showBorder
          />
        ) }
      </CheckableAvatar>
    </Wrapper>
  )
}

export const Primary: Story<CheckableAvatarPropsWithAdditionalAvatar> = Template.bind({})
Primary.args = {
  avatarUrl: MOCK_AVATAR_URL,
  name: 'Channel',
  size: AvatarSize.Size24,
  showBorder: false,
  disabled: false,
  isChecked: false,
  isCheckable: true,
  checkedBackgroundColor: undefined,
  withAdditionalAvatar: false,
}

const List = styled.li`
  display: flex;
  align-items: center;
  padding: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ foundation }) => foundation?.theme?.['bg-grey-light']};
  }
`

const Name = styled.span`
  margin-left: 4px;
`

const TemplateCheckableAvatarList: Story<CheckableAvatarProps> = (args) => {
  const [checkedList, setCheckedList] = useState<{ [id: number]: boolean }>({})

  const handleClickList = useCallback((id: number) => {
    setCheckedList({
      ...checkedList,
      [id]: !checkedList[id],
    })
  }, [checkedList])

  return (
    <ul>
      { MOCK_AVATAR_LIST.map(({ id, avatarUrl, name }) => (
        <List
          key={id}
        >
          <CheckableAvatar
            {...args}
            avatarUrl={avatarUrl}
            name={name}
            isChecked={checkedList[id]}
            onClick={() => handleClickList(id)}
          />
          <Name>{ name }</Name>
        </List>
      )) }
      <List>
        <CheckableAvatar
          avatarUrl="https://bit.ly/dan-abramov"
          name="Dan Abramov"
          isCheckable={false}
          disabled
        />
        <Name>Disabled Dan</Name>
      </List>
    </ul>
  )
}

export const CheckableAvatarList: Story<CheckableAvatarProps> = TemplateCheckableAvatarList.bind({})
CheckableAvatarList.args = {
  avatarUrl: MOCK_AVATAR_URL,
  name: 'Channel',
  size: AvatarSize.Size24,
  showBorder: false,
  disabled: false,
  isChecked: false,
  isCheckable: true,
  checkedBackgroundColor: undefined,
}


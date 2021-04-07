/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'

/* Internal dependencies */
import { styled } from '../../foundation'
import { getTitle } from '../../utils/etcUtils'
import Avatar from './Avatar'
import { AvatarProps } from './Avatar.styled'
import { AvatarSize } from './Avatar.types'

export default {
  title: getTitle(base),
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: [
          AvatarSize.XXS,
          AvatarSize.XS,
          AvatarSize.S,
          AvatarSize.M,
          AvatarSize.L,
          AvatarSize.XL,
          AvatarSize.XXL,
          AvatarSize.XXXL,
        ],
      },
    },
  },
}

const AvatarWrapper = styled.div`
  position: absolute;
  z-index: 1;
`

const Wrapper = styled.div`
  position: relative;
`

const NonSmoothCornerAvatar = styled.div<AvatarProps>`
  box-sizing: content-box;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-color: black;
  background-size: cover;
  border-radius: 42%;
  outline: none;
`

const Template = (args) => (
  <Wrapper>
    <AvatarWrapper>
      <Avatar {...args} />
    </AvatarWrapper>
    <NonSmoothCornerAvatar {...args} />
  </Wrapper>
)

export const Primary = Template.bind({})
Primary.args = {
  src: 'https://bit.ly/dan-abramov',
  alt: 'Dan Abrahmov',
  size: AvatarSize.M,
}

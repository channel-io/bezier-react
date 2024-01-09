import React from 'react'

import { render } from '~/src/utils/test'

import {
  EMOJI_TEST_ID,
  Emoji,
} from './Emoji'
import { type EmojiProps } from './Emoji.types'

const MOCK_EMOJI_URL = 'https://cf.exp.channel.io/asset/emoji/images/80/a.png'

describe('Emoji Test >', () => {
  const defaultProps: EmojiProps = { imageUrl: MOCK_EMOJI_URL, name: 'a' }

  const renderComponent = (props?: Partial<EmojiProps>) => render(
    <Emoji {...defaultProps} {...props} />,
  )

  it('snapshot', () => {
    const { getByTestId } = renderComponent()
    const emoji = getByTestId(EMOJI_TEST_ID)

    expect(emoji).toMatchSnapshot()
  })

  it('should render with emoji image', () => {
    const { getByTestId } = renderComponent()
    const emoji = getByTestId(EMOJI_TEST_ID)

    expect(emoji).toHaveStyle('background-image: var(--b-emoji-background-image)')
  })
})

/* External dependencies */
import React from 'react'

/* Interanal dependencies */
import { render } from '~/src/utils/testUtils'
import type EmojiProps from './Emoji.types'
import Emoji, { EMOJI_TEST_ID } from './Emoji'
import { EmojiSize } from './Emoji.types'

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

  it('should render default style', () => {
    const { getByTestId } = renderComponent()
    const emoji = getByTestId(EMOJI_TEST_ID)

    expect(emoji).toHaveStyle('position: relative')
    expect(emoji).toHaveStyle('box-sizing: content-box')
    expect(emoji).toHaveStyle('display: flex')
    expect(emoji).toHaveStyle('flex-shrink: 0')
    expect(emoji).toHaveStyle('align-items: center')
    expect(emoji).toHaveStyle('justify-content: center')
  })

  it('should render with emoji image', () => {
    const { getByTestId } = renderComponent()
    const emoji = getByTestId(EMOJI_TEST_ID)

    expect(emoji).toHaveStyle('background-image: var(--background-image)')
  })

  it('should render emoji icon with size prop - size16', () => {
    const { getByTestId } = renderComponent({ size: EmojiSize.Size16 })
    const emoji = getByTestId(EMOJI_TEST_ID)

    expect(emoji).toHaveStyle('width: 16px')
    expect(emoji).toHaveStyle('height: 16px')
  })

  it('should render emoji icon with size prop - size42', () => {
    const { getByTestId } = renderComponent({ size: EmojiSize.Size42 })
    const emoji = getByTestId(EMOJI_TEST_ID)

    expect(emoji).toHaveStyle('width: 42px')
    expect(emoji).toHaveStyle('height: 42px')
  })

  it('should render emoji icon with size prop - size120', () => {
    const { getByTestId } = renderComponent({ size: EmojiSize.Size120 })
    const emoji = getByTestId(EMOJI_TEST_ID)

    expect(emoji).toHaveStyle('width: 120px')
    expect(emoji).toHaveStyle('height: 120px')
  })
})

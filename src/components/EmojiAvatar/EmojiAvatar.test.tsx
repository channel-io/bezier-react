/* External dependencies */
import React from 'react'

/* Interanal dependencies */
import { render } from 'Utils/testUtils'
import { StatusType } from 'Components/Status'
import type EmojiAvatarProps from './EmojiAvatar.types'
import EmojiAvatar, { EMOJI_AVATAR_TEST_ID } from './EmojiAvatar'
import { EmojiAvatarSize } from './EmojiAvatar.types'

const MOCK_EMOJI_URL = 'https://cf.exp.channel.io/asset/emoji/images/80/a.png'

describe('EmojiAvatar Test >', () => {
  const defaultProps: EmojiAvatarProps = { emojiUrl: MOCK_EMOJI_URL }

  const renderComponent = (props?: Partial<EmojiAvatarProps>) => render(
    <EmojiAvatar {...defaultProps} {...props} />,
  )

  it('snapshot', () => {
    const { getByTestId } = renderComponent()
    const emojiAvatar = getByTestId(EMOJI_AVATAR_TEST_ID)

    expect(emojiAvatar).toMatchSnapshot()
  })

  it('should render default wrapper style', () => {
    const { getByTestId } = renderComponent()
    const emojiAvatar = getByTestId(EMOJI_AVATAR_TEST_ID)

    expect(emojiAvatar).toHaveStyle('position: relative')
    expect(emojiAvatar).toHaveStyle('width: 24px')
    expect(emojiAvatar).toHaveStyle('height: 24px')
    expect(emojiAvatar).toHaveStyle('left: calc(50% - 24px/2)')
    expect(emojiAvatar).toHaveStyle('top: calc(50% - 24px/2)')
    expect(emojiAvatar).toHaveStyle('border-radius: 4px')
  })

  it('should render Icon style', () => {
    const { getByTestId } = renderComponent()
    const emojiAvatar = getByTestId(EMOJI_AVATAR_TEST_ID)

    expect(emojiAvatar.children.length).toBe(1)

    expect(emojiAvatar.children.item(0)).toHaveStyle('width: 24px')
    expect(emojiAvatar.children.item(0)).toHaveStyle('height: 24px')
    expect(emojiAvatar.children.item(0)).toHaveStyle('position: absolute')
    expect(emojiAvatar.children.item(0)).toHaveStyle('top: 50%')
    expect(emojiAvatar.children.item(0)).toHaveStyle('left: 50%')
    expect(emojiAvatar.children.item(0)).toHaveStyle('transform: translate(-50%,-50%)')
    expect(emojiAvatar.children.item(0)).toHaveStyle(`background-image: url(${MOCK_EMOJI_URL})`)
  })

  it('should render status component with status prop', () => {
    const { getByTestId } = renderComponent({ status: StatusType.Lock })
    const emojiAvatar = getByTestId(EMOJI_AVATAR_TEST_ID)

    expect(emojiAvatar.children.item(0)?.children.item(0)?.children.item(0)).toHaveAttribute('data-testid', 'bezier-react-status')
    expect(emojiAvatar.children.item(0)?.children.item(0)).toHaveStyle('position: absolute')
    expect(emojiAvatar.children.item(0)?.children.item(0)).toHaveStyle('right: -2px')
    expect(emojiAvatar.children.item(0)?.children.item(0)).toHaveStyle('bottom: -2px')
  })

  it('should render children component without status prop', () => {
    const children = (
      <div id="test" style={{ width: '300px' }}>
        <div>happy</div>
      </div>
    )

    const { getByTestId } = renderComponent({ children })
    const emojiAvatar = getByTestId(EMOJI_AVATAR_TEST_ID)

    expect(emojiAvatar.children.item(0)?.children.item(0)?.children.item(0)?.id).toBe('test')
    expect(emojiAvatar.children.item(0)?.children.item(0)?.children.item(0)).toHaveStyle('width: 300px')
    expect(emojiAvatar.children.item(0)?.children.item(0)?.children.item(0)).toHaveTextContent('happy')
  })

  it('should render emoji icon with size prop - size20', () => {
    const { getByTestId } = renderComponent({ size: EmojiAvatarSize.Size16 })
    const emojiAvatar = getByTestId(EMOJI_AVATAR_TEST_ID)

    expect(emojiAvatar.children.item(0)).toHaveStyle('width: 16px')
    expect(emojiAvatar.children.item(0)).toHaveStyle('height: 16px')
  })

  it('should render emoji icon with size prop - size42', () => {
    const { getByTestId } = renderComponent({ size: EmojiAvatarSize.Size42 })
    const emojiAvatar = getByTestId(EMOJI_AVATAR_TEST_ID)

    expect(emojiAvatar.children.item(0)).toHaveStyle('width: 42px')
    expect(emojiAvatar.children.item(0)).toHaveStyle('height: 42px')
  })

  it('should render emoji icon with size prop - size120', () => {
    const { getByTestId } = renderComponent({ size: EmojiAvatarSize.Size120 })
    const emojiAvatar = getByTestId(EMOJI_AVATAR_TEST_ID)

    expect(emojiAvatar.children.item(0)).toHaveStyle('width: 120px')
    expect(emojiAvatar.children.item(0)).toHaveStyle('height: 120px')
  })
})

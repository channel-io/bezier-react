import { render } from '~/src/utils/test'

import { EMOJI_TEST_ID, Emoji } from './Emoji'
import { type EmojiProps } from './Emoji.types'

describe('Emoji Test >', () => {
  const defaultProps: EmojiProps = { size: '24', name: 'a' }

  const renderComponent = (props?: Partial<EmojiProps>) =>
    render(
      <Emoji
        {...defaultProps}
        {...props}
      />
    )

  it('snapshot', () => {
    const { getByTestId } = renderComponent()
    const emoji = getByTestId(EMOJI_TEST_ID)

    expect(emoji).toMatchSnapshot()
  })

  it('should render with emoji image', () => {
    const { getByTestId } = renderComponent()
    const emoji = getByTestId(EMOJI_TEST_ID)

    expect(emoji).toHaveStyle(
      'background-image: var(--b-emoji-background-image)'
    )
  })
})

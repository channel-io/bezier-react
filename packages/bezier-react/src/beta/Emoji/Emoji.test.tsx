import * as React from 'react'


import { render } from '~/src/utils/test'

import { Emoji } from './Emoji'
import type { EmojiProps } from './Emoji.types'

import styles from './Emoji.module.scss'


describe('Emoji', () => {
  const renderEmoji = (props?: Partial<EmojiProps>) =>
    render(
      <Emoji
        name="smile"
        {...props}
      />
    )

  it('renders with default size', () => {
    const { getByRole } = renderEmoji()
    const emoji = getByRole('img', { name: 'smile' })

    expect(emoji).toHaveClass(styles.Emoji)
    expect(emoji).toHaveClass(styles['size-24'])
    expect(emoji).toHaveStyle('--b-beta-emoji-inner-size: 22px')
  })

  it('uses the emoji asset url generated from name', () => {
    const { getByRole } = renderEmoji({ name: 'hello world' })

    expect(getByRole('img', { name: 'hello world' })).toHaveStyle(
      '--b-beta-emoji-background-image: url(https://cf.exp.channel.io/asset/emoji/images/80/hello%20world.png)'
    )
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()

    render(
      <Emoji
        ref={ref}
        name="smile"
      />
    )

    expect(ref.current).toBeInTheDocument()
  })
})

/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from '../../../utils/testUtils'
import Avatar, { AVATAR_TEST_ID } from './Avatar'
import AvatarProps from './Avatar.types'

describe('Avatar test >', () => {
  let props: AvatarProps

  const mockAvatarUrl = 'https://bit.ly/dan-abramov'
  const mockFallbackUrl = 'https://www.google.com'

  beforeEach(() => {
    props = {
      avatarUrl: mockAvatarUrl,
      fallbackUrl: mockFallbackUrl,
      name: 'Name',
    }
  })

  // NOTE: unavailable smoothCorners
  const renderAvatar = (optionProps?: AvatarProps) => render(
    <Avatar {...props} {...optionProps} />,
  )

  it('Snapshot', () => {
    const { getByTestId } = renderAvatar()
    const avatar = getByTestId(AVATAR_TEST_ID)

    expect(avatar).toMatchSnapshot()
  })
})

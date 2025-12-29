import { render } from '~/src/utils/test'

import { AVATAR_WRAPPER_TEST_ID, Avatar } from './Avatar'
import type { AvatarProps } from './Avatar.types'

describe('Avatar >', () => {
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

  afterAll(() => {
    jest.restoreAllMocks()
  })

  // NOTE: unavailable smoothCorners
  const renderAvatar = (optionProps?: Partial<AvatarProps>) =>
    render(
      <Avatar
        {...props}
        {...optionProps}
      />
    )

  it('renders disabled style', () => {
    const { getByTestId } = renderAvatar({ disabled: true })
    const wrapper = getByTestId(AVATAR_WRAPPER_TEST_ID)

    expect(wrapper).toHaveStyle('opacity: var(--opacity-disabled)')
  })
})

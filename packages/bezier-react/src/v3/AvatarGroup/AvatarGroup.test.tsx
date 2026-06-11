import { render } from '~/src/utils/test'
import { Avatar } from '~/src/v3/Avatar'

import { AvatarGroup } from './AvatarGroup'
import { type AvatarGroupProps } from './AvatarGroup.types'
import MOCK_AVATAR_LIST from './__mocks__/avatarList'

import styles from './AvatarGroup.module.scss'

describe('AvatarGroup', () => {
  const mockFallbackUrl = 'https://www.google.com'

  const renderAvatarGroup = (props?: Partial<AvatarGroupProps>) =>
    render(
      <AvatarGroup
        max={MOCK_AVATAR_LIST.length - 1}
        spacing={4}
        ellipsisType="icon"
        {...props}
      >
        {MOCK_AVATAR_LIST.map(({ id, avatarUrl, name }) => (
          <Avatar
            key={id}
            avatarUrl={avatarUrl}
            fallbackUrl={mockFallbackUrl}
            name={name}
          />
        ))}
      </AvatarGroup>
    )

  it('should render with default style', () => {
    const { getByRole } = renderAvatarGroup()
    const avatarGroup = getByRole('group')

    expect(avatarGroup).toHaveClass(styles.AvatarGroup)
    expect(avatarGroup).toHaveClass(styles['size-24'])
    expect(avatarGroup).toHaveStyle('--b-avatar-group-spacing: 4px')
  })

  it('should render ellipsis icon when avatar count is more than max', () => {
    const { container } = renderAvatarGroup({ ellipsisType: 'icon' })
    const icon = container.querySelector('svg')

    expect(icon).toBeInTheDocument()
  })

  it('should not render ellipsis icon when avatar count is less than max', () => {
    const { container } = renderAvatarGroup({ max: MOCK_AVATAR_LIST.length })
    const icon = container.querySelector('svg')

    expect(icon).not.toBeInTheDocument()
  })

  it('should render ellipsis count when avatar count is more than max', () => {
    const { getByText } = renderAvatarGroup({ ellipsisType: 'count' })

    expect(getByText('+1')).toBeInTheDocument()
  })

  it('should not render ellipsis count when avatar count is less than max', () => {
    const { queryByText } = renderAvatarGroup({
      max: MOCK_AVATAR_LIST.length,
      ellipsisType: 'count',
    })

    expect(queryByText('+1')).not.toBeInTheDocument()
  })
})

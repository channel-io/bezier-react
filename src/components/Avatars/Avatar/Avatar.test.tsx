/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import { StatusType } from 'Components/Status'
import Avatar, { AVATAR_TEST_ID, STATUS_WRAPPER_TEST_ID } from './Avatar'
import AvatarProps, { AvatarSize } from './Avatar.types'

jest.mock('Worklets/EnableCSSHoudini', () => ({
  __esModule: true,
  ...jest.requireActual('Worklets/EnableCSSHoudini') as object,
  enableSmoothCorners: { current: true },
}))

// TODO: 테스트 코드 보강
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

  afterAll(() => {
    jest.restoreAllMocks()
  })

  // NOTE: unavailable smoothCorners
  const renderAvatar = (optionProps?: Partial<AvatarProps>) => render(
    <Avatar {...props} {...optionProps} />,
  )

  it('Snapshot', () => {
    const { getByTestId } = renderAvatar()
    const avatar = getByTestId(AVATAR_TEST_ID)

    expect(avatar).toMatchSnapshot()
  })

  it('should have right -2px, bottom -2px style on StatusWrapper', () => {
    const { getByTestId } = renderAvatar({ status: StatusType.Online })
    const statusWrapper = getByTestId(STATUS_WRAPPER_TEST_ID)

    expect(statusWrapper).toMatchSnapshot()
  })

  it('should have right 2px, bottom 2px style on StatusWrapper when show border', () => {
    const { getByTestId } = renderAvatar({ status: StatusType.Online, showBorder: true })
    const statusWrapper = getByTestId(STATUS_WRAPPER_TEST_ID)

    expect(statusWrapper).toMatchSnapshot()
  })

  it('should have right 4px, bottom 4px style on StatusWrapper when size grater then 90', () => {
    const { getByTestId } = renderAvatar({ status: StatusType.Online, size: AvatarSize.Size90 })
    const statusWrapper = getByTestId(STATUS_WRAPPER_TEST_ID)

    expect(statusWrapper).toMatchSnapshot()
  })

  it('should have right 8px, bottom 8px style on StatusWrapper when size grater then 90 and show border', () => {
    const { getByTestId } = renderAvatar({ status: StatusType.Online, size: AvatarSize.Size90, showBorder: true })
    const statusWrapper = getByTestId(STATUS_WRAPPER_TEST_ID)

    expect(statusWrapper).toMatchSnapshot()
  })
})

/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import { Avatar } from 'Components/Avatars/Avatar'
import MOCK_AVATAR_LIST from './__mocks__/avatarList'
import { AvatarGroup, AVATAR_GROUP_TEST_ID } from './AvatarGroup'
import { AvatarGroupEllipsisType } from './AvatarGroup.types'
import type AvatarGroupProps from './AvatarGroup.types'

jest.mock('Worklets/EnableCSSHoudini', () => ({
  __esModule: true,
  ...jest.requireActual('Worklets/EnableCSSHoudini') as object,
  enableSmoothCorners: { current: true },
}))

// TODO: 테스트 강화
describe('AvatarGroup >', () => {
  let props: AvatarGroupProps

  const testId = 'AVATAR'
  const mockFallbackUrl = 'https://www.google.com'

  beforeEach(() => {
    props = {
      max: 4,
      spacing: 4,
      ellipsisType: AvatarGroupEllipsisType.Icon,
    }
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  const renderComponent = (otherProps?: AvatarGroupProps) => render(
    <AvatarGroup {...props} {...otherProps}>
      { MOCK_AVATAR_LIST.map(({ id, avatarUrl, name }) => (
        <Avatar
          testId={testId}
          key={id}
          avatarUrl={avatarUrl}
          fallbackUrl={mockFallbackUrl}
          name={name}
        />
      )) }
    </AvatarGroup>,
  )

  it('Snapshot >', () => {
    const { getByTestId } = renderComponent()
    const rendered = getByTestId(AVATAR_GROUP_TEST_ID)

    expect(rendered).toMatchSnapshot()
  })
})

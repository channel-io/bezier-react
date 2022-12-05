/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import { Avatar } from 'Components/Avatars/Avatar'
import MOCK_AVATAR_LIST from './__mocks__/avatarList'
import { AvatarGroup, AVATAR_GROUP_ELLIPSIS_ICON_TEST_ID } from './AvatarGroup'
import { AvatarGroupEllipsisType } from './AvatarGroup.types'
import type AvatarGroupProps from './AvatarGroup.types'

jest.mock('Worklets/EnableCSSHoudini', () => ({
  __esModule: true,
  ...jest.requireActual('Worklets/EnableCSSHoudini') as object,
  enableSmoothCorners: { current: true },
}))

describe('AvatarGroup', () => {
  let props: AvatarGroupProps
  const mockFallbackUrl = 'https://www.google.com'

  beforeEach(() => {
    props = {
      max: MOCK_AVATAR_LIST.length - 1,
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
          key={id}
          avatarUrl={avatarUrl}
          fallbackUrl={mockFallbackUrl}
          name={name}
        />
      )) }
    </AvatarGroup>,
  )

  describe('Ellipsis type - Icon', () => {
    beforeEach(() => {
      props.ellipsisType = AvatarGroupEllipsisType.Icon
    })

    it('Snapshot', () => {
      const { getByRole } = renderComponent()
      const rendered = getByRole('group')
      expect(rendered).toMatchSnapshot()
    })

    it('should render ellipsis icon when avatar count is more than max', () => {
      const { getByTestId } = renderComponent()
      const rendered = getByTestId(AVATAR_GROUP_ELLIPSIS_ICON_TEST_ID)
      expect(rendered).toBeInTheDocument()
    })

    it('should not render ellipsis icon when avatar count is less than max', () => {
      props.max = MOCK_AVATAR_LIST.length
      const { queryByTestId } = renderComponent()
      const rendered = queryByTestId(AVATAR_GROUP_ELLIPSIS_ICON_TEST_ID)
      expect(rendered).not.toBeInTheDocument()
    })
  })

  describe('Ellipsis type - Count', () => {
    beforeEach(() => {
      props.ellipsisType = AvatarGroupEllipsisType.Count
    })

    it('Snapshot', () => {
      const { getByRole } = renderComponent()
      const rendered = getByRole('group')
      expect(rendered).toMatchSnapshot()
    })

    it('should render ellipsis count when avatar count is more than max', () => {
      const { getByText } = renderComponent()
      const rendered = getByText('+1')
      expect(rendered).toBeInTheDocument()
    })

    it('should not render ellipsis count when avatar count is less than max', () => {
      props.max = MOCK_AVATAR_LIST.length
      const { queryByText } = renderComponent()
      const rendered = queryByText('+1')
      expect(rendered).not.toBeInTheDocument()
    })
  })
})

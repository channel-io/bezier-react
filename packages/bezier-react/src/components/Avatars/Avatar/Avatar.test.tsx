import React from 'react'

import DisabledOpacity from '~/src/constants/DisabledOpacity'
import { render } from '~/src/utils/testUtils'

import { StatusType } from '~/src/components/Status'

import {
  AVATAR_TEST_ID,
  AVATAR_WRAPPER_TEST_ID,
  Avatar,
  STATUS_WRAPPER_TEST_ID,
} from './Avatar'
import type AvatarProps from './Avatar.types'
import { AvatarSize } from './Avatar.types'

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
  const renderAvatar = (optionProps?: Partial<AvatarProps>) => render(
    <Avatar {...props} {...optionProps} />,
  )

  it('Snapshot', () => {
    const { getByTestId } = renderAvatar()
    const img = getByTestId(AVATAR_TEST_ID)

    expect(img).toMatchSnapshot()
  })

  it('renders disabled style', () => {
    const { getByTestId } = renderAvatar({ disabled: true })
    const wrapper = getByTestId(AVATAR_WRAPPER_TEST_ID)

    expect(wrapper).toHaveStyle(`opacity: ${DisabledOpacity}`)
  })

  it('renders border style', () => {
    const { getByTestId } = renderAvatar({ showBorder: true })
    const img = getByTestId(AVATAR_TEST_ID)

    // NOTE(@ed): psuedo element 스타일 테스트가 어려워, 스냅샷 테스트로 대체
    expect(img).toMatchSnapshot()
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

  it('should have right 4px, bottom 4px style on StatusWrapper when size grater then 72', () => {
    const { getByTestId } = renderAvatar({ status: StatusType.Online, size: AvatarSize.Size72 })
    const statusWrapper = getByTestId(STATUS_WRAPPER_TEST_ID)

    expect(statusWrapper).toMatchSnapshot()
  })

  it('should have right 8px, bottom 8px style on StatusWrapper when size grater then 72 and show border', () => {
    const { getByTestId } = renderAvatar({ status: StatusType.Online, size: AvatarSize.Size72, showBorder: true })
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

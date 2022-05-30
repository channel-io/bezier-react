/* External dependencies */
import React, { memo } from 'react'

/* Internal dependencies */
import { IconSize } from 'Components/Icon'
import { StatusProps, StatusSize, StatusType } from './Status.types'
import { LockIcon, MoonFilledIcon, StatusCircle } from './Status.styled'

// TODO: 테스트 코드 작성
const STATUS_TEST_ID = 'bezier-react-status'

const statusWithIcon: Readonly<StatusType[]> = [
  StatusType.OnlineCrescent,
  StatusType.OfflineCrescent,
  StatusType.Lock,
]

function Status({
  type,
  size = StatusSize.M,
}: StatusProps) {
  if (statusWithIcon.includes(type)) {
    const iconSize = (size <= StatusSize.M) ? IconSize.XXS : IconSize.XS

    return (
      <StatusCircle
        data-testid={STATUS_TEST_ID}
        color="bg-white-normal"
        size={size}
      >
        { (() => {
          if (type === StatusType.Lock) {
            return (
              <LockIcon
                size={iconSize}
                color="txt-black-darker"
              />
            )
          }
          return (
            <MoonFilledIcon
              size={iconSize}
              color={type === StatusType.OnlineCrescent ? 'bgtxt-green-normal' : 'bgtxt-orange-normal'}
            />
          )
        })() }
      </StatusCircle>
    )
  }

  return (
    <StatusCircle
      data-testid={STATUS_TEST_ID}
      color={type === StatusType.Online ? 'bgtxt-green-normal' : 'bg-black-dark'}
      size={size}
    />
  )
}

export default memo(Status)

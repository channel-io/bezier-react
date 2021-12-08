/* External dependencies */
import React from 'react'

/* Internal denpendencies */
import { IconSize } from 'Components/Icon'
import { StatusType, StatusProps } from './Status.types'
import { StatusCircle, LockIcon } from './Status.styled'

// TODO: 테스트 코드 작성
const STATUS_TEST_ID = 'bezier-react-status'

function Status({
  type,
}: StatusProps) {
  if (type === StatusType.Lock) {
    return (
      <StatusCircle
        data-testid={STATUS_TEST_ID}
        color="bg-white-normal"
      >
        <LockIcon
          name="lock"
          size={IconSize.XXS}
          color="txt-black-darker"
        />
      </StatusCircle>
    )
  }

  return (
    <StatusCircle
      data-testid={STATUS_TEST_ID}
      color={type === StatusType.Online ? 'bgtxt-green-normal' : 'bg-black-dark'}
    />
  )
}

export default Status

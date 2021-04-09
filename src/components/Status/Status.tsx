/* External dependencies */
import React from 'react'

/* Internal denpendencies */
import { StatusCircle, PrivateIcon } from './Status.styled'
import { StatusType, StatusProps } from './Status.types'

export const STATUS_TEST_ID = 'ch-design-system-status'

function Status({
  type = StatusType.NONE,
}: StatusProps) {
  if (type === StatusType.NONE) { return null }

  if (type === StatusType.PRIVATE) {
    return (
      <StatusCircle
        data-testid={STATUS_TEST_ID}
        color="bg-white-normal"
      >
        <PrivateIcon
          name="lock"
          size={10 /* NOTE: IconSize에 없는 예외 케이스 */}
          color="txt-black-darker"
        />
      </StatusCircle>
    )
  }

  return (
    <StatusCircle
      data-testid={STATUS_TEST_ID}
      color={type === StatusType.ONLINE ? 'bgtxt-green-normal' : 'bg-black-dark'}
    />
  )
}

export default Status

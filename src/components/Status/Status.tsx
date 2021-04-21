/* External dependencies */
import React from 'react'

/* Internal denpendencies */
import { StatusType, StatusProps } from './Status.types'
import { StatusCircle, PrivateIcon } from './Status.styled'

export const STATUS_TEST_ID = 'ch-design-system-status'

function Status({
  type,
}: StatusProps) {
  if (type === StatusType.Private) {
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
      color={type === StatusType.Online ? 'bgtxt-green-normal' : 'bg-black-dark'}
    />
  )
}

export default Status

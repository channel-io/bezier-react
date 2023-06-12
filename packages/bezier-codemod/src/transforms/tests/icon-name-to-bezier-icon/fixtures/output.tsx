/* External dependencies */
import React, { useCallback, useMemo } from 'react'
import { ArrowLeftIcon, AllIcon } from '@channel.io/bezier-icons'

export default function CancelButton() {
  return (
    <Button
      leftContent={ArrowLeftIcon}
      rightContent={AllIcon}
      styleVariant={ButtonStyleVariant.Primary}
      text={translate('common.save')}
      disabled={disabled}
      onClick={handleSave}
    />
  )
}

/* External dependencies */
import React, { useCallback, useMemo } from 'react'
import { ArrowRightIcon, FlagFilledIcon, ArrowLeftIcon, AllIcon } from '@channel.io/bezier-icons'

export default function CancelButton() {
  const OtherButton = useMemo(() => (
    <Button
      leftContent={FlagFilledIcon}
      styleVariant={ButtonStyleVariant.Primary}
      text={translate('common.save')}
      disabled={disabled}
      onClick={handleSave}
    />
  ))

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

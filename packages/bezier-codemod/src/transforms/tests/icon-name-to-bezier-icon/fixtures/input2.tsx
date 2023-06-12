/* External dependencies */
import React, { useCallback, useMemo } from 'react'
import { ArrowRightIcon } from '@channel.io/bezier-icons'

export default function CancelButton() {
  const OtherButton = useMemo(() => (
    <Button
      leftContent="flag-filled"
      styleVariant={ButtonStyleVariant.Primary}
      text={translate('common.save')}
      disabled={disabled}
      onClick={handleSave}
    />
  ))

  return (
    <Button
      leftContent="arrow-left"
      rightContent="all"
      styleVariant={ButtonStyleVariant.Primary}
      text={translate('common.save')}
      disabled={disabled}
      onClick={handleSave}
    />
  )
}

/* External dependencies */
import React, { useCallback, useMemo } from 'react'

export default function CancelButton() {
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

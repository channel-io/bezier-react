/* External dependencies */
import React, { useCallback, useMemo } from 'react'
import { ArrowLeftIcon } from '@channel.io/bezier-icons';

export default function CancelButton() {
  return (
    <Button
      leftContent={ArrowLeftIcon}
      styleVariant={ButtonStyleVariant.Primary}
      text={translate('common.save')}
      disabled={disabled}
      onClick={handleSave}
    />
  )
}

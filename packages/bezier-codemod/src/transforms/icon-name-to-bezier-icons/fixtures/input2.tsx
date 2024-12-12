/* External dependencies */
import { useMemo } from 'react';
import { Button } from '@channel.io/bezier-react'
import { ArrowRightIcon } from '@channel.io/bezier-icons'

/* Internal dependencies */
import useTranslator from 'Hooks/useTranslator'

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

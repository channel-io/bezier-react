/* External dependencies */
import { useMemo } from 'react';
import { Button } from '@channel.io/bezier-react'
import { ArrowRightIcon, FlagFilledIcon, ArrowLeftIcon, AllIcon } from '@channel.io/bezier-icons'

/* Internal dependencies */
import useTranslator from 'Hooks/useTranslator'

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

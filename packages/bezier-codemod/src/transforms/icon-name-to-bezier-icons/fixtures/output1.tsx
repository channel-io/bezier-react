/* External dependencies */
import { Button } from '@channel.io/bezier-react'
import { ArrowLeftIcon, AllIcon } from '@channel.io/bezier-icons'

/* Internal dependencies */
import useTranslator from 'Hooks/useTranslator'

export default function CancelButton() {
  const { translate } = useTranslator()
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

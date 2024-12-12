/* External dependencies */
import { Button } from '@channel.io/bezier-react';

/* Internal dependencies */
import useTranslator from 'Hooks/useTranslator'

export default function CancelButton() {
  const { translate } = useTranslator()
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

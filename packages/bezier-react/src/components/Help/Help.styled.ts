/* Internal dependencies */
import { styled } from '~/src/foundation'
import { Tooltip as BaseTooltip } from '~/src/components/Tooltip'
import { Icon as BaseIcon } from '~/src/components/Icon'

export const Icon = styled(BaseIcon)``

export const Tooltip = styled(BaseTooltip)`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    > ${Icon} {
      color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};
    }
  }
`

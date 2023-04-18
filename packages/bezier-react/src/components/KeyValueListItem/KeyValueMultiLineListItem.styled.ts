import { styled } from '~/src/foundation'

import {
  KeyValueListItemContainer,
  KeyValueListItemWrapper,
} from './KeyValueListItem.common.styled'

export const Wrapper = styled(KeyValueListItemWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const KeyItemContainer = styled(KeyValueListItemContainer)`
  flex: 1;
  justify-content: space-between;
  height: 28px;
`

export const ValueItemContainer = styled(KeyValueListItemContainer)`
  flex: 1;
  min-height: 28px;
  padding: 0 6px;
`

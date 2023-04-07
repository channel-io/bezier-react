import {
  ellipsis,
  styled,
} from '~/src/foundation'

import {
  KeyValueListItemContainer,
  KeyValueListItemWrapper,
} from './KeyValueListItem.common.styled'

export const Wrapper = styled(KeyValueListItemWrapper)`
  display: flex;
  align-items: flex-start;
`

export const KeyItemContainer = styled(KeyValueListItemContainer)`
  flex: 1;
  ${ellipsis()};
`

export const ValueItemContainer = styled(KeyValueListItemContainer)`
  flex: 2;
  justify-content: space-between;
  min-height: 28px;
  ${ellipsis()};
`

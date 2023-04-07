import { styled } from '~/src/foundation'

import type { VariantProps } from '~/src/types/ComponentProps'

import { LegacyIcon } from '~/src/components/Icon'
import {
  StackItem as BaseStackItem,
  HStack,
} from '~/src/components/Stack'
import { Text } from '~/src/components/Text'

import {
  BACKGROUND_COLORS,
  ELEVATIONS,
  TEXT_COLORS,
} from './Banner.const'
import type { BannerVariant } from './Banner.types'

type BannerVariantProps = Required<VariantProps<BannerVariant>>

const BannerIcon = styled(LegacyIcon)``

const ContentWrapper = styled.div<BannerVariantProps>`
  color: ${({ foundation, variant }) => foundation?.theme?.[TEXT_COLORS[variant]]};
`

const Link = styled(Text)`
  margin-left: 2px;
  text-decoration: underline;
  cursor: pointer;
`

const Stack = styled(HStack)<BannerVariantProps>`
  width: auto;
  min-width: 200px;
  height: auto;
  padding: 12px;
  background-color: ${({ foundation, variant }) => foundation?.theme?.[BACKGROUND_COLORS[variant]]};

  ${({ foundation }) => foundation?.rounding?.round12}
  ${({ variant }) => ELEVATIONS[variant]}

  & + & {
    margin-top: 6px;
  }
`

const StackItem = styled(BaseStackItem)`
  height: 20px;
`

export default {
  BannerIcon,
  ContentWrapper,
  Link,
  Stack,
  StackItem,
}

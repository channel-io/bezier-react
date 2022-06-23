/* Internal dependencies */
import { styled } from 'Foundation'
import type { VariantProps } from 'Types/ComponentProps'
import {
  HStack,
  StackItem as BaseStackItem,
} from 'Components/Stack'
import { Icon } from 'Components/Icon'
import { Text } from 'Components/Text'
import { BACKGROUND_COLORS, TEXT_COLORS, ELEVATIONS } from './Banner.const'
import type { BannerVariant } from './Banner.types'

type BannerVariantProps = Required<VariantProps<BannerVariant>>

const BannerIcon = styled(Icon)``

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

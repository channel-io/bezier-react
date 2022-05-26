/* Internal dependencies */
import { styled } from 'Foundation'
import type { InterpolationProps } from 'Types/Foundation'
import type { VariantProps } from 'Types/ComponentProps'
import { Icon } from 'Components/Icon'
import { Text } from 'Components/Text'
import { BACKGROUND_COLORS, TEXT_COLORS, ELEVATIONS } from './Banner.const'
import type { BannerVariant } from './Banner.types'

type BannerVariantProps = Required<VariantProps<BannerVariant>>

const BannerIcon = styled(Icon)``

const ContentWrapper = styled.div<BannerVariantProps>`
  color: ${({ foundation, variant }) => foundation?.theme?.[TEXT_COLORS[variant]]};
`

const Dismiss = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  cursor: pointer;

  > * {
    margin: auto;
  }
`

const Link = styled(Text)`
  margin-left: 2px;
  text-decoration: underline;
  cursor: pointer;
`

const Wrapper = styled.div<BannerVariantProps & InterpolationProps>`
  display: flex;
  min-width: 200px;
  padding: 12px;
  background-color: ${({ foundation, variant }) => foundation?.theme?.[BACKGROUND_COLORS[variant]]};

  ${({ foundation }) => foundation?.rounding?.round12}
  ${({ variant }) => ELEVATIONS[variant]}

  ${({ interpolation }) => interpolation}

  > ${ContentWrapper} {
    flex: 1;
  }

  > ${BannerIcon} + ${ContentWrapper} {
    margin-left: 6px;
  }

  > ${Dismiss} {
    margin-left: 6px;
  }

  & + & {
    margin-top: 6px;
  }
`

export default {
  BannerIcon,
  ContentWrapper,
  Dismiss,
  Link,
  Wrapper,
}

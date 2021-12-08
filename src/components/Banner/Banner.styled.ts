/* Internal dependencies */
import { styled } from 'Foundation'
import type { InjectedInterpolation } from 'Types/Foundation'
import { Icon } from 'Components/Icon'
import { Text } from 'Components/Text'
import { BACKGROUND_COLORS, TEXT_COLORS, ELEVATIONS } from './Banner.const'
import type { BannerColorVariant } from './Banner.types'

const BannerIcon = styled(Icon)``
const ContentWrapper = styled.div<{
  colorVariant: BannerColorVariant
}>`
  color: ${({ foundation, colorVariant }) => foundation?.theme?.[TEXT_COLORS[colorVariant]]};
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

const Wrapper = styled.div<{
  colorVariant: BannerColorVariant
  interpolation?: InjectedInterpolation
}>`
  display: flex;
  min-width: 200px;
  padding: 12px;
  background-color: ${({ foundation, colorVariant }) => foundation?.theme?.[BACKGROUND_COLORS[colorVariant]]};

  ${({ foundation }) => foundation?.rounding?.round12}
  ${({ colorVariant }) => ELEVATIONS[colorVariant]}

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

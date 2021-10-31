/* Internal dependencies */
import type { InjectedInterpolation } from '../..'
import { styled } from '../../foundation'
import { Icon } from '../Icon'
import { Text } from '../Text'
import {
  BACKGROUND_COLORS,
  ELEVATIONS,
} from './Banner.const'
import type { BannerColorVariant } from './Banner.types'

const BannerIcon = styled(Icon)``
const Content = styled(Text)``
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

  > ${Content} {
    flex: 1;
  }

  > ${BannerIcon} + ${Content} {
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
  Content,
  Dismiss,
  Link,
  Wrapper,
}

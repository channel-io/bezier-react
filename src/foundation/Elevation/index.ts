/* Internal dependencies */
import { css } from '../FoundationStyledComponent'

const defaultInnerShadowStyle = 'inset 0 0 2px 0'
const defaultShadowStyle = '0 0 2px 1px'

const ev1 = (useSubTheme = false) => {
  const theme = useSubTheme ? 'subTheme' : 'theme'

  return css`
    background-color: ${({ foundation }) => foundation?.[theme]?.['bg-white-low']};
    box-shadow:
      ${defaultInnerShadowStyle} ${({ foundation }) => foundation?.[theme]?.['shdw-inner-base']},
      ${defaultShadowStyle} ${({ foundation }) => foundation?.[theme]?.['shdw-base']},
      0 1px 2px ${({ foundation }) => foundation?.[theme]?.['shdw-small']};
  `
}

const ev2 = (useSubTheme = false) => {
  const theme = useSubTheme ? 'subTheme' : 'theme'

  return css`
    background-color: ${({ foundation }) => foundation?.[theme]?.['bg-white-low']};
    box-shadow:
      ${defaultInnerShadowStyle} ${({ foundation }) => foundation?.[theme]?.['shdw-inner-base']},
      ${defaultShadowStyle} ${({ foundation }) => foundation?.[theme]?.['shdw-base']},
      0 2px 6px ${({ foundation }) => foundation?.[theme]?.['shdw-small']};
  `
}

const ev3 = (useSubTheme = false) => {
  const theme = useSubTheme ? 'subTheme' : 'theme'

  return css`
    background-color: ${({ foundation }) => foundation?.[theme]?.['bg-white-high']};
    box-shadow:
      ${defaultInnerShadowStyle} ${({ foundation }) => foundation?.[theme]?.['shdw-inner-base']},
      ${defaultShadowStyle} ${({ foundation }) => foundation?.[theme]?.['shdw-base']},
      0 4px 12px ${({ foundation }) => foundation?.[theme]?.['shdw-medium']};
  `
}

const ev4 = (useSubTheme = false) => {
  const theme = useSubTheme ? 'subTheme' : 'theme'

  return css`
    background-color: ${({ foundation }) => foundation?.[theme]?.['bg-white-high']};
    box-shadow:
      ${defaultInnerShadowStyle} ${({ foundation }) => foundation?.[theme]?.['shdw-inner-base']},
      ${defaultShadowStyle} ${({ foundation }) => foundation?.[theme]?.['shdw-base']},
      0 4px 20px ${({ foundation }) => foundation?.[theme]?.['shdw-large']};
  `
}

const ev5 = (useSubTheme = false) => {
  const theme = useSubTheme ? 'subTheme' : 'theme'

  return css`
    background-color: ${({ foundation }) => foundation?.[theme]?.['bg-white-high']};
    box-shadow:
      ${defaultInnerShadowStyle} ${({ foundation }) => foundation?.[theme]?.['shdw-inner-base']},
      ${defaultShadowStyle} ${({ foundation }) => foundation?.[theme]?.['shdw-base']},
      0 6px 40px ${({ foundation }) => foundation?.[theme]?.['shdw-xlarge']};
  `
}

const ev6 = (useSubTheme = false) => {
  const theme = useSubTheme ? 'subTheme' : 'theme'

  return css`
    background-color: ${({ foundation }) => foundation?.[theme]?.['bg-white-high']};
    box-shadow:
      ${defaultInnerShadowStyle} ${({ foundation }) => foundation?.[theme]?.['shdw-inner-base']},
      ${defaultShadowStyle} ${({ foundation }) => foundation?.[theme]?.['shdw-base']},
      0 12px 60px ${({ foundation }) => foundation?.[theme]?.['shdw-xlarge']};
  `
}

export const Elevation = {
  ev1,
  ev2,
  ev3,
  ev4,
  ev5,
  ev6,
}

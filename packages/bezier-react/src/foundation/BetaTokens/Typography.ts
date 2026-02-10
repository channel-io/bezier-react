/**
 * v3 (Beta) Typography
 *
 * main 브랜치의 packages/bezier-tokens/src/beta/global/typography.json +
 * packages/bezier-tokens/src/beta/semantic/typography.json 기반
 */

export const BetaFontFamily = {
  'sans-kr': [
    'Inter',
    'NotoSansKR',
    'Noto Sans KR',
    'NotoSansJP',
    'Noto Sans JP',
    '-apple-system',
    'BlinkMacSystemFont',
    'Helvetica Neue',
    'Segoe UI',
    'Roboto',
    'system-ui',
    'sans-serif',
  ].join(', '),
  'sans-jp': [
    'Inter',
    'NotoSansJP',
    'Noto Sans JP',
    'NotoSansKR',
    'Noto Sans KR',
    '-apple-system',
    'BlinkMacSystemFont',
    'Helvetica Neue',
    'Segoe UI',
    'Roboto',
    'system-ui',
    'sans-serif',
  ].join(', '),
  monospace: [
    'ui-monospace',
    'Cascadia Code',
    'Source Code Pro',
    'Menlo',
    'Consolas',
    'DejaVu Sans Mono',
    'monospace',
  ].join(', '),
} as const

export const BetaFontSize = {
  11: '11px',
  12: '12px',
  13: '13px',
  14: '14px',
  15: '15px',
  16: '16px',
  17: '17px',
  18: '18px',
  22: '22px',
  24: '24px',
  30: '30px',
  36: '36px',
} as const

export const BetaFontWeight = {
  400: '400',
  700: '700',
} as const

export const BetaLineHeight = {
  16: '16px',
  18: '18px',
  20: '20px',
  22: '22px',
  24: '24px',
  28: '28px',
  32: '32px',
  36: '36px',
  44: '44px',
} as const

export const BetaLetterSpacing = {
  normal: '0px',
  tight: '-0.1px',
  tighter: '-0.4px',
} as const

/**
 * 시맨틱 타이포그래피 프리셋
 * heading, text, display, code 카테고리별 조합 토큰
 */
export const BetaTypography = {
  // Display
  'display-large': {
    fontFamily: BetaFontFamily['sans-kr'],
    fontSize: BetaFontSize[36],
    fontWeight: BetaFontWeight[700],
    lineHeight: BetaLineHeight[44],
    letterSpacing: BetaLetterSpacing.tighter,
  },
  'display-medium': {
    fontFamily: BetaFontFamily['sans-kr'],
    fontSize: BetaFontSize[30],
    fontWeight: BetaFontWeight[700],
    lineHeight: BetaLineHeight[36],
    letterSpacing: BetaLetterSpacing.tighter,
  },

  // Heading
  'heading-xlarge': {
    fontFamily: BetaFontFamily['sans-kr'],
    fontSize: BetaFontSize[24],
    fontWeight: BetaFontWeight[700],
    lineHeight: BetaLineHeight[32],
    letterSpacing: BetaLetterSpacing.tighter,
  },
  'heading-large': {
    fontFamily: BetaFontFamily['sans-kr'],
    fontSize: BetaFontSize[22],
    fontWeight: BetaFontWeight[700],
    lineHeight: BetaLineHeight[28],
    letterSpacing: BetaLetterSpacing.tighter,
  },
  'heading-medium': {
    fontFamily: BetaFontFamily['sans-kr'],
    fontSize: BetaFontSize[18],
    fontWeight: BetaFontWeight[700],
    lineHeight: BetaLineHeight[24],
    letterSpacing: BetaLetterSpacing.normal,
  },
  'heading-small': {
    fontFamily: BetaFontFamily['sans-kr'],
    fontSize: BetaFontSize[17],
    fontWeight: BetaFontWeight[700],
    lineHeight: BetaLineHeight[24],
    letterSpacing: BetaLetterSpacing.tight,
  },
  'heading-xsmall': {
    fontFamily: BetaFontFamily['sans-kr'],
    fontSize: BetaFontSize[16],
    fontWeight: BetaFontWeight[700],
    lineHeight: BetaLineHeight[24],
    letterSpacing: BetaLetterSpacing.tight,
  },
  'heading-2xsmall': {
    fontFamily: BetaFontFamily['sans-kr'],
    fontSize: BetaFontSize[15],
    fontWeight: BetaFontWeight[700],
    lineHeight: BetaLineHeight[20],
    letterSpacing: BetaLetterSpacing.tight,
  },

  // Text
  'text-2xlarge': {
    fontFamily: BetaFontFamily['sans-kr'],
    fontSize: BetaFontSize[17],
    lineHeight: BetaLineHeight[24],
    letterSpacing: BetaLetterSpacing.tight,
  },
  'text-xlarge': {
    fontFamily: BetaFontFamily['sans-kr'],
    fontSize: BetaFontSize[16],
    lineHeight: BetaLineHeight[24],
    letterSpacing: BetaLetterSpacing.tight,
  },
  'text-large': {
    fontFamily: BetaFontFamily['sans-kr'],
    fontSize: BetaFontSize[15],
    lineHeight: BetaLineHeight[20],
    letterSpacing: BetaLetterSpacing.tight,
  },
  'text-medium': {
    fontFamily: BetaFontFamily['sans-kr'],
    fontSize: BetaFontSize[14],
    lineHeight: BetaLineHeight[18],
    letterSpacing: BetaLetterSpacing.normal,
  },
  'text-small': {
    fontFamily: BetaFontFamily['sans-kr'],
    fontSize: BetaFontSize[13],
    lineHeight: BetaLineHeight[18],
    letterSpacing: BetaLetterSpacing.normal,
  },
  'text-xsmall': {
    fontFamily: BetaFontFamily['sans-kr'],
    fontSize: BetaFontSize[12],
    lineHeight: BetaLineHeight[16],
    letterSpacing: BetaLetterSpacing.normal,
  },
  'text-2xsmall': {
    fontFamily: BetaFontFamily['sans-kr'],
    fontSize: BetaFontSize[11],
    lineHeight: BetaLineHeight[16],
    letterSpacing: BetaLetterSpacing.normal,
  },

  // Code
  'code-medium': {
    fontFamily: BetaFontFamily.monospace,
    fontSize: BetaFontSize[14],
    fontWeight: BetaFontWeight[400],
    lineHeight: BetaLineHeight[18],
    letterSpacing: BetaLetterSpacing.normal,
  },
  'code-small': {
    fontFamily: BetaFontFamily.monospace,
    fontSize: BetaFontSize[13],
    fontWeight: BetaFontWeight[400],
    lineHeight: BetaLineHeight[18],
    letterSpacing: BetaLetterSpacing.normal,
  },
} as const


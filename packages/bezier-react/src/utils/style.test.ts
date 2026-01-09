import {
  colorTokenCssVar,
  cssDimension,
  cssUrl,
  cssVar,
  px,
  tokenCssVar,
} from './style'

describe('style', () => {
  describe('px', () => {
    it('returns undefined for undefined input', () => {
      expect(px(undefined)).toBeUndefined()
    })

    it('returns "0" for 0 input', () => {
      expect(px(0)).toBe(0)
    })

    it('appends "px" to a non-zero number', () => {
      expect(px(10)).toBe('10px')
    })
  })

  describe('cssDimension', () => {
    it('returns undefined for undefined input', () => {
      expect(cssDimension(undefined)).toBeUndefined()
    })

    it('returns the input string as is', () => {
      expect(cssDimension('50%')).toBe('50%')
    })

    it('appends "px" to a non-zero number input', () => {
      expect(cssDimension(100)).toBe('100px')
    })

    it('returns "0" for 0 input', () => {
      expect(cssDimension(0)).toBe(0)
    })
  })

  describe('cssVar', () => {
    it('returns undefined for undefined input', () => {
      expect(cssVar(undefined)).toBeUndefined()
    })

    it('formats input as CSS variable', () => {
      expect(cssVar('padding')).toBe('var(--padding)')
    })
  })

  // Assuming tokenCssVar fundamentally calls cssVar, this test might seem redundant.
  // However, it's good practice to ensure that wrapper functions behave as expected.
  describe('tokenCssVar', () => {
    it('formats input as CSS variable', () => {
      expect(tokenCssVar('padding' as any)).toBe('var(--padding)')
    })
  })

  describe('colorTokenCssVar', () => {
    it('returns undefined for undefined input', () => {
      expect(colorTokenCssVar(undefined)).toBeUndefined()
    })

    it('formats beta semantic color tokens with color- prefix', () => {
      expect(colorTokenCssVar('text-neutral' as any)).toBe(
        'var(--color-text-neutral)'
      )
      expect(colorTokenCssVar('icon-neutral' as any)).toBe(
        'var(--color-icon-neutral)'
      )
      expect(colorTokenCssVar('fill-neutral-light' as any)).toBe(
        'var(--color-fill-neutral-light)'
      )
      expect(colorTokenCssVar('border-neutral' as any)).toBe(
        'var(--color-border-neutral)'
      )
      expect(colorTokenCssVar('surface' as any)).toBe('var(--color-surface)')
      expect(colorTokenCssVar('surface-high' as any)).toBe(
        'var(--color-surface-high)'
      )
      expect(colorTokenCssVar('dim-black-lightest' as any)).toBe(
        'var(--color-dim-black-lightest)'
      )
      expect(colorTokenCssVar('state-action' as any)).toBe(
        'var(--color-state-action)'
      )
      expect(colorTokenCssVar('elevation-base' as any)).toBe(
        'var(--color-elevation-base)'
      )
    })

    it('formats v1 semantic color tokens without color- prefix', () => {
      expect(colorTokenCssVar('bg-black-light' as any)).toBe(
        'var(--bg-black-light)'
      )
      expect(colorTokenCssVar('bgtxt-blue-normal' as any)).toBe(
        'var(--bgtxt-blue-normal)'
      )
      expect(colorTokenCssVar('bdr-black-dark' as any)).toBe(
        'var(--bdr-black-dark)'
      )
    })
  })

  describe('cssUrl', () => {
    it('formats a given URL string into CSS url() format', () => {
      const url = 'https://example.com/image.png'
      const expectedOutput = `url(${url})`
      expect(cssUrl(url)).toBe(expectedOutput)
    })

    it('returns undefined for undefined input', () => {
      expect(cssUrl()).toBeUndefined()
    })
  })
})

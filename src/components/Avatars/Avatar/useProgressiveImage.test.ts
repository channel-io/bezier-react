/* External dependencies */
import { renderHook } from '@testing-library/react-hooks'

/* Internal dependencies */
import useProgressiveImage, { CachedImage } from './useProgressiveImage'

describe('useProgressiveImage >', () => {
  const mockValidImageUrlFoo = 'valid_foo'
  const mockValidImageUrlBar = 'valid_bar'
  const mockInvalidImageUrl = 'invalid'
  const mockFallbackImageUrl = 'fallback'

  const mockImageCache = new Map<string, CachedImage>()

  mockImageCache.set(mockValidImageUrlFoo, { src: mockValidImageUrlFoo, isLoaded: true })
  mockImageCache.set(mockInvalidImageUrl, { src: mockInvalidImageUrl, isLoaded: false })

  it('should return giving url when imageCache.get(givingUrl).isLoaded is "true"', () => {
    const { result } = renderHook(() => useProgressiveImage(mockValidImageUrlFoo, mockFallbackImageUrl, mockImageCache))

    expect(result.current).toStrictEqual(mockValidImageUrlFoo)
  })

  it('should return fallback url when imageCache.get(givingUrl).isLoaded is "false"', () => {
    const { result } = renderHook(() => useProgressiveImage(mockInvalidImageUrl, mockFallbackImageUrl, mockImageCache))

    expect(result.current).toStrictEqual(mockFallbackImageUrl)
  })

  it('should update url when imageCache.get(url).isLoaded is "true"', () => {
    const { result, rerender } = renderHook(({ src, defaultSrc, imageCache }) =>
      useProgressiveImage(src, defaultSrc, imageCache), {
      initialProps: {
        src: mockValidImageUrlFoo,
        defaultSrc: mockFallbackImageUrl,
        imageCache: mockImageCache,
      },
    })

    expect(result.current).toStrictEqual(mockValidImageUrlFoo)

    mockImageCache.set(mockValidImageUrlBar, { src: mockValidImageUrlBar, isLoaded: true })

    rerender({
      src: mockValidImageUrlBar,
      defaultSrc: mockFallbackImageUrl,
      imageCache: mockImageCache,
    })

    expect(result.current).toStrictEqual(mockValidImageUrlBar)
  })
})

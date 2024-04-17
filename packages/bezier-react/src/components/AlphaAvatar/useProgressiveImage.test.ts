import { type RenderHookResult, waitFor } from '@testing-library/react'

import { renderHook } from '~/src/utils/test'

import useProgressiveImage from './useProgressiveImage'

const DELAY = 300
const TIME_OUT = DELAY + 1000
const IMAGE_URL_1 = 'image-url-1'
const IMAGE_URL_2 = 'image-url-2'
const IMAGE_URL_3 = 'image-url-3'
const FALLBACK_URL = 'fallback-url'

describe('useProgressiveImage ', () => {
  let rendered: RenderHookResult<
    string,
    { imageUrl: string; fallbackUrl: string }
  >
  const originalGlobalImage = window.Image

  beforeAll(() => {
    ;(window.Image as any) = class MockImage {
      onload = () => {}
      src = ''
      constructor() {
        setTimeout(() => {
          this.onload()
        }, DELAY)
        return this
      }
    }
  })

  afterAll(() => {
    window.Image = originalGlobalImage
  })

  beforeEach(() => {
    rendered = renderHook(
      ({ imageUrl, fallbackUrl }) => useProgressiveImage(imageUrl, fallbackUrl),
      {
        initialProps: {
          imageUrl: IMAGE_URL_1,
          fallbackUrl: FALLBACK_URL,
        },
      }
    )
  })

  it('should return fallback url at first', () => {
    const { result } = rendered

    expect(result.current).toStrictEqual(FALLBACK_URL)
  })

  it('should return image url after it loads', async () => {
    const { result } = rendered

    await waitFor(() => expect(result.current).toStrictEqual(IMAGE_URL_1), {
      timeout: TIME_OUT,
    })
  })

  it('should update image url when hook is rendered with different url', async () => {
    const { result, rerender } = rendered

    rerender({
      imageUrl: IMAGE_URL_2,
      fallbackUrl: FALLBACK_URL,
    })

    await waitFor(() => expect(result.current).toStrictEqual(IMAGE_URL_2), {
      timeout: TIME_OUT,
    })
  })

  it('should loads image url immediately when rerendered', async () => {
    const { rerender, result } = rendered

    rerender({
      imageUrl: IMAGE_URL_3,
      fallbackUrl: FALLBACK_URL,
    })

    await waitFor(() => expect(result.current).toStrictEqual(IMAGE_URL_3), {
      timeout: TIME_OUT,
    })

    rerender({
      imageUrl: IMAGE_URL_3,
      fallbackUrl: FALLBACK_URL,
    })

    expect(result.current).toStrictEqual(IMAGE_URL_3)
  })
})

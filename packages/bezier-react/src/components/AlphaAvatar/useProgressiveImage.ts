import { useEffect, useState } from 'react'

interface CachedImage {
  src: string
  isLoaded: boolean
}

const imageCache = new Map<string, CachedImage>()

function getCachedImage(src: string) {
  const cachedImage = imageCache.get(src)
  if (!cachedImage) {
    return null
  }
  return cachedImage
}

export default function useProgressiveImage(src: string, defaultSrc: string) {
  const [source, setSource] = useState<CachedImage | null>(() =>
    getCachedImage(src)
  )

  useEffect(
    function updateSource() {
      if (source?.src === src) {
        return undefined
      }

      const cachedImage = getCachedImage(src)

      if (cachedImage?.isLoaded) {
        setSource(cachedImage)
        return undefined
      }

      const image = new Image()
      image.src = src
      image.onload = loadImage(true)
      image.onerror = loadImage(false)

      function loadImage(isLoaded: boolean) {
        return () => {
          const loadedImage = {
            src,
            isLoaded,
          }
          setSource(loadedImage)
          imageCache.set(src, loadedImage)
        }
      }
    },
    [src, source]
  )

  if (!source || !source.isLoaded) {
    return defaultSrc
  }

  return source.src
}

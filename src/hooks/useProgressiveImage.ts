/* External dependencies */
import { useState, useEffect } from 'react'

enum ImageEventType {
  Load = 'load',
  Error = 'error',
}

interface CacheImage {
  src: string
  isLoaded: boolean
}

const imageCache = new Map<string, CacheImage>()

function getInitialSource(src: string) {
  const cachedImage = imageCache.get(src)
  if (!cachedImage) { return null }
  return cachedImage
}

export default function useProgressiveImage(src: string, defaultSrc: string) {
  const [source, setSource] = useState<CacheImage | null>(() => getInitialSource(src))

  useEffect(() => {
    if (source) { return undefined }

    const image = new Image()
    image.src = src

    function loadImage(event: Event) {
      const cachedImage = {
        src,
        isLoaded: event.type === ImageEventType.Load,
      }
      setSource(cachedImage)
      imageCache.set(src, cachedImage)
    }

    image.addEventListener(ImageEventType.Load, loadImage)
    image.addEventListener(ImageEventType.Error, loadImage)

    return function cleanup() {
      image.removeEventListener(ImageEventType.Load, loadImage)
      image.removeEventListener(ImageEventType.Error, loadImage)
    }
  }, [
    src,
    source,
  ])

  if (!source || !source.isLoaded) {
    return defaultSrc
  }

  return source.src
}


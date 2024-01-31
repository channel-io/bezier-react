import {
  useEffect,
  useState,
} from 'react'

enum ImageEventType {
  Load = 'load',
  Error = 'error',
}

export interface CachedImage {
  src: string
  isLoaded: boolean
}

type ImageCacheMap = Map<string, CachedImage>

const defaultImageCache = new Map<string, CachedImage>()

function getCachedImage(src: string, imageCache: ImageCacheMap) {
  const cachedImage = imageCache.get(src)
  if (!cachedImage) { return null }
  return cachedImage
}

export default function useProgressiveImage(
  src: string,
  defaultSrc: string,
  imageCache: ImageCacheMap = defaultImageCache,
) {
  const [source, setSource] = useState<CachedImage | null>(() => getCachedImage(src, imageCache))

  useEffect(function updateSource() {
    if (source?.src === src) { return undefined }

    const cachedImage = getCachedImage(src, imageCache)

    if (cachedImage?.isLoaded) {
      setSource(cachedImage)
      return undefined
    }

    const image = new Image()
    image.src = src

    function loadImage(event: Event) {
      const loadedImage = {
        src,
        isLoaded: event.type === ImageEventType.Load,
      }
      setSource(loadedImage)
      imageCache.set(src, loadedImage)
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
    imageCache,
  ])

  if (!source || !source.isLoaded) {
    return defaultSrc
  }

  return source.src
}


/* External dependencies */
import { useState, useEffect } from 'react'

interface CacheImage {
  src: string
  isLoaded: boolean
}

const LOAD = 'load'
const ERROR = 'error'

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
        isLoaded: event.type === LOAD,
      }
      setSource(cachedImage)
      imageCache.set(src, cachedImage)
    }

    image.addEventListener(LOAD, loadImage)
    image.addEventListener(ERROR, loadImage)

    return function cleanup() {
      image.removeEventListener(LOAD, loadImage)
      image.removeEventListener(ERROR, loadImage)
    }
  }, [
    src,
    source,
  ])

  if (!source) { return defaultSrc }

  return source.isLoaded ? source.src : defaultSrc
}


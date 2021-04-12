/* External dependencies */
import { useState, useEffect } from 'react'

export default function useProgressiveImage(src: string) {
  const [source, setSource] = useState<string | null>(null)

  useEffect(() => {
    const img = new Image()
    img.src = src

    function loadImage() {
      setSource(src)
    }

    img.addEventListener('load', loadImage)

    return function cleanup() {
      img.removeEventListener('load', loadImage)
    }
  }, [src])

  return source
}


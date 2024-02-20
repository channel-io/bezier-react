export const smoothCornersScript = `
class SmoothCorners {
  static get inputProperties() {
    return [
      'border-image-source',
      '--smooth-corners',
      '--smooth-corners-shadow',
      '--smooth-corners-bg-color',
      '--smooth-corners-padding',
      '--smooth-corners-radius-unit',
    ]
  }

  constructor() {
    this.superellipseCache = new Map()
  }

  trimPX(pixel) {
    return parseInt(pixel.replace('px', ''), 10)
  }

  splitValueAndUnit(value) {
    const regex = /([\\d.\\-+]+)\\s*(\\D*)/
    const matches = value.match(regex)
    return matches ? [matches[1], matches[2]] : [value, '']
  }

  superellipse(...args) {
    const sanitizedArgs = this.sanitizeSuperellipseArgs(...args)

    const cacheKey = this.getSuperellipseCacheKey(sanitizedArgs)

    if (this.superellipseCache.has(cacheKey)) {
      return [...this.superellipseCache.get(cacheKey)]
    }

    const result = this.computeSuperellipse(...sanitizedArgs)

    this.superellipseCache.set(cacheKey, result)

    return [...result]
  }

  sanitizeSuperellipseArgs(a, b, nX, nY) {
    if (nX > 100) { nX = 100 }
    if (nY > 100) { nY = 100 }
    if (nX < 0.00000000001) { nX = 0.00000000001 }
    if (nY < 0.00000000001) { nY = 0.00000000001 }

    return [a, b, nX, nY]
  }

  computeSuperellipse(a, b, nX, nY) {
    const nX2 = 2 / nX
    const nY2 = 2 / nY
    const steps = 360
    const step = (2 * Math.PI) / steps
    const points = t => {
      const cosT = Math.cos(t)
      const sinT = Math.sin(t)
      return {
        x: Math.abs(cosT) ** nX2 * a * Math.sign(cosT),
        y: Math.abs(sinT) ** nY2 * b * Math.sign(sinT),
      }
    }

    return Array.from({ length: steps + 1 }, (_, i) => points(i * step))
  }

  getSuperellipseCacheKey(args) {
    return args.join(':')
  }

  paint(ctx, geom, properties) {
    const backgroundImage = properties
      .get('border-image-source')

    const backgroundColor = properties
      .get('--smooth-corners-bg-color')
      .toString()

    const padding = properties
      .get('--smooth-corners-padding')
      .toString()

    const [offsetX, offsetY, blur, spread, color] = properties
      .get('--smooth-corners-shadow')
      .toString()
      .split(/,s*/)

    const halfWidth = geom.width / 2
    const halfHeight = geom.height / 2

    const baseN = properties
      .get('--smooth-corners')
      .toString()

    const targetWidth = geom.width - (2 * this.trimPX(padding))
    const targetHeight = geom.height - (2 * this.trimPX(padding))

    const [rValue, rUnit] = this.splitValueAndUnit(baseN)
    const targetR = rUnit === '%'
      ? (Number(rValue) / 100) * Math.min(targetWidth, targetHeight)
      : Number(rValue)

    const targetNX = targetWidth / targetR
    const targetNY = targetHeight / targetR

    const smooth = this.superellipse(
      halfWidth - this.trimPX(padding),
      halfHeight - this.trimPX(padding),
      parseFloat(targetNX, 10),
      parseFloat(targetNY, 10),
    )

    ctx.setTransform(1, 0, 0, 1, halfWidth, halfHeight)
    ctx.beginPath()

    ctx.shadowColor = null
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 0

    const trimedX = this.trimPX(offsetX) * 2
    const trimedY = this.trimPX(offsetY) * 2
    const trimedBlur = this.trimPX(blur)
    const trimedSpread = this.trimPX(spread)

    if (trimedBlur === 0) {
      ctx.strokeStyle = color
      ctx.lineWidth = trimedSpread * 2
    } else {
      ctx.shadowColor = color
      ctx.shadowOffsetX = trimedX
      ctx.shadowOffsetY = trimedY
      ctx.shadowBlur = trimedBlur * 2
    }

    smooth.forEach(({ x, y }, index) => {
      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    if (trimedBlur === 0) {
      ctx.stroke()
    }

    if (backgroundColor) {
      ctx.fillStyle = backgroundColor
      ctx.fill()
    }

    if (backgroundImage instanceof CSSImageValue) {
      smooth.forEach(({ x, y }, index) => {
        if (index === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })

      ctx.closePath()
      ctx.clip()

      ctx.drawImage(backgroundImage, -(targetWidth / 2), -(targetHeight / 2), targetWidth, targetHeight)
    }

    ctx.closePath()
  }
}

try {
  registerPaint('smooth-corners', SmoothCorners)
} catch (e) {
  // If the paint already exists, don't make it error.
  if (e instanceof TypeError) {
    throw e
  }
}

`

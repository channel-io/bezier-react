const smoothCornersScript = `
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

  trimPX(pixel) {
    return parseInt(pixel.replace('px', ''), 10)
  }

  superellipse(a, b, nX, nY) {
    if (nX > 100) nX = 100
    if (nY > 100) nY = 100
    if (nX < 0.00000000001) nX = 0.00000000001
    if (nY < 0.00000000001) nY = 0.00000000001

    const nX2 = 2 / nX
    const nY2 = 2 / nY
    const steps = 360
    const step = (2 * Math.PI) / steps
    const points = t => {
      const cosT = Math.cos(t)
      const sinT = Math.sin(t)
      return {
        x: Math.abs(cosT) ** nX2 * a * Math.sign(cosT),
        y: Math.abs(sinT) ** nY2 * b * Math.sign(sinT)
      }
    }
    return Array.from({ length: steps + 1 }, (_, i) => points(i * step))
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

    const boxShadow = properties
      .get('--smooth-corners-shadow')
      .toString()
      .split(/(?<=[^0-9]),/)
      .map(shadow => (
        shadow
          .split(/(?<=[^,]) /)
          .map(value => value.trim())
      ))

    const halfWidth = geom.width / 2
    const halfHeight = geom.height / 2

    const baseN = properties
      .get('--smooth-corners')
      .toString()

    const rUnit = properties
      .get('--smooth-corners-radius-unit')
      .toString()

    const targetWidth = geom.width - (2 * this.trimPX(padding))
    const targetHeight = geom.height - (2 * this.trimPX(padding))

    const targetR = (() => {
      switch (rUnit) {
        case 'string':
          return  (Number(baseN.replace('%', '')) / 100) * Math.min(targetWidth, targetHeight)
        case 'number':
        default:
          return Number(baseN)
      }
    })()

    const targetNX = targetWidth / Number(targetR)
    const targetNY = targetHeight / Number(targetR)

    const smooth = this.superellipse(
      halfWidth - this.trimPX(padding),
      halfHeight - this.trimPX(padding),
      parseFloat(targetNX, 10),
      parseFloat(targetNY, 10)
    )

    ctx.setTransform(1, 0, 0, 1, halfWidth, halfHeight)
    ctx.beginPath()

    boxShadow.forEach(([
      offsetX,
      offsetY,
      blur,
      spread,
      color,
    ]) => {
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
    })

    if (backgroundColor) {
      ctx.fillStyle = backgroundColor
      ctx.fill()
    }

    if (backgroundImage) {
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
registerPaint('smooth-corners', SmoothCorners)
`

export default smoothCornersScript

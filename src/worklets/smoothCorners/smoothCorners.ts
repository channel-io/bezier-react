const smoothCornersScript = `class SmoothCorners {
  static get inputProperties() {
    return [
      '--smooth-corners',
      '--smooth-corners-shadow',
      '--smooth-corners-bg-color',
    ]
  }

  trimPX(pixel) {
    return parseInt(pixel.replace('px', ''), 10)
  }

  superellipse(a, b, nX, nY) {
    // Origin from: https://github.com/wopian/smooth-corners
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
    const backgroundColor = properties
      .get('--smooth-corners-bg-color')
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

    const nX = properties
      .get('--smooth-corners')
      .toString()

    const width = geom.width / 2
    const height = geom.height / 2

    let ratio
    if (!width || !height) {
      ratio = 1
    } else {
      ratio = height / width
    }

    const ratioForTargetNX = ratio >= 1
      ? ratio
      : 1 / ratio

    const targetNX = nX * ratioForTargetNX
    const targetNY = targetNX * ratio

    const smooth = this.superellipse(
      width - 10,
      height - 10,
      parseFloat(targetNX, 10),
      parseFloat(targetNY, 10)
    )

    ctx.fillStyle = backgroundColor
    ctx.setTransform(1, 0, 0, 1, width, height)
    ctx.beginPath()

    ctx.strokeStyle = backgroundColor
    ctx.lineWidth = 1

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

      const trimedX = this.trimPX(offsetX)
      const trimedY = this.trimPX(offsetY)
      const trimedBlur = this.trimPX(blur)
      const trimedSpread = this.trimPX(spread)

      if (trimedBlur === 0) {
        ctx.strokeStyle = color
        ctx.lineWidth = trimedSpread
      } else {
        ctx.shadowColor = color
        ctx.shadowOffsetX = trimedX
        ctx.shadowOffsetY = trimedY
        ctx.shadowBlur = trimedBlur
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

    ctx.closePath()
    ctx.fill()
  }
}
registerPaint('smooth-corners', SmoothCorners)`

export default smoothCornersScript

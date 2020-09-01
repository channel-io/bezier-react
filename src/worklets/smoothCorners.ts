// Inspired from: https://github.com/wopian/smooth-corners

const smoothCornersScript = `class SmoothCorner {
  static get inputProperties() {
    return [
      '--smooth-corners',
    ]
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
    return Array.from({ length: steps }, (_, i) => points(i * step))
  }

  paint(canvasContext, geom, properties) {
    const [nX] = properties
      .get("--smooth-corners")
      .toString()
      .replace(/ /g, "")
      .split(",")

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
      width,
      height,
      parseFloat(targetNX, 10),
      parseFloat(targetNY, 10)
    )

    canvasContext.fillStyle = "#000"
    canvasContext.setTransform(1, 0, 0, 1, width, height)
    canvasContext.beginPath()

    smooth.forEach(({ x, y }, index) => {
      if (index === 0) {
        canvasContext.moveTo(x, y)
      } else {
        canvasContext.lineTo(x, y)
      }
    })

    canvasContext.closePath()
    canvasContext.fill()
  }
}
registerPaint('smooth-corners', SmoothCorner)`

export default smoothCornersScript

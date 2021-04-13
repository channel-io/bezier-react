/* External dependencies */
import { renderToStaticMarkup } from 'react-dom/server'

export function svgToDataUrl(element: JSX.Element) {
  return `"data:image/svg+xml,${encodeURIComponent(renderToStaticMarkup(element))}"`
}

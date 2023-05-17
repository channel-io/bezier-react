import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgLightning(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.526 12.5372L11.001 13.5732L9.174 19.7852L17.474 11.4622L12.999 10.4262L14.825 4.21423L6.526 12.5372ZM8.14599 23.0362C7.88299 23.0362 7.61799 22.9652 7.37599 22.8212C6.77599 22.4662 6.50499 21.7772 6.70099 21.1082L8.48399 15.0432L5.19799 14.2832C4.66799 14.1602 4.24499 13.7592 4.09499 13.2362C3.94399 12.7122 4.08899 12.1482 4.47399 11.7622L14.798 1.41023C15.289 0.916231 16.024 0.823231 16.624 1.17823C17.224 1.53423 17.496 2.22223 17.299 2.89123L15.515 8.95623L18.802 9.71723C19.332 9.84023 19.755 10.2412 19.905 10.7652C20.055 11.2882 19.91 11.8522 19.525 12.2382L9.20199 22.5902C8.90899 22.8842 8.52999 23.0362 8.14599 23.0362Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgLightning)

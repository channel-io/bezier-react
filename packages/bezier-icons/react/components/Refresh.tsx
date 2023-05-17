import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgRefresh(props: SVGProps<SVGSVGElement>) {
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
        d="M21 12C20.4477 12 20.0066 12.45 19.9381 12.998C19.4453 16.9398 16.0731 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C14.117 4 16.107 4.819 17.613 6.303L15.52 8.396C15.205 8.711 15.427 9.25 15.873 9.25H21.5C21.776 9.25 22 9.026 22 8.75V3.123C22 2.677 21.461 2.455 21.146 2.77L19.027 4.889C17.143 3.027 14.651 2 12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.177 22 21.4479 18.0455 21.9505 12.9986C22.0053 12.449 21.5523 12 21 12Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgRefresh)

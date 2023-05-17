import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowTurnLeftUp(props: SVGProps<SVGSVGElement>) {
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
        d="M6.79289 14.2071C7.18342 14.5976 7.81658 14.5976 8.20711 14.2071C8.59763 13.8166 8.59763 13.1834 8.20711 12.7929L5.41421 10H14C16.7614 10 19 12.2386 19 15V19C19 19.5523 19.4477 20 20 20C20.5523 20 21 19.5523 21 19V15C21 11.134 17.866 8 14 8H5.41421L8.20711 5.20711C8.59763 4.81658 8.59763 4.18342 8.20711 3.79289C7.81658 3.40237 7.18342 3.40237 6.79289 3.79289L2.29289 8.29289C1.90237 8.68342 1.90237 9.31658 2.29289 9.70711L6.79289 14.2071Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowTurnLeftUp)

import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowTurnLeftDown(props: SVGProps<SVGSVGElement>) {
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
        d="M7.79289 9.79289C8.18342 9.40237 8.81658 9.40237 9.20711 9.79289C9.59763 10.1834 9.59763 10.8166 9.20711 11.2071L6.41421 14L15 14C17.7614 14 20 11.7614 20 9L20 5C20 4.44772 20.4477 4 21 4C21.5523 4 22 4.44772 22 5L22 9C22 12.866 18.866 16 15 16L6.41421 16L9.20711 18.7929C9.59763 19.1834 9.59763 19.8166 9.20711 20.2071C8.81658 20.5976 8.18342 20.5976 7.79289 20.2071L3.29289 15.7071C2.90237 15.3166 2.90237 14.6834 3.29289 14.2929L7.79289 9.79289Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowTurnLeftDown)

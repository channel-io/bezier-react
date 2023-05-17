import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgErrorTriangle(props: SVGProps<SVGSVGElement>) {
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
        d="M20.1578 16.7369L13.2914 5.11679C12.7108 4.13425 11.2892 4.13425 10.7086 5.11679L3.84218 16.7369C3.25131 17.7368 3.97212 19 5.13357 19H18.8664C20.0279 19 20.7487 17.7368 20.1578 16.7369ZM15.0132 4.09934C13.6585 1.80674 10.3415 1.80673 8.98676 4.09933L2.12033 15.7194C0.741643 18.0526 2.42352 21 5.13357 21H18.8664C21.5765 21 23.2584 18.0526 21.8797 15.7195L15.0132 4.09934ZM12.0005 17.8C11.2278 17.8 10.6 17.1733 10.6 16.4005C10.6 15.6267 11.2278 15 12.0005 15C12.7733 15 13.4 15.6267 13.4 16.4005C13.4 17.1733 12.7733 17.8 12.0005 17.8ZM12 7C11.4477 7 11 7.44772 11 8V13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V8C13 7.44772 12.5523 7 12 7Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgErrorTriangle)

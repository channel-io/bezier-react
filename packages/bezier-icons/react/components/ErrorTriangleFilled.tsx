import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgErrorTriangleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M8.98676 4.09933C10.3415 1.80673 13.6585 1.80674 15.0132 4.09934L21.8797 15.7195C23.2584 18.0526 21.5765 21 18.8664 21H5.13357C2.42352 21 0.741643 18.0526 2.12033 15.7194L8.98676 4.09933ZM12.0005 18.8C11.2278 18.8 10.6 18.1733 10.6 17.4005C10.6 16.6267 11.2278 16 12.0005 16C12.7733 16 13.4 16.6267 13.4 17.4005C13.4 18.1733 12.7733 18.8 12.0005 18.8ZM12 6C11.4477 6 11 6.44772 11 7V13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V7C13 6.44772 12.5523 6 12 6Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgErrorTriangleFilled)

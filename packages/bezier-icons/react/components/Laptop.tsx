import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgLaptop(props: SVGProps<SVGSVGElement>) {
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
        d="M4 17H20V7H4V17ZM22 17V6.5C22 5.673 21.327 5 20.5 5H3.5C2.673 5 2 5.673 2 6.5V17H1C0.447715 17 0 17.4477 0 18C0 18.5523 0.447715 19 1 19H23C23.5523 19 24 18.5523 24 18C24 17.4477 23.5523 17 23 17H22Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgLaptop)

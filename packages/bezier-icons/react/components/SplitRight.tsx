import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSplitRight(props: SVGProps<SVGSVGElement>) {
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
        d="M5 6H19C19.5523 6 20 6.44771 20 7V17C20 17.5523 19.5523 18 19 18H5C4.44772 18 4 17.5523 4 17V7C4 6.44772 4.44772 6 5 6ZM2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7ZM12 7C11.4477 7 11 7.44772 11 8V16C11 16.5523 11.4477 17 12 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H12Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSplitRight)

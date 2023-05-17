import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgColumn(props: SVGProps<SVGSVGElement>) {
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
        d="M14 6H10V18H14V6ZM16 6V18H19C19.5523 18 20 17.5523 20 17V7C20 6.44771 19.5523 6 19 6H16ZM5 6H8V18H5C4.44772 18 4 17.5523 4 17V7C4 6.44772 4.44772 6 5 6ZM5 4C3.34315 4 2 5.34315 2 7V17C2 18.6569 3.34315 20 5 20H19C20.6569 20 22 18.6569 22 17V7C22 5.34315 20.6569 4 19 4H5Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgColumn)

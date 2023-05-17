import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgHeading(props: SVGProps<SVGSVGElement>) {
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
        d="M5 4C5 3.44772 5.44772 3 6 3H7C7.55228 3 8 3.44772 8 4V10.5H16V4C16 3.44772 16.4477 3 17 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H17C16.4477 21 16 20.5523 16 20V13.5H8V20C8 20.5523 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V4Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgHeading)

import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCommentFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M7 3C4.79086 3 3 4.79086 3 7V20.9597C3 22.2174 4.4549 22.9167 5.43704 22.131L8.80295 19.4383C9.15758 19.1546 9.5982 19 10.0523 19H17C19.2091 19 21 17.2091 21 15V7C21 4.79086 19.2091 3 17 3H7ZM7 9C7 8.44772 7.44772 8 8 8H16C16.5523 8 17 8.44772 17 9C17 9.55228 16.5523 10 16 10H8C7.44772 10 7 9.55228 7 9ZM7 13C7 12.4477 7.44772 12 8 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H8C7.44772 14 7 13.5523 7 13Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCommentFilled)

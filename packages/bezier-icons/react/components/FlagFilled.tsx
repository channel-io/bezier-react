import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgFlagFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M5 3C4.44772 3 4 3.44771 4 4V21C4 21.5523 4.44772 22 5 22C5.55228 22 6 21.5523 6 21V4C6 3.44772 5.55228 3 5 3ZM8 3C7.44772 3 7 3.44772 7 4V14C7 14.5523 7.44772 15 8 15H20.382C21.1253 15 21.6088 14.2177 21.2764 13.5528L19 9L21.2764 4.44721C21.6088 3.78231 21.1253 3 20.382 3H8Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgFlagFilled)

import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgButtonRoute(props: SVGProps<SVGSVGElement>) {
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
        d="M4 9V16H7V18H3.5C2.67157 18 2 17.3284 2 16.5V3H4V7H7V9H4Z"
      />
      <path
        fill="currentColor"
        d="M9.5 4C8.67157 4 8 4.67157 8 5.5V9.5C8 10.3284 8.67157 11 9.5 11H20.5C21.3284 11 22 10.3284 22 9.5V5.5C22 4.67157 21.3284 4 20.5 4H9.5Z"
      />
      <path
        fill="currentColor"
        d="M9.5 13C8.67157 13 8 13.6716 8 14.5V18.5C8 19.3284 8.67157 20 9.5 20H20.5C21.3284 20 22 19.3284 22 18.5V14.5C22 13.6716 21.3284 13 20.5 13H9.5Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgButtonRoute)

import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgBus(props: SVGProps<SVGSVGElement>) {
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
        d="M6 14.5C6 13.6716 6.67157 13 7.5 13C8.32843 13 9 13.6716 9 14.5C9 15.3284 8.32843 16 7.5 16C6.67157 16 6 15.3284 6 14.5Z"
      />
      <path
        fill="currentColor"
        d="M16.5 13C15.6716 13 15 13.6716 15 14.5C15 15.3284 15.6716 16 16.5 16C17.3284 16 18 15.3284 18 14.5C18 13.6716 17.3284 13 16.5 13Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 2C19.2091 2 21 3.79086 21 6V21C21 21.5523 20.5523 22 20 22H18C17.4477 22 17 21.5523 17 21V19H7V21C7 21.5523 6.55228 22 6 22H4C3.44772 22 3 21.5523 3 21V6C3 3.79086 4.79086 2 7 2H17ZM19 6V10H5V6L5.00549 5.85074C5.08183 4.81588 5.94564 4 7 4H17L17.1493 4.00549C18.1841 4.08183 19 4.94564 19 6ZM19 12H5V17H19V12Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBus)

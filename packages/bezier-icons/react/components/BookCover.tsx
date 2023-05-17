import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgBookCover(props: SVGProps<SVGSVGElement>) {
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
        d="M3 6C3 3.79086 4.79086 2 7 2H17C19.2091 2 21 3.79086 21 6V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V6ZM7 4C5.89543 4 5 4.89543 5 6V18C5 19.1046 5.89543 20 7 20V4ZM17 20H9V4H17C18.1046 4 19 4.89543 19 6V18C19 19.1046 18.1046 20 17 20ZM12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9H16C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7H12Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBookCover)

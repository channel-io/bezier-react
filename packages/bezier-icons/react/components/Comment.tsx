import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgComment(props: SVGProps<SVGSVGElement>) {
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
        d="M3 7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V15C21 17.2091 19.2091 19 17 19H10.0523C9.5982 19 9.15758 19.1546 8.80295 19.4383L5.43704 22.131C4.4549 22.9167 3 22.2174 3 20.9597V7ZM7 5C5.89543 5 5 5.89543 5 7V19.9194L7.55356 17.8765C8.26282 17.3091 9.14406 17 10.0523 17H17C18.1046 17 19 16.1046 19 15V7C19 5.89543 18.1046 5 17 5H7ZM8 9C8 8.44772 8.44772 8 9 8H15C15.5523 8 16 8.44772 16 9C16 9.55228 15.5523 10 15 10H9C8.44772 10 8 9.55228 8 9ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H9Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgComment)

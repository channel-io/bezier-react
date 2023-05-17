import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgBriefcase(props: SVGProps<SVGSVGElement>) {
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
        d="M20 14H4V8H20V14ZM20 18H4V16H20V18ZM15 6H9V5H15V6ZM17 6H20.5C21.327 6 22 6.673 22 7.5V18.5C22 19.327 21.327 20 20.5 20H3.5C2.673 20 2 19.327 2 18.5V7.5C2 6.673 2.673 6 3.5 6H7V4.5C7 3.673 7.673 3 8.5 3H15.5C16.327 3 17 3.673 17 4.5V6ZM14 13H10V11H14V13Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBriefcase)

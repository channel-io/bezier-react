import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgInbox(props: SVGProps<SVGSVGElement>) {
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
        d="M20 7V12H15C15 13.657 13.657 15 12 15C10.343 15 9 13.657 9 12H4V7H20ZM20.5 5H3.5C2.673 5 2 5.673 2 6.5V17.5C2 18.327 2.673 19 3.5 19H20.5C21.327 19 22 18.327 22 17.5V6.5C22 5.673 21.327 5 20.5 5Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgInbox)

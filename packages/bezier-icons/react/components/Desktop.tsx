import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgDesktop(props: SVGProps<SVGSVGElement>) {
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
        d="M4 14H20V6H4V14ZM20.5 4H3.5C2.673 4 2 4.673 2 5.5V14.5C2 15.327 2.673 16 3.5 16H11V18H9C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20H15C15.5523 20 16 19.5523 16 19C16 18.4477 15.5523 18 15 18H13V16H20.5C21.327 16 22 15.327 22 14.5V5.5C22 4.673 21.327 4 20.5 4Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgDesktop)

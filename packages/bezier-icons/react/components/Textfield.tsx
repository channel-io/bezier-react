import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTextfield(props: SVGProps<SVGSVGElement>) {
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
        d="M6 8C5.44772 8 5 8.44772 5 9V15C5 15.5523 5.44772 16 6 16C6.55228 16 7 15.5523 7 15V9C7 8.44772 6.55228 8 6 8Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5C2.34315 5 1 6.34315 1 8V16C1 17.6569 2.34315 19 4 19H20C21.6569 19 23 17.6569 23 16V8C23 6.34315 21.6569 5 20 5H4ZM20 7H4C3.44772 7 3 7.44772 3 8V16C3 16.5523 3.44772 17 4 17H20C20.5523 17 21 16.5523 21 16V8C21 7.44771 20.5523 7 20 7Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTextfield)

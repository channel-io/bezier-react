import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPersonCircleFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 2a8 8 0 0 1 5.736 13.577c-.656-2.454-2.985-4.281-5.736-4.281s-5.08 1.827-5.736 4.281A8 8 0 0 1 12 4Zm0 8.302a2.551 2.551 0 1 0 0-5.103 2.551 2.551 0 0 0 0 5.103Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPersonCircleFilled)

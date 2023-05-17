import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgInvert(props: SVGProps<SVGSVGElement>) {
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
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20V17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7V4C16.4183 4 20 7.58172 20 12ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17V7Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgInvert)

import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPoint(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM9 8H11H12.5C14.1569 8 15.5 9.34315 15.5 11C15.5 12.6569 14.1569 14 12.5 14H11V16H9V8ZM11 12H12.5C13.0523 12 13.5 11.5523 13.5 11C13.5 10.4477 13.0523 10 12.5 10H11V12Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPoint)

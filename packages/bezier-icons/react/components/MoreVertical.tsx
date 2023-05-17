import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMoreVertical(props: SVGProps<SVGSVGElement>) {
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
        d="M9.75 4.75C9.75 5.9875 10.7625 7 12 7C13.2375 7 14.25 5.9875 14.25 4.75C14.25 3.5125 13.2375 2.5 12 2.5C10.7625 2.5 9.75 3.5125 9.75 4.75ZM12 14.25C10.7625 14.25 9.75 13.2375 9.75 12C9.75 10.7625 10.7625 9.75 12 9.75C13.2375 9.75 14.25 10.7625 14.25 12C14.25 13.2375 13.2375 14.25 12 14.25ZM12 21.5C10.7625 21.5 9.75 20.4875 9.75 19.25C9.75 18.0125 10.7625 17 12 17C13.2375 17 14.25 18.0125 14.25 19.25C14.25 20.4875 13.2375 21.5 12 21.5Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMoreVertical)

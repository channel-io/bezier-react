import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMore(props: SVGProps<SVGSVGElement>) {
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
        d="M2.5 12C2.5 13.2375 3.5125 14.25 4.75 14.25C5.9875 14.25 7 13.2375 7 12C7 10.7625 5.9875 9.75 4.75 9.75C3.5125 9.75 2.5 10.7625 2.5 12ZM12 14.25C10.7625 14.25 9.75 13.2375 9.75 12C9.75 10.7625 10.7625 9.75 12 9.75C13.2375 9.75 14.25 10.7625 14.25 12C14.25 13.2375 13.2375 14.25 12 14.25ZM19.25 14.25C18.0125 14.25 17 13.2375 17 12C17 10.7625 18.0125 9.75 19.25 9.75C20.4875 9.75 21.5 10.7625 21.5 12C21.5 13.2375 20.4875 14.25 19.25 14.25Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMore)

import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgFaceWow(props: SVGProps<SVGSVGElement>) {
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
        d="M15.21 6.6C16.06 6.6 16.41 7.21 16.41 8.7C16.41 10.2 16.06 10.81 15.21 10.81C14.37 10.81 14.01 10.2 14.01 8.7C14.01 7.21 14.37 6.6 15.21 6.6ZM12 11C13.16 11 14.1 12.02 14.1 14C14.1 15.98 13.16 17 12 17C10.84 17 9.9 15.98 9.9 14C9.9 12.02 10.84 11 12 11ZM8.79 6.6C9.63 6.6 9.99 7.21 9.99 8.7C9.99 10.2 9.64 10.81 8.79 10.81C7.94 10.81 7.59 10.2 7.59 8.7C7.59 7.21 7.94 6.6 8.79 6.6ZM12 4C7.59 4 4 7.59 4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgFaceWow)

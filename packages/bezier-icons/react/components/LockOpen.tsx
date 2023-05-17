import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgLockOpen(props: SVGProps<SVGSVGElement>) {
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
        d="M5.5002 9.0001H16.0002V7C16.0002 4.79066 14.2093 3 12.0002 3C10.7245 3 9.55137 3.59927 8.79996 4.60032L7.20044 3.39968C8.32573 1.90053 10.0886 1 12.0002 1C15.3138 1 18.0002 3.68603 18.0002 7V9.0001H18.5002C19.3285 9.0001 20.0002 9.67181 20.0002 10.5001V20.5001C20.0002 21.3284 19.3285 22.0001 18.5002 22.0001H5.5002C4.67191 22.0001 4.0002 21.3284 4.0002 20.5001V10.5001C4.0002 9.67181 4.67191 9.0001 5.5002 9.0001ZM18.0002 11.0001V20.0001H6.0002V11.0001H18.0002ZM9.4982 14.5001H14.4982V16.5001H9.4982V14.5001Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgLockOpen)

import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCheckCircleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10.8092 16.4044L6.65524 12.4164L8.04024 10.9734L10.8242 13.6464L16.4752 8.3374L17.8442 9.7944L10.8092 16.4044ZM12.0002 2.0004C6.48624 2.0004 2.00024 6.4864 2.00024 12.0004C2.00024 17.5134 6.48624 22.0004 12.0002 22.0004C17.5142 22.0004 22.0002 17.5134 22.0002 12.0004C22.0002 6.4864 17.5142 2.0004 12.0002 2.0004Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCheckCircleFilled)

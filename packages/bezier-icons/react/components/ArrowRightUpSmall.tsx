import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowRightUpSmall(props: SVGProps<SVGSVGElement>) {
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
        d="M7.05022 16.9498C7.44074 17.3403 8.07391 17.3403 8.46443 16.9498L15.2426 10.1716V15.5356C15.2426 16.0878 15.6903 16.5356 16.2426 16.5356C16.7949 16.5356 17.2426 16.0878 17.2426 15.5356L17.2426 7.75738C17.2426 7.2051 16.7949 6.75738 16.2426 6.75739L8.46443 6.75739C7.91215 6.75739 7.46443 7.2051 7.46443 7.75739C7.46443 8.30967 7.91215 8.75739 8.46443 8.75739L13.8284 8.75738L7.05022 15.5356C6.65969 15.9261 6.65969 16.5592 7.05022 16.9498Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowRightUpSmall)

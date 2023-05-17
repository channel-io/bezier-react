import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowLeftUpSmall(props: SVGProps<SVGSVGElement>) {
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
        d="M16.9497 16.9498C17.3403 16.5592 17.3403 15.9261 16.9497 15.5356L10.1716 8.75738L15.5355 8.75739C16.0878 8.75739 16.5355 8.30967 16.5355 7.75738C16.5355 7.2051 16.0878 6.75738 15.5355 6.75739L7.75735 6.75739C7.20507 6.75738 6.75735 7.2051 6.75735 7.75739V15.5356C6.75735 16.0878 7.20507 16.5356 7.75735 16.5356C8.30964 16.5356 8.75735 16.0878 8.75735 15.5356V10.1716L15.5355 16.9498C15.9261 17.3403 16.5592 17.3403 16.9497 16.9498Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowLeftUpSmall)

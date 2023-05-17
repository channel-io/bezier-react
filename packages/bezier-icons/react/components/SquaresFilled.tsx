import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSquaresFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M6 7C4.34315 7 3 8.34315 3 10V18C3 19.6569 4.34315 21 6 21H14C15.6569 21 17 19.6569 17 18H10C7.79086 18 6 16.2091 6 14V7Z"
      />
      <path
        fill="currentColor"
        d="M7 6C7 4.34315 8.34315 3 10 3H18C19.6569 3 21 4.34315 21 6V14C21 15.6569 19.6569 17 18 17H10C8.34315 17 7 15.6569 7 14V6Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSquaresFilled)

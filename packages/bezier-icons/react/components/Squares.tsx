import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSquares(props: SVGProps<SVGSVGElement>) {
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
        d="M10 5H18C18.5523 5 19 5.44772 19 6V14C19 14.5523 18.5523 15 18 15H16H10C9.44772 15 9 14.5523 9 14V8V6C9 5.44772 9.44772 5 10 5ZM7 7V6C7 4.34315 8.34315 3 10 3H18C19.6569 3 21 4.34315 21 6V14C21 15.6569 19.6569 17 18 17H17V18C17 19.6569 15.6569 21 14 21H6C4.34315 21 3 19.6569 3 18V10C3 8.34315 4.34315 7 6 7H7ZM15 17V18C15 18.5523 14.5523 19 14 19H6C5.44772 19 5 18.5523 5 18V10C5 9.44772 5.44772 9 6 9H7V14C7 15.6569 8.34315 17 10 17H15Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSquares)

import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgData(props: SVGProps<SVGSVGElement>) {
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
        d="M18 5H6C5.44772 5 5 5.44772 5 6V7H19V6C19 5.44772 18.5523 5 18 5ZM3 7V9V13V15V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V15V13V9V7V6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6V7ZM19 9H5V13H19V9ZM5 15V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V15H5ZM6 11C6 10.4477 6.44772 10 7 10C7.55228 10 8 10.4477 8 11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11ZM7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18C7.55228 18 8 17.5523 8 17C8 16.4477 7.55228 16 7 16Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgData)

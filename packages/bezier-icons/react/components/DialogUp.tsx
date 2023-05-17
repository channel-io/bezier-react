import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgDialogUp(props: SVGProps<SVGSVGElement>) {
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
        d="M6 6C5.44772 6 5 6.44772 5 7V19C5 19.5523 4.55228 20 4 20C3.44772 20 3 19.5523 3 19V7C3 5.34315 4.34315 4 6 4H18C19.6569 4 21 5.34315 21 7V19C21 19.5523 20.5523 20 20 20C19.4477 20 19 19.5523 19 19V7C19 6.44772 18.5523 6 18 6H6Z"
      />
      <path
        fill="currentColor"
        d="M6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8V12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12V8Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgDialogUp)

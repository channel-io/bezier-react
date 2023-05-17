import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgDialogDown(props: SVGProps<SVGSVGElement>) {
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
        d="M18 18C18.5523 18 19 17.5523 19 17V5C19 4.44771 19.4477 4 20 4C20.5523 4 21 4.44771 21 5L21 17C21 18.6569 19.6569 20 18 20L6 20C4.34315 20 3 18.6569 3 17L3 5C3 4.44771 3.44771 4 4 4C4.55228 4 5 4.44771 5 5L5 17C5 17.5523 5.44771 18 6 18H18Z"
      />
      <path
        fill="currentColor"
        d="M18 16C18 16.5523 17.5523 17 17 17H7C6.44772 17 6 16.5523 6 16L6 12C6 11.4477 6.44772 11 7 11L17 11C17.5523 11 18 11.4477 18 12V16Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgDialogDown)

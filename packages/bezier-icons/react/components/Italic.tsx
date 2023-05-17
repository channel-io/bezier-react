import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgItalic(props: SVGProps<SVGSVGElement>) {
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
        d="M13.9776 2.99999H10C9.44772 2.99999 9 3.44771 9 3.99999C9 4.55228 9.44772 4.99999 10 4.99999H12.7192L9.21922 19H6C5.44772 19 5 19.4477 5 20C5 20.5523 5.44772 21 6 21H9.97908C9.99357 21.0003 10.008 21.0003 10.0224 21H14C14.5523 21 15 20.5523 15 20C15 19.4477 14.5523 19 14 19H11.2808L14.7808 4.99999H18C18.5523 4.99999 19 4.55228 19 3.99999C19 3.44771 18.5523 2.99999 18 2.99999H14.0209C14.0064 2.99968 13.992 2.99968 13.9776 2.99999Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgItalic)

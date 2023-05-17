import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgUnderline(props: SVGProps<SVGSVGElement>) {
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
        d="M7 4C7 3.44772 6.55228 3 6 3C5.44772 3 5 3.44772 5 4V11C5 14.866 8.13401 18 12 18C15.866 18 19 14.866 19 11V4C19 3.44772 18.5523 3 18 3C17.4477 3 17 3.44772 17 4V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V4ZM4 19C3.44772 19 3 19.4477 3 20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19H4Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgUnderline)

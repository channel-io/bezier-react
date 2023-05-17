import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgDropdown(props: SVGProps<SVGSVGElement>) {
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
        d="M16.2596 14.2593C16.0614 14.5536 15.6284 14.5536 15.4302 14.2593L13.0861 10.7793C12.8624 10.4472 13.1004 10 13.5008 10H18.1889C18.5894 10 18.8273 10.4472 18.6036 10.7793L16.2596 14.2593Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 8C1 6.34315 2.34315 5 4 5H20C21.6569 5 23 6.34315 23 8V16C23 17.6569 21.6569 19 20 19H4C2.34315 19 1 17.6569 1 16V8ZM4 7H20C20.5523 7 21 7.44771 21 8V16C21 16.5523 20.5523 17 20 17H4C3.44772 17 3 16.5523 3 16V8C3 7.44772 3.44772 7 4 7Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgDropdown)

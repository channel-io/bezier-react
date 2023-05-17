import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSwitch(props: SVGProps<SVGSVGElement>) {
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
        d="M9 4C4.58172 4 1 7.58172 1 12C1 16.4183 4.58172 20 9 20H15C19.4183 20 23 16.4183 23 12C23 7.58172 19.4183 4 15 4H9ZM15 6C11.6863 6 9 8.68629 9 12C9 15.3137 11.6863 18 15 18C18.3137 18 21 15.3137 21 12C21 8.68629 18.3137 6 15 6Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSwitch)

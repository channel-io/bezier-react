import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgWindowsRestore(props: SVGProps<SVGSVGElement>) {
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
        d="M16 8H10V9H15V14H16V8ZM15 15V17H7V9H9V7H17V15H15ZM8 10H14V16H8V10Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgWindowsRestore)

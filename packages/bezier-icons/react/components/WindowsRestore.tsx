import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgWindowsRestore(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 8h-6v1h5v5h1V8Zm-1 7v2H7V9h2V7h8v8h-2Zm-7-5h6v6H8v-6Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgWindowsRestore)

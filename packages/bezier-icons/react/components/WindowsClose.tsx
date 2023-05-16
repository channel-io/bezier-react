import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgWindowsClose(props: SVGProps<SVGSVGElement>) {
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
        d="m7.404 6.697-.707.707L11.293 12l-4.596 4.596.707.707L12 12.707l4.596 4.596.707-.707L12.707 12l4.596-4.596-.707-.707L12 11.293 7.404 6.697Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgWindowsClose)

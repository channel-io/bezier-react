import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgWindowsMinimize(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" d="M7 12h10v1H7z" />
    </svg>
  )
}
export default createBezierIcon(SvgWindowsMinimize)

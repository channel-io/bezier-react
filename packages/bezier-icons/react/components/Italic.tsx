import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgItalic(props: SVGProps<SVGSVGElement>) {
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
        d="M13.978 3H10a1 1 0 0 0 0 2h2.72l-3.5 14H6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-2.72l3.5-14H18a1 1 0 1 0 0-2h-4.022Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgItalic)

import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgHyphenBold(props: SVGProps<SVGSVGElement>) {
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
        d="M5 12C5 11.1716 5.67157 10.5 6.5 10.5H17.5C18.3284 10.5 19 11.1716 19 12C19 12.8284 18.3284 13.5 17.5 13.5H6.5C5.67157 13.5 5 12.8284 5 12Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgHyphenBold)

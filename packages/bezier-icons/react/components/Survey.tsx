import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSurvey(props: SVGProps<SVGSVGElement>) {
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
        d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h1a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h1Zm1 3a1 1 0 0 1-1-1H7a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1a1 1 0 0 1-1 1H9Zm-1 6h8v-2H8v2Zm0 4h8v-2H8v2Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSurvey)

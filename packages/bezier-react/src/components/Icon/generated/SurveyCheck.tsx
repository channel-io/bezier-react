import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSurveyCheck(props: SVGProps<SVGSVGElement>) {
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
        d="M9 2a1 1 0 0 0-1 1H7a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3.5h-2V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1h1a1 1 0 0 1 1 1v1.5h2V6a3 3 0 0 0-3-3h-1a1 1 0 0 0-1-1H9Zm5.154 14.068L10 12.08l1.385-1.444 2.784 2.673L19.82 8l1.369 1.457-7.035 6.611Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSurveyCheck)

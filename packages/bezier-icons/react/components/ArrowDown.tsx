import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowDown(props: SVGProps<SVGSVGElement>) {
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
        d="M3.285 12.163a1 1 0 0 1 1.413-.044l6.303 5.923L11 18V4a1 1 0 1 1 2 0v14c0 .023 0 .046-.002.069l6.33-5.95a1 1 0 0 1 1.37 1.458l-7.657 7.196a1.5 1.5 0 0 1-2.055 0L3.33 13.577a1 1 0 0 1-.044-1.414Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowDown)

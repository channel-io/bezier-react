import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgDialogDown(props: SVGProps<SVGSVGElement>) {
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
        d="M18 18a1 1 0 0 0 1-1V5a1 1 0 1 1 2 0v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a1 1 0 1 1 2 0v12a1 1 0 0 0 1 1h12Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18 16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgDialogDown)

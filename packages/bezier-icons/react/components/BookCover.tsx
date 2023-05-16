import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgBookCover(props: SVGProps<SVGSVGElement>) {
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
        d="M3 6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V6Zm4-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2V4Zm10 16H9V4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2ZM12 7a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBookCover)

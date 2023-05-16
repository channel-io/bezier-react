import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgBookEditing(props: SVGProps<SVGSVGElement>) {
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
        d="M7 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h2V4h8a2 2 0 0 1 2 2v3h2V6a4 4 0 0 0-4-4H7Zm0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2V4Zm4 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm10.198 5.296-1.494-1.493 1.494-1.494a1.056 1.056 0 0 1 1.492 1.494l-1.492 1.492ZM12.493 22H11v-1.493l7.958-7.958 1.493 1.493L12.493 22Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBookEditing)

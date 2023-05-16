import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPersonAdd(props: SVGProps<SVGSVGElement>) {
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
        d="M17.998 4a1 1 0 1 1 2 0v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0V8h-2a1 1 0 1 1 0-2h2V4ZM12.58 8.6a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0Zm-1.6 3.6a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Zm.004 2.8a6.004 6.004 0 0 1 5.659 4H5.325c.824-2.33 3.047-4 5.659-4Zm7.477 6c.285 0 .524-.24.506-.524a8 8 0 0 0-15.966 0 .504.504 0 0 0 .506.524H18.46Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPersonAdd)

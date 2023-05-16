import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgVoicemail(props: SVGProps<SVGSVGElement>) {
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
        d="M10 15a5 5 0 1 0-4 2h12a5 5 0 1 0-4-2h-4Zm-4 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgVoicemail)

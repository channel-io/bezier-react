import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgWindowsClose(props: SVGProps<SVGSVGElement>) {
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
        d="M7.4038 6.6967L6.69669 7.40381L11.2929 12L6.69669 16.5962L7.4038 17.3033L12 12.7071L16.5962 17.3033L17.3033 16.5962L12.7071 12L17.3033 7.40381L16.5962 6.6967L12 11.2929L7.4038 6.6967Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgWindowsClose)

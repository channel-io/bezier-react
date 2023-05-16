import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTriangleUpdown(props: SVGProps<SVGSVGElement>) {
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
        d="M12.378 4.436a.5.5 0 0 0-.756 0l-4.46 5.15a.25.25 0 0 0 .19.414h9.297a.25.25 0 0 0 .189-.414l-4.46-5.15ZM12.378 19.564a.5.5 0 0 1-.756 0l-4.46-5.15a.25.25 0 0 1 .19-.414h9.297a.25.25 0 0 1 .189.414l-4.46 5.15Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTriangleUpdown)

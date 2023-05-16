import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgImageFailed(props: SVGProps<SVGSVGElement>) {
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
        d="M18.986 19H7.109l1-1h9.877v-6l-2.583-1.294 3.583-3.584V19Zm1.839-16.546-.695.696h-.002L18.278 5h.002l-1.708 1.707-4.002 4.003-.005.002-6.579 6.58v.002l-1 1v-.003l-1.85 1.85.001.002-.696.696 1.414 1.414L5.109 21h14.377c.827 0 1.5-.673 1.5-1.5V5.122l1.254-1.254-1.415-1.414ZM7.986 10a2 2 0 1 0-.001-4.001 2 2 0 0 0 .001 4.001Zm8.878-5H4.986v11.878l-2 2V4.5c0-.827.673-1.5 1.5-1.5h14.378l-2 2Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgImageFailed)

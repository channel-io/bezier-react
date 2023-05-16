import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCloudDownload(props: SVGProps<SVGSVGElement>) {
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
        d="M12 6a4 4 0 0 0-3.98 3.599l-.09.901H6.25a3.25 3.25 0 0 0 0 6.5H7a1 1 0 1 1 0 2h-.75a5.25 5.25 0 0 1-.061-10.5 6.002 6.002 0 0 1 11.01-1.497 6 6 0 0 1-.2 11.997 1 1 0 1 1 0-2 4 4 0 0 0 0-8h-1.07l-.261-.6A4.001 4.001 0 0 0 12 6Zm.707 12.707a1 1 0 0 1-1.414 0L8.366 15.78a.8.8 0 0 1 .565-1.366H11V11a1 1 0 1 1 2 0v3.414h2.069a.8.8 0 0 1 .565 1.366l-2.927 2.927Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCloudDownload)

import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCloudUpload(props: SVGProps<SVGSVGElement>) {
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
        d="M12 6a4 4 0 0 0-3.98 3.599l-.09.901H6.25a3.25 3.25 0 0 0 0 6.5H8a1 1 0 1 1 0 2H6.25a5.25 5.25 0 0 1-.061-10.5 6.002 6.002 0 0 1 11.01-1.497 6 6 0 0 1-.2 11.997h-1a1 1 0 1 1 0-2h1a4 4 0 0 0 0-8h-1.07l-.261-.6A4.001 4.001 0 0 0 12 6Zm-.707 4.293a1 1 0 0 1 1.414 0l2.927 2.927a.8.8 0 0 1-.566 1.366H13V18a1 1 0 1 1-2 0v-3.414H8.93a.8.8 0 0 1-.565-1.366l2.927-2.927Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCloudUpload)

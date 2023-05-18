import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgNote(props: SVGProps<SVGSVGElement>) {
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
        d="M4.5 21h7.292c.398 0 .78-.158 1.061-.44l7.708-7.707a1.5 1.5 0 0 0 .44-1.06V4.5A1.5 1.5 0 0 0 19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21Zm.5-2V5h14v6h-6.5a1.5 1.5 0 0 0-1.5 1.5V19H5Zm8-1.415L17.586 13H13v4.585Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgNote)

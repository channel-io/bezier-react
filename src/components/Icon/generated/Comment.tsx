import * as React from 'react'
import { SVGProps } from 'react'

function SvgComment(props: SVGProps<SVGSVGElement>) {
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
        d="M8.276 17H19V5H5v14.73L8.276 17ZM9 19h10.5a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 19.5 3h-15A1.5 1.5 0 0 0 3 4.5v17.365a1 1 0 0 0 1.64.768L9 19ZM8 8h8v2H8V8Zm8 4H8v2h8v-2Z"
      />
    </svg>
  )
}

export default SvgComment

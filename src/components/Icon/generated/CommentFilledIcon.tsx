import * as React from 'react'
import { SVGProps } from 'react'

function SvgCommentFilledIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9 19h10.5a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 19.5 3h-15A1.5 1.5 0 0 0 3 4.5v17.365a1 1 0 0 0 1.64.768L9 19ZM7 8h10v2H7V8Zm10 4H7v2h10v-2Z"
      />
    </svg>
  )
}

export default SvgCommentFilledIcon

import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgVolumeOff(props: SVGProps<SVGSVGElement>) {
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
        d="M9.768 7.647 13 10.88V4.414L9.768 7.647ZM15 12.88l7.253 7.253-1.414 1.414L2.453 3.161l1.414-1.414 4.486 4.486 3.94-3.94C12.48 2.106 12.734 2 13 2h1a1 1 0 0 1 1 1v9.88Zm-6.293 2.414L13 19.586v-4.465l2 2v3.88a1 1 0 0 1-1 1h-1a.997.997 0 0 1-.707-.294L7.586 17H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1.88l2 2H4v6h4c.265 0 .52.106.707.293Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgVolumeOff)

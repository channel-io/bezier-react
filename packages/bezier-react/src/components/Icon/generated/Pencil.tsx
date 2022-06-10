import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgPencil(props: SVGProps<SVGSVGElement>) {
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
        d="M16.777 10.395 6.675 20.496l-3.398-.014v-3.146l10.29-10.152 3.21 3.211Zm1.414-1.414 1.385-1.385a2.257 2.257 0 0 0-3.181-3.202L14.99 5.78l3.2 3.2Zm2.799.03L7.5 22.5l-5.227-.023a1 1 0 0 1-.996-1V16.5L14.99 2.97a4.257 4.257 0 0 1 6 6.04Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgPencil)

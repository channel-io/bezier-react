import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgPinFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M19.561 10.901c1.432-.451 1.875-2.26.814-3.322l-3.993-3.992c-1.058-1.058-2.86-.623-3.318.801l-.562 1.748a2 2 0 0 1-.49.802l-1.573 1.573a2 2 0 0 1-1.414.585H5.251a2 2 0 0 0-1.494.67l-.099.112a1 1 0 0 0 .04 1.372l3.808 3.807-5.213 5.213a1 1 0 0 0 1.414 1.415l5.213-5.213 3.844 3.845a1 1 0 0 0 1.437-.024l.112-.12a2 2 0 0 0 .54-1.367v-3.881a2 2 0 0 1 .586-1.415l1.568-1.567a2 2 0 0 1 .814-.494l1.74-.548Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgPinFilled)

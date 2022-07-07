import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgDistribute(props: SVGProps<SVGSVGElement>) {
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
        d="M21.646 6.646a.5.5 0 0 1 0 .708l-3.622 3.622A.6.6 0 0 1 17 10.55V8h-2.11a1 1 0 0 0-.743.331L10.845 12l3.302 3.669a1 1 0 0 0 .744.331H17v-2.399a.6.6 0 0 1 1.024-.424l3.622 3.622a.5.5 0 0 1 0 .707l-3.622 3.622A.6.6 0 0 1 17 20.704V18h-2.11a3 3 0 0 1-2.23-.993L9.354 13.33A1 1 0 0 0 8.609 13H3a1 1 0 1 1 0-2h5.61a1 1 0 0 0 .743-.331l3.308-3.676A3 3 0 0 1 14.89 6H17V3.449a.6.6 0 0 1 1.024-.425l3.622 3.622Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgDistribute)

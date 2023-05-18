import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPieChart(props: SVGProps<SVGSVGElement>) {
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
        d="M13 12a1 1 0 0 1-1-1V3c0-.552.45-1.005.999-.95 4.718.47 8.482 4.233 8.952 8.951.055.55-.398.999-.95.999h-8Zm-1 8c3.625 0 6.841-2.515 7.742-6.007h2.048c-.007.034-.012.068-.017.102-.006.043-.012.085-.022.127C20.725 18.728 16.624 22 12 22 6.486 22 2 17.514 2 12c0-4.623 3.271-8.725 7.778-9.75.04-.01.08-.016.12-.021.032-.005.063-.009.094-.015v2.048C6.508 5.17 4 8.382 4 12c0 4.411 3.589 8 8 8Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPieChart)

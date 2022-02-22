import * as React from 'react'
import { SVGProps } from 'react'

function SvgTrendingDown(props: SVGProps<SVGSVGElement>) {
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
        d="m11.634 17.849-5.166-5.167A.4.4 0 0 1 6.751 12H10V6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V12h3.25a.4.4 0 0 1 .282.682l-5.165 5.167a.518.518 0 0 1-.732 0Z"
      />
    </svg>
  )
}

export default SvgTrendingDown

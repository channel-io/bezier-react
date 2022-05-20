import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgArrowLeft(props: SVGProps<SVGSVGElement>) {
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
        d="M12.267 20.742a1 1 0 0 0 .044-1.413L6.363 13H20a1 1 0 1 0 0-2H6.389l5.922-6.302a1 1 0 0 0-1.458-1.37l-7.196 7.658a1.5 1.5 0 0 0 0 2.055l7.196 7.657a1 1 0 0 0 1.414.044Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgArrowLeft)

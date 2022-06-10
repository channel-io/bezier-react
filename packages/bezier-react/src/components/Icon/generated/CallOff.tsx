import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgCallOff(props: SVGProps<SVGSVGElement>) {
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
        d="M22.5 13.478C22.5 11.196 19.304 8 12 8S1.5 11.196 1.5 13.478c0 1.37.815 2.557 1.826 2.74.913.182 2.766-.027 3.652-.914.913-.913.458-2.758.913-3.195C8.347 11.67 10 11 12 11s3.653.67 4.109 1.109c.455.438 0 2.282.913 3.195.886.887 2.739 1.096 3.652.913 1.01-.182 1.826-1.37 1.826-2.739Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgCallOff)

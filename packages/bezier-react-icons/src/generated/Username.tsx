import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgUsername(props: SVGProps<SVGSVGElement>) {
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
        d="M10.363 19.838c1.737.342 3.448.135 4.968-.562l.834 1.818c-1.9.871-4.038 1.13-6.188.706-4.089-.804-7.163-3.992-7.84-8.114A10.011 10.011 0 0 1 13.687 2.138c4.212.691 7.577 4.117 8.2 8.342a10.024 10.024 0 0 1-1.052 6.21c-.719 1.351-2.363 1.922-3.784 1.345a3.015 3.015 0 0 1-1.727-1.837 5.347 5.347 0 0 1-3.606 1.4c-3.019 0-5.451-2.513-5.451-5.598s2.432-5.598 5.45-5.598a5.34 5.34 0 0 1 3.452 1.264v-.43h2v8.004c0 .414.25.786.634.942.483.196 1.035.004 1.267-.431.797-1.5 1.1-3.219.84-4.979-.497-3.365-3.194-6.11-6.547-6.66a8.011 8.011 0 0 0-9.25 9.25c.541 3.3 2.983 5.833 6.25 6.476ZM15.168 12c0 1.994-1.553 3.598-3.451 3.598-1.9 0-3.451-1.604-3.451-3.598 0-1.995 1.551-3.598 3.45-3.598 1.9 0 3.452 1.604 3.452 3.598Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgUsername)

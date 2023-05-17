import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgShine(props: SVGProps<SVGSVGElement>) {
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
        d="M17.7298 10.4638C17.6432 10.6659 17.3568 10.6659 17.2702 10.4638L16.15 7.85L13.5362 6.72978C13.3341 6.6432 13.3341 6.35679 13.5362 6.27021L16.15 5.15L17.2702 2.53616C17.3568 2.33414 17.6432 2.33414 17.7298 2.53616L18.85 5.15L21.4638 6.27021C21.6659 6.35679 21.6659 6.6432 21.4638 6.72978L18.85 7.85L17.7298 10.4638Z"
      />
      <path
        fill="currentColor"
        d="M10.2276 21.4993C10.1388 21.6947 9.86123 21.6947 9.77241 21.4993L7.5 16.5L2.50071 14.2276C2.30531 14.1388 2.30531 13.8612 2.50071 13.7724L7.5 11.5L9.77241 6.5007C9.86123 6.3053 10.1388 6.3053 10.2276 6.5007L12.5 11.5L17.4993 13.7724C17.6947 13.8612 17.6947 14.1388 17.4993 14.2276L12.5 16.5L10.2276 21.4993Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgShine)

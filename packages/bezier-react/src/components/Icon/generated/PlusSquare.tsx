import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgPlusSquare')
function SvgPlusSquare(props: SVGProps<SVGSVGElement>) {
  const Svg = (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="currentColor" d="M13 13h4v-2h-4V7h-2v4H7v2h4v4h2v-4Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.643 3h-3.286C9.273 3 8.4 3 7.691 3.058c-.728.06-1.369.185-1.96.487A5 5 0 0 0 3.544 5.73c-.302.592-.428 1.233-.487 1.961C3 8.4 3 9.273 3 10.357v3.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487C8.4 21 9.273 21 10.357 21h3.286c1.084 0 1.958 0 2.666-.058.729-.06 1.369-.185 1.961-.487a5 5 0 0 0 2.185-2.185c.302-.592.428-1.232.487-1.961C21 15.6 21 14.727 21 13.643v-3.286c0-1.084 0-1.958-.058-2.666-.06-.728-.185-1.369-.487-1.96a5 5 0 0 0-2.185-2.186c-.592-.302-1.232-.428-1.961-.487C15.6 3 14.727 3 13.643 3ZM6.638 5.327c.263-.134.611-.226 1.216-.276C8.471 5.001 9.264 5 10.4 5h3.2c1.137 0 1.929 0 2.546.051.605.05.953.142 1.216.276a3 3 0 0 1 1.311 1.311c.134.263.226.611.276 1.216.05.617.051 1.41.051 2.546v3.2c0 1.137 0 1.929-.051 2.546-.05.605-.142.953-.276 1.216a3 3 0 0 1-1.311 1.311c-.263.134-.611.226-1.216.276-.617.05-1.41.051-2.546.051h-3.2c-1.137 0-1.929 0-2.546-.051-.605-.05-.953-.142-1.216-.276a3 3 0 0 1-1.311-1.311c-.134-.263-.226-.611-.276-1.216C5.001 15.529 5 14.736 5 13.6v-3.2c0-1.137 0-1.929.051-2.546.05-.605.142-.953.276-1.216a3 3 0 0 1 1.311-1.311Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgPlusSquare)

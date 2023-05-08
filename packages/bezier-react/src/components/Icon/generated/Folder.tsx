import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgFolder')
function SvgFolder(props: SVGProps<SVGSVGElement>) {
  const Svg = (
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
        d="M5 3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-6.172a1 1 0 0 1-.707-.293l-.828-.828A3 3 0 0 0 9.172 3H5Zm5.586 3-.707-.707A1 1 0 0 0 9.172 5H5a1 1 0 0 0-1 1v1.17c.313-.11.65-.17 1-.17h4.172a1 1 0 0 0 .707-.293L10.586 6ZM4 10v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-6.172a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 9.172 9H5a1 1 0 0 0-1 1Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgFolder)

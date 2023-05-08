import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgMore')
function SvgMore(props: SVGProps<SVGSVGElement>) {
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
        d="M2.5 12a2.257 2.257 0 0 0 2.25 2.25A2.257 2.257 0 0 0 7 12a2.257 2.257 0 0 0-2.25-2.25A2.257 2.257 0 0 0 2.5 12Zm9.5 2.25A2.257 2.257 0 0 1 9.75 12 2.257 2.257 0 0 1 12 9.75 2.257 2.257 0 0 1 14.25 12 2.257 2.257 0 0 1 12 14.25Zm7.25 0A2.257 2.257 0 0 1 17 12a2.257 2.257 0 0 1 2.25-2.25A2.257 2.257 0 0 1 21.5 12a2.257 2.257 0 0 1-2.25 2.25Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgMore)

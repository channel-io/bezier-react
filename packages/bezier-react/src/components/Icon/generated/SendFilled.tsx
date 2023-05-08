import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgSendFilled')
function SvgSendFilled(props: SVGProps<SVGSVGElement>) {
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
        d="m21.324 11.116-15.588-9a1 1 0 0 0-1.471 1.106l1.92 7.774 11.145.636v.702l-11.148.662-1.976 7.775a.998.998 0 0 0 .97 1.246c.171 0 .344-.044.5-.133l15.648-9.036a1 1 0 0 0 0-1.732Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgSendFilled)

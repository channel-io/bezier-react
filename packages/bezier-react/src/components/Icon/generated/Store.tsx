import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgStore')
function SvgStore(props: SVGProps<SVGSVGElement>) {
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
        d="M20.5 3h-17A1.5 1.5 0 0 0 2 4.5v4.927l.513.491c.156.142.319.273.487.392v9.19l.007.145A1.5 1.5 0 0 0 4.5 21h15l.145-.007A1.5 1.5 0 0 0 21 19.5v-9.19c.169-.12.331-.25.488-.393L22 9.422V4.5A1.5 1.5 0 0 0 20.5 3ZM19 11.168a5.194 5.194 0 0 1-3.908-.786l-.103-.074-.085.06a5.206 5.206 0 0 1-5.833-.008l-.078-.055-.084.06A5.21 5.21 0 0 1 5 11.164V19h3v-6h8v6h3v-7.832ZM14 19v-4h-4v4h4Zm6-14v3.556l-.026.022A3.2 3.2 0 0 1 16 8.566V7h-2v1.552a3.201 3.201 0 0 1-4 .013V7H8v1.55a3.204 3.204 0 0 1-3.818.143L4 8.556V5h16Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgStore)

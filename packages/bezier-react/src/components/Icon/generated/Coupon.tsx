import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgCoupon')
function SvgCoupon(props: SVGProps<SVGSVGElement>) {
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
        d="M20.5 5A1.5 1.5 0 0 1 22 6.5v4a.5.5 0 0 1-.5.5H21a1 1 0 0 0-.117 1.993L21 13h.5a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 17.5v-4a.5.5 0 0 1 .5-.5H3a1 1 0 0 0 .117-1.993L3 11h-.5a.5.5 0 0 1-.5-.5v-4A1.5 1.5 0 0 1 3.5 5h17ZM8 7H4v2.172l.04.013a3.002 3.002 0 0 1 1.955 2.633L6 12a3 3 0 0 1-1.817 2.758L4 14.829V17h4v-2h2v2h10v-2.173l-.04-.012a3.002 3.002 0 0 1-1.955-2.633L18 12a3 3 0 0 1 1.817-2.758L20 9.17V7H10v2H8V7Zm2 4H8v2h2v-2Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgCoupon)

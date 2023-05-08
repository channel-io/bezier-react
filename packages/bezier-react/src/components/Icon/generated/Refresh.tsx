import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgRefresh')
function SvgRefresh(props: SVGProps<SVGSVGElement>) {
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
        d="M21 12c-.552 0-.993.45-1.062.998C19.445 16.94 16.073 20 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8c2.117 0 4.107.819 5.613 2.303L15.52 8.396a.5.5 0 0 0 .353.854H21.5a.5.5 0 0 0 .5-.5V3.123a.5.5 0 0 0-.854-.353l-2.119 2.119A9.933 9.933 0 0 0 12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c5.177 0 9.448-3.954 9.95-9.001.055-.55-.398-.999-.95-.999Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgRefresh)

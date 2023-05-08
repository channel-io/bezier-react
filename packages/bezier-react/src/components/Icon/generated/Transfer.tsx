import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgTransfer')
function SvgTransfer(props: SVGProps<SVGSVGElement>) {
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
        d="M17 10.069V8H5a1 1 0 0 1 0-2h12V3.931a.8.8 0 0 1 1.366-.565l2.927 2.927a1 1 0 0 1 0 1.414l-2.927 2.927A.8.8 0 0 1 17 10.07ZM7 18v2.068a.8.8 0 0 1-1.366.566l-2.927-2.927a1 1 0 0 1 0-1.414l2.927-2.928A.8.8 0 0 1 7 13.931V16h12a1 1 0 1 1 0 2H7Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgTransfer)

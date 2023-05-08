import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgCommentIn')
function SvgCommentIn(props: SVGProps<SVGSVGElement>) {
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
        d="M7 3a4 4 0 0 0-4 4v13.96c0 1.257 1.455 1.957 2.437 1.171l3.366-2.693a2 2 0 0 1 1.25-.438H17a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H7ZM5 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6.948a4 4 0 0 0-2.498.877L5 19.919V7Zm11 2.414A1 1 0 0 0 14.586 8L11 11.586 9.414 10A1 1 0 0 0 8 11.414l2.293 2.293a1 1 0 0 0 1.414 0L16 9.414Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgCommentIn)

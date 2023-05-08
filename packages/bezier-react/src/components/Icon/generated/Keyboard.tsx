import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgKeyboard')
function SvgKeyboard(props: SVGProps<SVGSVGElement>) {
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
        d="M20 17H4V7h16v10ZM3.5 5h17c.827 0 1.5.673 1.5 1.5v11c0 .827-.673 1.5-1.5 1.5h-17c-.827 0-1.5-.673-1.5-1.5v-11C2 5.673 2.673 5 3.5 5ZM8 10H6V8h2v2Zm8 0h2V8h-2v2Zm-4.667 0h-2V8h2v2Zm1.333 0h2V8h-2v2ZM8 13H6v-2h2v2Zm8 0h2v-2h-2v2Zm-4.667 0h-2v-2h2v2Zm1.333 0h2v-2h-2v2ZM16 16H8v-1.98h8V16Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgKeyboard)

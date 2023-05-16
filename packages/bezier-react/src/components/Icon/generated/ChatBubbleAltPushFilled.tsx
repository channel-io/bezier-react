import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgChatBubbleAltPushFilled')
function SvgChatBubbleAltPushFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M18.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM12 4c.527 0 1.044.036 1.547.106a5.5 5.5 0 0 0 7.9 7.04c.035.28.053.565.053.854 0 4.418-4.253 8-9.5 8-.689 0-1.36-.062-2.008-.179-1.416 1.211-3.053 1.791-4.113 2.06-.422.106-.718-.364-.497-.739.388-.659.865-1.595 1.143-2.604C4.09 17.09 2.5 14.701 2.5 12c0-4.418 4.253-8 9.5-8Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgChatBubbleAltPushFilled)

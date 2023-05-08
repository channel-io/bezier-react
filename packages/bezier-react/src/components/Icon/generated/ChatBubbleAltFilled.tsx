import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgChatBubbleAltFilled')
function SvgChatBubbleAltFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M12 20c5.247 0 9.5-3.582 9.5-8S17.247 4 12 4s-9.5 3.582-9.5 8c0 2.701 1.59 5.09 4.025 6.538-.278 1.009-.755 1.945-1.143 2.604-.22.375.075.845.497.738 1.06-.268 2.697-.848 4.113-2.059.647.117 1.32.179 2.008.179Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgChatBubbleAltFilled)

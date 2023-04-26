import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgChatBubble')
function SvgChatBubble(props: SVGProps<SVGSVGElement>) {
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
        d="M11.999 4a7.938 7.938 0 0 0-5.65 2.338c-1.84 1.838-2.658 4.386-2.242 6.99.542 3.386 3.303 6.095 6.716 6.588a7.968 7.968 0 0 0 4.926-.855c.642-.342 1.358-.412 2.015-.193l1.656.55-.552-1.654c-.218-.656-.15-1.371.193-2.015.884-1.655 1.15-3.52.774-5.394a7.944 7.944 0 0 0-6.49-6.245A8.445 8.445 0 0 0 12 4ZM12 22c-.486 0-.975-.034-1.464-.105-4.27-.617-7.726-4.01-8.404-8.251-.52-3.246.503-6.425 2.804-8.721 2.3-2.297 5.484-3.312 8.728-2.787 4.053.656 7.32 3.8 8.13 7.824.47 2.335.135 4.662-.97 6.73-.047.089-.118.266-.06.442l.869 2.604c.18.542.042 1.13-.363 1.535a1.495 1.495 0 0 1-1.535.362l-2.605-.868c-.175-.058-.35.013-.44.06A9.92 9.92 0 0 1 12.002 22Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgChatBubble)

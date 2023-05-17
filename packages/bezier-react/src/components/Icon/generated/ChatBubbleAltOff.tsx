import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgChatBubbleAltOff')
function SvgChatBubbleAltOff(props: SVGProps<SVGSVGElement>) {
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
        d="M3.707 2.707a1 1 0 0 0 0 1.414l16.97 16.97a1 1 0 0 0 1.415-1.413l-1.967-1.968C21.599 16.177 22.5 14.204 22.5 12c0-5.125-4.869-9-10.5-9-1.922 0-3.755.451-5.336 1.25L5.121 2.707a1 1 0 0 0-1.414 0ZM8.163 5.75l10.543 10.543C19.84 15.086 20.5 13.582 20.5 12c0-3.712-3.638-7-8.5-7-1.4 0-2.698.272-3.837.749ZM1.5 12c0-2.33 1.006-4.4 2.633-5.967l1.416 1.416C4.26 8.695 3.5 10.303 3.5 12c0 2.283 1.343 4.375 3.536 5.679l.655.39-.202.735a10.79 10.79 0 0 1-.65 1.722c.799-.31 1.696-.775 2.503-1.465l.361-.309.467.085c.589.107 1.2.163 1.83.163 1.548 0 2.971-.333 4.193-.907l1.48 1.48C16.018 20.48 14.06 21 12 21c-.587 0-1.163-.041-1.725-.12-1.483 1.145-3.098 1.703-4.15 1.97a1.44 1.44 0 0 1-1.571-.61 1.518 1.518 0 0 1-.034-1.605c.27-.458.575-1.043.815-1.677C3.031 17.335 1.5 14.848 1.5 12Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgChatBubbleAltOff)

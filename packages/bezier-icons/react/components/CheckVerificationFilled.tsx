import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCheckVerificationFilled(props: SVGProps<SVGSVGElement>) {
  return (
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
        d="M12 2.71875L9.05256 1L7.35938 3.9622L3.94744 3.94744L3.9622 7.35937L1 9.05256L2.71875 12L1 14.9474L3.9622 16.6406L3.94744 20.0526L7.35937 20.0378L9.05256 23L12 21.2812L14.9474 23L16.6406 20.0378L20.0526 20.0526L20.0378 16.6406L23 14.9474L21.2812 12L23 9.05256L20.0378 7.35938L20.0526 3.94744L16.6406 3.9622L14.9474 1L12 2.71875ZM6.65521 12.4164L10.8092 16.4044L17.8442 9.7944L16.4752 8.3374L10.8242 13.6464L8.04021 10.9734L6.65521 12.4164Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCheckVerificationFilled)

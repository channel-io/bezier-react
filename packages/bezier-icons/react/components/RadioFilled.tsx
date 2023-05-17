import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgRadioFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M4.00018 12.0001C4.00018 16.4111 7.58918 20.0001 12.0002 20.0001C16.4112 20.0001 20.0002 16.4111 20.0002 12.0001C20.0002 7.58912 16.4112 4.00012 12.0002 4.00012C7.58918 4.00012 4.00018 7.58912 4.00018 12.0001ZM2.00018 12.0001C2.00018 6.47712 6.47718 2.00012 12.0002 2.00012C17.5232 2.00012 22.0002 6.47712 22.0002 12.0001C22.0002 17.5231 17.5232 22.0001 12.0002 22.0001C6.47718 22.0001 2.00018 17.5231 2.00018 12.0001ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgRadioFilled)

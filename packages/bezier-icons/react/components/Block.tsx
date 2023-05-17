import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgBlock(props: SVGProps<SVGSVGElement>) {
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
        d="M22 12C22 6.47717 17.5228 2 12 2C6.47717 2 2 6.47717 2 12C2 17.5228 6.47717 22 12 22C17.5228 22 22 17.5228 22 12ZM20.0392 12C20.0392 16.4399 16.4399 20.0392 12 20.0392C10.1334 20.0392 8.41544 19.4031 7.051 18.3358L18.3358 7.051C19.4031 8.41544 20.0392 10.1334 20.0392 12ZM5.66448 16.9493L16.9493 5.66448C15.5848 4.59703 13.8667 3.96078 12 3.96078C7.56008 3.96078 3.96078 7.56008 3.96078 12C3.96078 13.8667 4.59703 15.5848 5.66448 16.9493Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBlock)

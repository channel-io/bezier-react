import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPower(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 12a1 1 0 0 1-1-1V3a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1ZM2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-3.486-1.848-6.727-4.788-8.53-.513-.316-1.167-.077-1.424.467-.214.454-.016.992.41 1.256A8.047 8.047 0 0 1 20 12c0 4.411-3.589 8-8 8-4.41 0-8-3.589-8-8a8.048 8.048 0 0 1 3.802-6.807c.426-.264.624-.802.41-1.256-.257-.545-.911-.783-1.424-.467C3.848 5.274 2 8.514 2 12Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPower)

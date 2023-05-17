import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgNotificationFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M5.85724 8.14424C5.85724 9.69908 5.42128 11.2233 4.59911 12.5451L2.24988 16.3162C1.79054 17.0475 2.31684 18.0002 3.18124 18.0002H20.8222C21.6851 18.0002 22.2111 17.0511 21.7567 16.3196L19.405 12.5445C18.5824 11.2234 18.1462 9.6994 18.1462 8.14424C18.1462 4.75096 15.3955 2.00024 12.0022 2.00024C8.60814 2.00024 5.85724 4.75077 5.85724 8.14424ZM12 22C10.1362 22 8.57006 20.7252 8.12602 19H15.874C15.4299 20.7252 13.8638 22 12 22Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgNotificationFilled)

import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChatBubbleAlt(props: SVGProps<SVGSVGElement>) {
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
        d="M12 3C6.36893 3 1.5 6.87529 1.5 12C1.5 14.8483 3.03108 17.3352 5.33525 18.9584C5.09523 19.592 4.78995 20.1768 4.52033 20.6348C4.20883 21.1639 4.25404 21.7844 4.55356 22.2407C4.86463 22.7145 5.46261 23.017 6.12433 22.8496C7.17683 22.5834 8.7919 22.0248 10.2749 20.8793C10.8368 20.9588 11.4131 21 12 21C17.6311 21 22.5 17.1247 22.5 12C22.5 6.87529 17.6311 3 12 3ZM3.5 12C3.5 8.28815 7.13766 5 12 5C16.8623 5 20.5 8.28815 20.5 12C20.5 15.7118 16.8623 19 12 19C11.3709 19 10.7588 18.9436 10.1704 18.837L9.70311 18.7523L9.3422 19.0609C8.53521 19.751 7.63792 20.2159 6.83962 20.5258C7.08427 20.0074 7.31856 19.4215 7.48867 18.804L7.69118 18.0688L7.03588 17.679C4.84342 16.3746 3.5 14.2833 3.5 12Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChatBubbleAlt)

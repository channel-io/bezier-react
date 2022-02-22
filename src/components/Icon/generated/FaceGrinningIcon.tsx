import * as React from 'react'
import { SVGProps } from 'react'

function SvgFaceGrinningIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4 12c0 4.411 3.59 8 8 8 4.411 0 8-3.589 8-8 0-4.41-3.589-8-8-8-4.41 0-8 3.59-8 8Zm-2 0C2 6.478 6.477 2 12 2c5.522 0 10 4.478 10 10s-4.478 10-10 10C6.477 22 2 17.522 2 12Zm4.286 1.47h11.428c.25 0 .444.246.367.484-.828 2.576-3.234 4.45-6.081 4.45-2.847 0-5.253-1.874-6.081-4.45-.077-.238.116-.484.367-.484Zm2.5-1.815c.845 0 1.198-.61 1.198-2.105 0-1.496-.353-2.106-1.198-2.106s-1.199.61-1.199 2.106c0 1.495.354 2.105 1.2 2.105Zm7.626-2.105c0 1.495-.353 2.105-1.198 2.105s-1.199-.61-1.199-2.105c0-1.496.354-2.106 1.199-2.106.845 0 1.198.61 1.198 2.106Z"
      />
    </svg>
  )
}

export default SvgFaceGrinningIcon

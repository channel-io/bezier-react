import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgCallOffIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m23.325 12.196-.404-.297a18.414 18.414 0 0 0-21.845.002l-.401.295a.431.431 0 0 0-.091.602l1.569 2.129a1.871 1.871 0 0 0 2.403.534l2.297-1.251c.602-.328.977-.96.977-1.644v-1.847a16.386 16.386 0 0 1 8.34 0v1.847c0 .685.375 1.316.977 1.644l2.297 1.25c.822.448 1.848.22 2.403-.533l.157-.212 1.412-1.917a.43.43 0 0 0-.091-.602Z"
      />
    </svg>
  )
}

export default createIcon(SvgCallOffIcon)

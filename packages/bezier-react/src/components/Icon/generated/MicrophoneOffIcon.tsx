import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgMicrophoneOffIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m15.414 15.085 1.44 1.441a5.968 5.968 0 0 0 1.064-2.53c.09-.545.53-.996 1.082-.996s1.007.45.938.998a7.96 7.96 0 0 1-1.656 3.956l2.81 2.81a1 1 0 0 1-1.414 1.414L2.708 5.208A1 1 0 1 1 4.12 3.792L8 7.672V6a4 4 0 1 1 8 0v7c0 .764-.214 1.478-.586 2.085ZM14 13V6a2 2 0 1 0-4 0v3.672l3.913 3.913C13.97 13.4 14 13.203 14 13Z"
      />
      <path fill="currentColor" d="M8 13v-1l4.899 4.899A4 4 0 0 1 8 13Z" />
      <path
        fill="currentColor"
        d="M12 19c.88 0 1.716-.19 2.47-.53l1.485 1.485a7.948 7.948 0 0 1-2.955.983V23h-2v-2.062a8.004 8.004 0 0 1-6.938-6.94C3.993 13.45 4.448 13 5 13c.552 0 .991.451 1.082.996A6.002 6.002 0 0 0 12 19Z"
      />
    </svg>
  )
}

export default createIcon(SvgMicrophoneOffIcon)

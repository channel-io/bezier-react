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
        d="m15.414 15.085 1.44 1.441A5.973 5.973 0 0 0 18 13h2c0 1.87-.642 3.591-1.718 4.954L21.8 21.47l-1.414 1.414L2 4.5l1.414-1.414L8 7.672V6a4 4 0 1 1 8 0v7c0 .764-.214 1.478-.586 2.085ZM14 13V6a2 2 0 1 0-4 0v3.672l3.913 3.913C13.97 13.4 14 13.203 14 13Z"
      />
      <path fill="currentColor" d="M8 13v-1l4.899 4.899A4 4 0 0 1 8 13Z" />
      <path
        fill="currentColor"
        d="M12 19c.88 0 1.716-.19 2.47-.53l1.485 1.485a7.948 7.948 0 0 1-2.955.983V23h-2v-2.062A8.001 8.001 0 0 1 4 13h2a6 6 0 0 0 6 6Z"
      />
    </svg>
  )
}

export default createIcon(SvgMicrophoneOffIcon)

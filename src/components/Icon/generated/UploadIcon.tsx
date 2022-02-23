import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgUploadIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m13 5.207 3.121 3.121 1.414-1.414L13.06 2.44a1.5 1.5 0 0 0-2.12 0L6.463 6.914l1.414 1.414L11 5.207V16h2V5.207ZM4 20v-8H2v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-9h-2v8H4Z"
      />
    </svg>
  )
}

export default createIcon(SvgUploadIcon)

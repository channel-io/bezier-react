import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgAllIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M19.5 17a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H18V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h3Zm-5 0a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H13V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h3Zm-5 0a.5.5 0 0 0 .5-.5V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V14h2v2.5a.5.5 0 0 0 .5.5h1ZM4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm2.5 4h1a.5.5 0 0 1 .5.5V12H6V9.5a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  )
}

export default createIcon(SvgAllIcon)

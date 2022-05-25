import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgItalicIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M13.978 3H10a1 1 0 0 0 0 2h2.72l-3.5 14H6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-2.72l3.5-14H18a1 1 0 1 0 0-2h-4.022Z"
      />
    </svg>
  )
}

export default createIcon(SvgItalicIcon)

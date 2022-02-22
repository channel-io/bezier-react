import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgCommentInIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M19 17H8.276L5 19.73V5h14v12Zm.5 2H9l-4.36 3.633A1 1 0 0 1 3 21.865V4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v13a1.5 1.5 0 0 1-1.5 1.5ZM11 14.414l5.707-5.707-1.414-1.414L11 11.586 8.707 9.293l-1.414 1.414L11 14.414Z"
      />
    </svg>
  )
}

export default createIcon(SvgCommentInIcon)

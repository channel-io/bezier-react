import * as React from 'react'
import { SVGProps } from 'react'

function SvgCommentOutIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M19 17H8.276L5 19.73V5h14v12Zm.5 2H9l-4.36 3.633A1 1 0 0 1 3 21.865V4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v13a1.5 1.5 0 0 1-1.5 1.5ZM14.828 6.757l1.415 1.415L13.414 11l2.829 2.828-1.415 1.415L12 12.414l-2.828 2.829-1.415-1.415L10.586 11 7.757 8.172l1.415-1.415L12 9.586l2.828-2.829Z"
      />
    </svg>
  )
}

export default SvgCommentOutIcon

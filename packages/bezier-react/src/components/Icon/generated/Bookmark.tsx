import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgBookmark(props: SVGProps<SVGSVGElement>) {
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
        d="M5.964 3.047v17.308L12 15.113l6.036 5.242V3.047H5.964Zm-.495 19.906c-.211 0-.425-.045-.628-.138a1.483 1.483 0 0 1-.877-1.364V2.547c0-.827.673-1.5 1.5-1.5h13.072c.827 0 1.5.673 1.5 1.5V21.45c0 .595-.337 1.118-.878 1.365a1.486 1.486 0 0 1-1.606-.231L12 17.762l-5.552 4.821c-.281.244-.627.37-.979.37Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgBookmark)

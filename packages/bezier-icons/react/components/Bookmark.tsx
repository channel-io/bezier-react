import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgBookmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 4v15.355l6-5.242 6 5.242V4H6Zm-.531 17.953c-.211 0-.425-.045-.628-.138a1.483 1.483 0 0 1-.877-1.364V3.998c0-1.105.895-1.998 2-1.998h12.04c1.103 0 1.998.892 2 1.995.01 4.35.032 14.46.032 16.455 0 .595-.337 1.118-.878 1.365a1.486 1.486 0 0 1-1.606-.231L12 16.762l-5.552 4.821c-.281.244-.627.37-.979.37Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBookmark)

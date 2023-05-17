import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgRecipe(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="currentColor" d="M17 15H7V17H17V15Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 2C3.673 2 3 2.673 3 3.5V20.5C3 21.327 3.673 22 4.5 22H19.5C20.327 22 21 21.327 21 20.5V3.5C21 2.673 20.327 2 19.5 2H4.5ZM19 20H5V4H7V12L10 9.81714L13 12V4H19V20Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgRecipe)

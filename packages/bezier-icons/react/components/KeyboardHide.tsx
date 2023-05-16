import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgKeyboardHide(props: SVGProps<SVGSVGElement>) {
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
        d="M4 15h16V5H4v10ZM20.5 3h-17C2.673 3 2 3.673 2 4.5v11c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-11c0-.827-.673-1.5-1.5-1.5ZM6 8h2V6H6v2Zm12 0h-2V6h2v2ZM9.333 8h2V6h-2v2Zm5.333 0h-2V6h2v2ZM6 11h2V9H6v2Zm12 0h-2V9h2v2Zm-8.667 0h2V9h-2v2Zm5.333 0h-2V9h2v2ZM8 14h8v-1.98H8V14Zm1.394 3.83a1 1 0 1 0-.788 1.84l3.5 1.5a1 1 0 0 0 .788 0l3.5-1.5a1 1 0 0 0-.788-1.84L12.5 19.163l-3.106-1.331Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgKeyboardHide)

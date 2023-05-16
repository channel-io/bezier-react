import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgBusinessGuy(props: SVGProps<SVGSVGElement>) {
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
        d="M7.5 6.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm7 0C14.5 5.122 13.378 4 12 4a2.503 2.503 0 0 0-2.5 2.5C9.5 7.878 10.621 9 12 9c1.378 0 2.5-1.122 2.5-2.5ZM2.062 20.876C2.622 15.882 6.857 12 12 12c5.143 0 9.38 3.882 9.938 8.876A1.007 1.007 0 0 1 20.944 22H3.056c-.6 0-1.06-.527-.994-1.124Zm14.367-5.544a7.973 7.973 0 0 0-2.765-1.16l-.388.775a1 1 0 0 1-.894.553h-.764a1 1 0 0 1-.894-.553l-.388-.774a7.977 7.977 0 0 0-2.765 1.16l2 4.667h.629l.64-3.196a1 1 0 0 1 .98-.804h.36a1 1 0 0 1 .98.804L13.8 20h.628l2-4.668Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBusinessGuy)

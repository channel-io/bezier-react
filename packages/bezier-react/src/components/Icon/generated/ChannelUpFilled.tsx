import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgChannelUpFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M15.213 10.808c-.845 0-1.198-.611-1.198-2.105 0-1.495.353-2.105 1.198-2.105s1.199.61 1.199 2.105c0 1.494-.354 2.105-1.198 2.105Zm-6.426 0c-.846 0-1.199-.611-1.199-2.105 0-1.495.353-2.105 1.199-2.105.845 0 1.197.61 1.197 2.105 0 1.494-.352 2.105-1.197 2.105Zm11.937 7.38c-.166-.496-.148-1.046.099-1.507 1.037-1.948 1.459-4.274.965-6.728-.805-4.001-4.096-7.166-8.123-7.817A10.012 10.012 0 0 0 2.13 13.673c.653 4.028 3.817 7.317 7.817 8.12 2.456.495 4.783.074 6.732-.966.459-.245 1.002-.265 1.495-.1l1.924.64a1 1 0 0 0 1.264-1.264l-.638-1.915Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgChannelUpFilled)

import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgTwitter(props: SVGProps<SVGSVGElement>) {
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
        d="M8.29 20.125c7.547 0 11.675-6.252 11.675-11.675 0-.178 0-.354-.012-.53A8.351 8.351 0 0 0 22 5.796a8.148 8.148 0 0 1-2.356.645 4.12 4.12 0 0 0 1.804-2.269 8.272 8.272 0 0 1-2.606.996 4.109 4.109 0 0 0-5.806-.179 4.112 4.112 0 0 0-1.187 3.921 11.648 11.648 0 0 1-8.457-4.287 4.107 4.107 0 0 0 1.27 5.478A4.086 4.086 0 0 1 2.8 9.587v.052a4.105 4.105 0 0 0 3.292 4.022 4.068 4.068 0 0 1-1.852.07 4.105 4.105 0 0 0 3.833 2.85A8.227 8.227 0 0 1 2 18.282a11.62 11.62 0 0 0 6.29 1.84"
      />
    </svg>
  )
}

export default createBezierIcon(SvgTwitter)

import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCheckVerificationFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M12.649 1.753a1 1 0 0 0-1.298 0L8.94 3.808a1 1 0 0 1-.57.235l-3.157.252a1 1 0 0 0-.918.918L4.043 8.37a1 1 0 0 1-.235.569l-2.055 2.411a1 1 0 0 0 0 1.298l2.055 2.411a1 1 0 0 1 .235.57l.252 3.157a1 1 0 0 0 .918.918l3.158.252a1 1 0 0 1 .569.235l2.411 2.055a1 1 0 0 0 1.297 0l2.412-2.055a1 1 0 0 1 .569-.235l3.158-.253a1 1 0 0 0 .918-.917l.252-3.158a1 1 0 0 1 .235-.569l2.055-2.411a1 1 0 0 0 0-1.298L20.192 8.94a1 1 0 0 1-.236-.57l-.252-3.157a1 1 0 0 0-.917-.918l-3.158-.252a1 1 0 0 1-.57-.235l-2.41-2.055ZM6.655 12.416l4.154 3.988 7.035-6.61-1.369-1.457-5.65 5.31-2.785-2.674-1.385 1.443Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCheckVerificationFilled)

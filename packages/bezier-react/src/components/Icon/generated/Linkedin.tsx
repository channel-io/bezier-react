import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgLinkedin(props: SVGProps<SVGSVGElement>) {
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
        d="M19.603 3H4.398C3.626 3 3 3.626 3 4.398v15.205c0 .773.626 1.398 1.398 1.398h15.205c.773 0 1.398-.625 1.398-1.398V4.398A1.4 1.4 0 0 0 19.603 3ZM8.46 18.299H5.784v-8.55H8.46v8.55ZM7.116 8.57a1.547 1.547 0 1 1 0-3.095 1.547 1.547 0 0 1 0 3.095Zm11.315 5.991c-.002 1.246-.001 2.492-.001 3.738h-2.668v-3.67c0-.832.104-2.153-.701-2.592-.53-.29-1.28-.22-1.725.207-.323.308-.444.758-.497 1.2a5.57 5.57 0 0 0-.037.684V18.3h-2.68V9.75h2.544l-.002 1.161h.01c.036-.061.09-.113.117-.179.715-1.681 3.868-1.751 4.964-.117.24.358.384.771.482 1.187.132.56.175 1.13.189 1.702.008.352.005.705.005 1.057Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgLinkedin)

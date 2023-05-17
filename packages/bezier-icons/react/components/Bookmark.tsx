import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
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
        d="M5.99999 4V19.355L12 14.113L18 19.355V4H5.99999ZM5.46899 21.953C5.25799 21.953 5.04399 21.908 4.84099 21.815C4.29999 21.568 3.96399 21.046 3.96399 20.451C3.96399 18.9153 3.96399 8.44968 3.96399 3.99773C3.96399 2.89316 4.85942 2 5.96399 2H18.0045C19.1073 2 20.002 2.89172 20.0044 3.99452C20.0141 8.34423 20.036 18.4541 20.036 20.45C20.036 21.045 19.699 21.568 19.158 21.815C18.617 22.062 18.002 21.973 17.552 21.584L12 16.762L6.44799 21.583C6.16699 21.827 5.82099 21.953 5.46899 21.953Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBookmark)

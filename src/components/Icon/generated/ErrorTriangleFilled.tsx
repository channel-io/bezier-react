import * as React from 'react'
import { SVGProps } from 'react'

function SvgErrorTriangleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M12 18.28a1.323 1.323 0 1 1 0-2.646 1.323 1.323 0 0 1 0 2.646Zm1.213-12.26-.132 8.007H10.92l-.132-8.007h2.426Zm8.524 11.067L13.682 3.135c-.748-1.295-2.617-1.295-3.364 0L2.263 17.087C1.516 18.381 2.45 20 3.945 20h16.11c1.495 0 2.43-1.619 1.682-2.913Z"
      />
    </svg>
  )
}

export default SvgErrorTriangleFilled

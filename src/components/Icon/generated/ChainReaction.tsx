import * as React from 'react'
import { SVGProps } from 'react'

function SvgChainReaction(props: SVGProps<SVGSVGElement>) {
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
        d="M12 8c1.11 0 2.08-.604 2.6-1.5a7.015 7.015 0 0 1 4.348 5.633 1 1 0 1 0 1.984-.246 9.019 9.019 0 0 0-5.974-7.389A3 3 0 1 0 12 8Zm4.402 10.5a3 3 0 1 1 1.553 1.312 9.02 9.02 0 0 1-9.384 1.48 1 1 0 0 1 .778-1.843 7.017 7.017 0 0 0 7.053-.949ZM8 17a3 3 0 1 1-4.914-2.31 9.003 9.003 0 0 1 3.412-8.868 1 1 0 0 1 1.204 1.596A7 7 0 0 0 4.998 14H5a3 3 0 0 1 3 3Z"
      />
    </svg>
  )
}

export default SvgChainReaction

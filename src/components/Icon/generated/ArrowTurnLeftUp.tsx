import React from 'react'

function SvgArrowTurnLeftUp(props: React.SVGProps<SVGSVGElement>) {
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
        d="M5.419 9.998l3.973 3.973-1.414 1.414L1.59 8.998 7.978 2.61l1.414 1.414L5.42 7.998h9.586a7 7 0 017 7v5h-2v-5a5 5 0 00-5-5H5.419z"
      />
    </svg>
  )
}

export default SvgArrowTurnLeftUp

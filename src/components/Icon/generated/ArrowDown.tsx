import React from 'react'

function SvgArrowDown(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2.6 12.892l1.37-1.457L11 18.04V3h2v15.067l7.057-6.633 1.37 1.458-8.386 7.881a1.5 1.5 0 01-2.055 0L2.6 12.892z"
      />
    </svg>
  )
}

export default SvgArrowDown

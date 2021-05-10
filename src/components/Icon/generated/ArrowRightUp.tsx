import React from 'react'

function SvgArrowRightUp(props: React.SVGProps<SVGSVGElement>) {
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
        d="M17.997 7.414L4.704 20.707 3.29 19.293 16.583 6H3.997V4h14.5a1.5 1.5 0 011.5 1.5V20h-2V7.414z"
      />
    </svg>
  )
}

export default SvgArrowRightUp

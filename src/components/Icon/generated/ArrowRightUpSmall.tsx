import React from 'react'

function SvgArrowRightUpSmall(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14.59 8l-8.9 8.9 1.415 1.414 8.892-8.893v7.58h2V7.5a1.5 1.5 0 00-1.5-1.5h-9.5v2h7.593z"
      />
    </svg>
  )
}

export default SvgArrowRightUpSmall

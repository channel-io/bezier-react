import React from 'react'

function SvgArrowUp(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2.6 11.108l1.37 1.457L11 5.96V21h2V5.933l7.057 6.632 1.37-1.457-8.386-7.881a1.5 1.5 0 00-2.055 0L2.6 11.108z"
      />
    </svg>
  )
}

export default SvgArrowUp

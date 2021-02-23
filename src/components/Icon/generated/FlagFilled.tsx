import React from 'react'

function SvgFlagFilled(props: React.SVGProps<SVGSVGElement>) {
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
        d="M6 3H4v19h2V3zm15.191 0H7v12h14.191a.5.5 0 00.447-.724L19 9l2.638-5.276A.5.5 0 0021.191 3z"
      />
    </svg>
  )
}

export default SvgFlagFilled

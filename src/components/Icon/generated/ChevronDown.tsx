import React from 'react'

function SvgChevronDown(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4.97 8.262L3.6 9.719l7.39 6.892a1.5 1.5 0 002.047 0l7.39-6.892-1.37-1.457-7.043 6.559L4.97 8.26z"
      />
    </svg>
  )
}

export default SvgChevronDown

import React from 'react'

function SvgPersonCircleFilled(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 015.736 13.577c-.656-2.454-2.985-4.281-5.736-4.281s-5.08 1.827-5.736 4.281A8 8 0 0112 4zm0 8.302a2.551 2.551 0 100-5.103 2.551 2.551 0 000 5.103z"
      />
    </svg>
  )
}

export default SvgPersonCircleFilled

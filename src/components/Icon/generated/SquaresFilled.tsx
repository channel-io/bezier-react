import React from 'react'

function SvgSquaresFilled(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8.5 16h12a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5h-12a.5.5 0 00-.5.5v12a.5.5 0 00.5.5zm-5 5h13a.5.5 0 00.5-.5V18H6V7H3.5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5z"
      />
    </svg>
  )
}

export default SvgSquaresFilled

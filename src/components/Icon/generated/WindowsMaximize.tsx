import React from 'react'

function SvgWindowsMaximize(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16 8H8v8h8V8zM7 7v10h10V7H7z"
      />
    </svg>
  )
}

export default SvgWindowsMaximize

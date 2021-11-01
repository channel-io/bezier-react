import React from 'react'

function SvgMicrophone(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14 13V6a2 2 0 10-4 0v7a2 2 0 104 0zM12 2a4 4 0 00-4 4v7a4 4 0 008 0V6a4 4 0 00-4-4zm-1 18.938A8.001 8.001 0 014 13h2a6 6 0 0012 0h2a8.001 8.001 0 01-7 7.938V23h-2v-2.062z"
      />
    </svg>
  )
}

export default SvgMicrophone

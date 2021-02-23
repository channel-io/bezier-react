import React from 'react'

function SvgPeople(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8 5A2 2 0 114 5 2 2 0 018 5zM5 16H4V8h4v8H7v5H5v-5zm5 0h1v5h2v-5h1V8h-4v8zm7 0h-1V8h4v8h-1v5h-2v-5zm-5-9A2 2 0 1012 3 2 2 0 0012 7zm8-2A2 2 0 1116 5 2 2 0 0120 5z"
      />
    </svg>
  )
}

export default SvgPeople

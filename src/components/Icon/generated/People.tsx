import React from 'react'

function SvgPeople(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 8v8H7v5H5v-5H4V8h4zm6 0v8h-1v5h-2v-5h-1V8h4zm6 0v8h-1v5h-2v-5h-1V8h4zM6 3a2 2 0 11-.001 4.001A2 2 0 016 3zm6 0a2 2 0 11-.001 4.001A2 2 0 0112 3zm6 0a2 2 0 11-.001 4.001A2 2 0 0118 3z"
      />
    </svg>
  )
}

export default SvgPeople

import React from 'react'

function SvgTag(props: React.SVGProps<SVGSVGElement>) {
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
        d="M10.047 19.603l9.95-9.95V4h-5.653l-9.95 9.95 5.653 5.653zM2.626 12.89L13.516 2h8.481v8.48l-10.89 10.891a1.49 1.49 0 01-1.06.439h-.001c-.401 0-.777-.156-1.06-.439l-6.36-6.361a1.5 1.5 0 010-2.12zm15.986-5.86a1.499 1.499 0 11-2.998 0 1.499 1.499 0 012.998 0z"
      />
    </svg>
  )
}

export default SvgTag

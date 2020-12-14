import React from 'react'

function SvgSecurity(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 5.222L12 2 3 5.222V9.85a12 12 0 005.935 10.355L12 22l3.065-1.795A12 12 0 0021 9.85V5.222zM12 12V4.124l7 2.507v3.22l-.005.321A9.987 9.987 0 0118.766 12H12zm0 7.682l-2.054-1.203-.275-.167A10.001 10.001 0 015.234 12H12v7.682z"
      />
    </svg>
  )
}

export default SvgSecurity

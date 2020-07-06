import React from 'react'

function SvgPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.852 7.814l-4.639-4.639-3.173 3.174-7.472 3.701-1.977-1.978-1.414 1.414 5.475 5.475-5.92 5.92 1.414 1.414 5.92-5.919 5.575 5.575 1.414-1.414-2.078-2.078 3.701-7.471z"
      />
    </svg>
  )
}

export default SvgPin

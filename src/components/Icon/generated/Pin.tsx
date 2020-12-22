import React from 'react'

function SvgPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.852 7.814l-4.639-4.639L13.04 6.35 5.568 10.05 3.591 8.072 2.177 9.486l5.475 5.475-5.92 5.92 1.414 1.414 5.92-5.919 5.575 5.575 1.414-1.414-2.078-2.078 3.701-7.47 3.174-3.175z"
      />
    </svg>
  )
}

export default SvgPin

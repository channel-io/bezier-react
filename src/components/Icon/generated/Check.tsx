import React from 'react'

function SvgCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.071 16.142l-5.657-5.657L2 11.899l7.071 7.071L22.627 5.414 21.213 4z"
      />
    </svg>
  )
}

export default SvgCheck

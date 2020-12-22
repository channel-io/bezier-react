import React from 'react'

function SvgCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.071 16.142l-5.657-5.657L2 11.899l7.071 7.071L21.553 6.487 20.14 5.073 9.071 16.142z"
      />
    </svg>
  )
}

export default SvgCheck

import React from 'react'

function SvgPersonCircleFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 00-8 8c0 2.17.863 4.137 2.265 5.578.655-2.455 2.984-4.282 5.735-4.282 2.752 0 5.08 1.827 5.736 4.28A8 8 0 0012 4zm0 3.2a2.551 2.551 0 110 5.102A2.551 2.551 0 0112 7.2z"
      />
    </svg>
  )
}

export default SvgPersonCircleFilled

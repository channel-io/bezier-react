import React from 'react'

function SvgApps(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm5 6H5V5h4v4zm5-6h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1V4a1 1 0 011-1zm5 6h-4V5h4v4zm-9 4H4a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1zm-5 6h4v-4H5v4zm9-6h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6a1 1 0 011-1zm5 6h-4v-4h4v4z"
      />
    </svg>
  )
}

export default SvgApps

import React from 'react'

function SvgTypography(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 3v5h2V6a1 1 0 011-1h3a1 1 0 011 1v12a1 1 0 01-1 1H7v2h10v-2h-2a1 1 0 01-1-1V6a1 1 0 011-1h3a1 1 0 011 1v2h2V3H3z"
      />
    </svg>
  )
}

export default SvgTypography

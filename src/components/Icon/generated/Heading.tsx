import React from 'react'

function SvgHeading(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 21h-3v-7.5H8V21H5V3h3v7.5h8V3h3v18z"
      />
    </svg>
  )
}

export default SvgHeading

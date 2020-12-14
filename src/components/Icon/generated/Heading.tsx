import React from 'react'

function SvgHeading(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path fill="currentColor" d="M5 3h3v7.5h8V3h3v18h-3v-7.5H8V21H5V3z" />
    </svg>
  )
}

export default SvgHeading

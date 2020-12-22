import React from 'react'

function SvgTarget(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 17v2.93A8.008 8.008 0 0019.931 13h-2.93v-2h2.93a8.007 8.007 0 00-6.93-6.93V7h-2V4.07A8.008 8.008 0 004.068 11H7v2H4.07A8.01 8.01 0 0011 19.93V17h2zM2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10S2 17.514 2 12zm8 0a2 2 0 114.002 0A2 2 0 0110 12z"
      />
    </svg>
  )
}

export default SvgTarget

import React from 'react'

function SvgTarget(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm1 2.07V7h-2V4.07A8.007 8.007 0 004.07 11H7v2H4.07A8.006 8.006 0 0011 19.93V17h2v2.93A8.006 8.006 0 0019.931 13h-2.93v-2h2.93a8.007 8.007 0 00-6.93-6.93zM12 10a2 2 0 110 4 2 2 0 010-4z"
      />
    </svg>
  )
}

export default SvgTarget

import React from 'react'

function SvgKey(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.958 11.04a2.5 2.5 0 113.536-3.535 2.5 2.5 0 01-3.536 3.535m6.013-6.013a5.997 5.997 0 00-9.653 6.825L2 19.17V22h2.829l.707-.708V19.17h2.12l.708-.707v-2.12h2.122l1.66-1.662a5.996 5.996 0 006.825-9.653"
      />
    </svg>
  )
}

export default SvgKey

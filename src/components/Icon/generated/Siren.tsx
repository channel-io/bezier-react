import React from 'react'

function SvgSiren(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.007 1v3h2V1h-2zM3.3 4.707l2 2 1.414-1.414-2-2L3.3 4.707zM12.007 5a7 7 0 00-7 7v8h-1v2h16v-2h-1v-8a7 7 0 00-7-7zm5.293.293l2-2 1.414 1.414-2 2L17.3 5.293zM9 10a1 1 0 00-1 1v6a1 1 0 102 0v-6a1 1 0 00-1-1z"
      />
    </svg>
  )
}

export default SvgSiren

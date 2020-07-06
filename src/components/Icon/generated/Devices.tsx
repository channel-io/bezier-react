import React from 'react'

function SvgDevices(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.506 10a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5zm-1.5 2h-3v8h3v-8zm.5-7c.827 0 1.5.673 1.5 1.5V9h-2V7h-16v10.023l10.006.058-.012 2-14-.08.012-2 1.994.011V6.5c0-.827.673-1.5 1.5-1.5z"
      />
    </svg>
  )
}

export default SvgDevices

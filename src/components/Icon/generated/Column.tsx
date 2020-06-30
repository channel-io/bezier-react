import React from 'react'

function SvgColumn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.5 3A1.5 1.5 0 0121 4.5v15a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 19.5v-15A1.5 1.5 0 014.5 3h15zM5 19h3V9H5v10zm9 0V9h-4v10h4zm5 0V9h-3v10h3zm0-14H5v2h14V5z"
      />
    </svg>
  )
}

export default SvgColumn

import React from 'react'

function SvgRow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.5 3A1.5 1.5 0 0121 4.5v15a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 19.5v-15A1.5 1.5 0 014.5 3h15zM5 5v14h2V5H5zm14 14v-3H9v3h10zm0-5v-4H9v4h10zM9 8h10V5H9v3z"
      />
    </svg>
  )
}

export default SvgRow

import React from 'react'

function SvgList(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 17.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 014.5 17.5zM21 18v2H8v-2h13zM4.5 10.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 014.5 10.5zM21 11v2H8v-2h13zM4.5 3.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 014.5 3.5zM21 4v2H8V4h13z"
      />
    </svg>
  )
}

export default SvgList

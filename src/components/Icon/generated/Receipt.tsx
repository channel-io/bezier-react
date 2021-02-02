import React from 'react'

function SvgReceipt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.997 19.882l-2.003-1-1.999 1-2-1-1.998 1L7 19.383V4.001L17 4v15.382l-1.003.5zM5 20.617l2.997 1.501 1.998-1 2 1 2-1 2.002 1 3.003-1.5V3.501a1.5 1.5 0 00-1.5-1.5L6.5 2A1.5 1.5 0 005 3.5v17.117zM15 10H9v2h6v-2zm-6 4h6v2H9v-2zm6-8H9v2h6V6z"
      />
    </svg>
  )
}

export default SvgReceipt

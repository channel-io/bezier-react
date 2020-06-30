import React from 'react'

function SvgCart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 18c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm10 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM6.114 3c.255 0 .47.191.497.444L6.895 6H20.56c.297 0 .53.26.497.556l-1.112 10a.498.498 0 01-.496.444H6.553a.498.498 0 01-.497-.444L4.772 5H2V3zm12.77 5H7.116l.778 7h10.21l.778-7z"
      />
    </svg>
  )
}

export default SvgCart

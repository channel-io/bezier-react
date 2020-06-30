import React from 'react'

function SvgReceipt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.5 2h11A1.5 1.5 0 0119 3.5v17.118l-3.003 1.5-2.002-1-2 1-2-1-1.998 1L5 20.617V3.5A1.5 1.5 0 016.5 2zM17 4H7v15.383l.997.499 1.998-1 2 1 1.999-1 2.003 1 1.003-.5V4zm-2 10v2H9v-2h6zm0-4v2H9v-2h6zm0-4v2H9V6h6z"
      />
    </svg>
  )
}

export default SvgReceipt

import React from 'react'

function SvgBold(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.5 3a5.5 5.5 0 014.671 8.405 5.501 5.501 0 01-3.45 9.591l-.22.004H5V3h8.5zm1 11H9v3h5.5a1.5 1.5 0 100-3zm-1-7H9v3h4.5a1.5 1.5 0 100-3z"
      />
    </svg>
  )
}

export default SvgBold

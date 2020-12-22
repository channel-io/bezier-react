import React from 'react'

function SvgTransfer(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.646 6.646a.5.5 0 010 .708l-3.963 3.963a.4.4 0 01-.683-.283V8H4V6h13V2.966a.4.4 0 01.683-.283l3.963 3.963zM7 18v3.034a.4.4 0 01-.683.283l-3.963-3.963a.5.5 0 010-.708l3.963-3.963a.4.4 0 01.683.283V16h13v2H7z"
      />
    </svg>
  )
}

export default SvgTransfer

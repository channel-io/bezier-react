import React from 'react'

function SvgFlashlight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 4h2V1h-2v3zm-7.707.707l2 2 1.414-1.414-2-2-1.414 1.414zm14 .586l1.414 1.414 2-2-1.414-1.414-2 2zM7 8h10a1 1 0 011 1v2.667c0 .216-.07.426-.2.6l-2.6 3.466a1 1 0 00-.2.6V21a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4.667a1 1 0 00-.2-.6l-2.6-3.466c-.13-.174-.2-.384-.2-.6V9a1 1 0 011-1z"
      />
    </svg>
  )
}

export default SvgFlashlight

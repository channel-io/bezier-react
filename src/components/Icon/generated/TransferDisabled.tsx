import React from 'react'

function SvgTransferDisabled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.874 12.303l1.414 1.414-2.535 2.536h7.672l2 2H5.753l2.535 2.536-1.414 1.414-3.888-3.889a1.502 1.502 0 010-2.122l3.888-3.889zM3.414 2l4.253 4.253h9.672l-2.536-2.536 1.414-1.414 3.89 3.889a1.504 1.504 0 010 2.122l-3.89 3.889-1.414-1.414 2.536-2.536H9.667L21.8 20.385l-1.414 1.414L2 3.414 3.414 2z"
      />
    </svg>
  )
}

export default SvgTransferDisabled

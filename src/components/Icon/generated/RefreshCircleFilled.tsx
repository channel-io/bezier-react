import React from 'react'

function SvgRefreshCircleFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.275 10.097c0 .173-.14.313-.313.313H14.43a.313.313 0 01-.22-.535l1.313-1.314A4.99 4.99 0 0012 7.114a5.029 5.029 0 00-5.023 5.023A5.028 5.028 0 0012 17.159a5.028 5.028 0 005.023-5.022h1.25A6.28 6.28 0 0112 18.409a6.28 6.28 0 01-6.273-6.272A6.28 6.28 0 0112 5.864a6.23 6.23 0 014.408 1.812l1.331-1.332a.314.314 0 01.536.222v3.531zM12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10z"
      />
    </svg>
  )
}

export default SvgRefreshCircleFilled

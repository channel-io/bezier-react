import React from 'react'

function SvgCoupon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 5A1.5 1.5 0 0122 6.5v4a.5.5 0 01-.5.5H21a1 1 0 00-.117 1.993L21 13h.5a.5.5 0 01.5.5v4a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 012 17.5v-4a.5.5 0 01.5-.5H3a1 1 0 00.117-1.993L3 11h-.5a.5.5 0 01-.5-.5v-4A1.5 1.5 0 013.5 5h17zM8 7H4v2.172l.04.013a3.002 3.002 0 011.955 2.633L6 12a3 3 0 01-1.817 2.758L4 14.829V17h4v-2h2v2h10v-2.173l-.04-.012a3.002 3.002 0 01-1.955-2.633L18 12a3 3 0 011.817-2.758L20 9.17V7H10v2H8V7zm2 4H8v2h2v-2z"
      />
    </svg>
  )
}

export default SvgCoupon

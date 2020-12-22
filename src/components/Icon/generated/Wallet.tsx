import React from 'react'

function SvgWallet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 3a1.002 1.002 0 00-1.217-.976L3.566 5.406A2 2 0 002 7.358V18.5A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 6H20V3zm-8.783 2.754L18 4.246v1.508h-6.783zM4 8h16v2h-3a1 1 0 00-1 1v4a1 1 0 001 1h3v2H4V8zm16 5a1 1 0 10-2 0 1 1 0 002 0z"
      />
    </svg>
  )
}

export default SvgWallet

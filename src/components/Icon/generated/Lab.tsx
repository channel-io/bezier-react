import React from 'react'

function SvgLab(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2h6a1 1 0 011 1v6.426c0 .375.105.742.304 1.06l4.088 6.541c.397.636.608 1.37.608 2.12V21a1 1 0 01-1 1H4a1 1 0 01-1-1v-1.853c0-.75.21-1.484.608-2.12l4.088-6.54c.2-.319.304-.686.304-1.06V3a1 1 0 011-1zm5 7.426V4h-4v5.426c0 .751-.21 1.484-.608 2.12l-4.088 6.541A1.997 1.997 0 005 19.147V20h14v-.853c0-.375-.105-.742-.304-1.06l-4.088-6.54A3.991 3.991 0 0114 9.426zM13.713 12l4.168 6.669a.79.79 0 01.114.331H6.005a.79.79 0 01.115-.331L10.287 12h3.425z"
      />
    </svg>
  )
}

export default SvgLab

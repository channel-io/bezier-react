import React from 'react'

function SvgIntoPage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.5 3c.827 0 1.5.673 1.5 1.5v15c0 .827-.673 1.5-1.5 1.5H12v-2h7V5H5v7H3V4.5C3 3.673 3.673 3 4.5 3zm-7 7c.827 0 1.5.673 1.5 1.5V17h-2v-3.586l-7 7L3.586 19l7-7H7v-2z"
      />
    </svg>
  )
}

export default SvgIntoPage

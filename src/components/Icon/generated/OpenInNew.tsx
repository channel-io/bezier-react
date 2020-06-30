import React from 'react'

function SvgOpenInNew(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3v2H5v14h14v-7h2v7.5c0 .827-.673 1.5-1.5 1.5h-15c-.827 0-1.5-.673-1.5-1.5v-15C3 3.673 3.673 3 4.5 3H12zm7.5 0c.827 0 1.5.673 1.5 1.5V10h-2V6.414l-7 7L10.586 12l7-7H14V3z"
      />
    </svg>
  )
}

export default SvgOpenInNew

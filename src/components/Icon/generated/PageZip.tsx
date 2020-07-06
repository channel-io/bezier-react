import React from 'react'

function SvgPageZip(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.77 2c.44 0 .856.192 1.141.526L18.64 9.21c.233.272.361.62.361.976V20.5c0 .827-.673 1.5-1.5 1.5h-11c-.827 0-1.5-.673-1.5-1.5v-17A1.5 1.5 0 016.5 2zM11 4H7v16h10v-9.63l-4-4.666V10h-2V4zm2 12v2h-2v-2h2zm0-4v2h-2v-2h2z"
      />
    </svg>
  )
}

export default SvgPageZip

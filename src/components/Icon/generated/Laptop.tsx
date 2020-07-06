import React from 'react'

function SvgLaptop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 17h16V7H4v10zm18 0V6.5c0-.827-.673-1.5-1.5-1.5h-17C2.673 5 2 5.673 2 6.5V17H0v2h24v-2h-2z"
      />
    </svg>
  )
}

export default SvgLaptop

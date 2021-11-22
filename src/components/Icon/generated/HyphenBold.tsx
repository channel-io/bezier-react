import React from 'react'

function SvgHyphenBold(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5 12a1.5 1.5 0 011.5-1.5h11a1.5 1.5 0 010 3h-11A1.5 1.5 0 015 12z"
      />
    </svg>
  )
}

export default SvgHyphenBold

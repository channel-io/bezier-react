import React from 'react'

function SvgTrendingLeft(props: React.SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.151 11.634l5.166-5.165a.4.4 0 01.683.283v3.247h5.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H12v3.25a.4.4 0 01-.683.283l-5.166-5.165a.518.518 0 010-.733z"
      />
    </svg>
  )
}

export default SvgTrendingLeft

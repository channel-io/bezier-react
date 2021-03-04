import React from 'react'

function SvgLightning(props: React.SVGProps<SVGSVGElement>) {
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
        d="M6.526 12.537l4.475 1.036-1.827 6.212 8.3-8.323-4.475-1.036 1.826-6.212-8.299 8.323zm1.62 10.5c-.263 0-.528-.072-.77-.216a1.481 1.481 0 01-.675-1.713l1.783-6.065-3.286-.76a1.5 1.5 0 01-.724-2.52L14.798 1.41a1.48 1.48 0 011.826-.232c.6.356.872 1.044.675 1.713l-1.784 6.065 3.287.761a1.5 1.5 0 01.723 2.521L9.202 22.59a1.487 1.487 0 01-1.056.446z"
      />
    </svg>
  )
}

export default SvgLightning

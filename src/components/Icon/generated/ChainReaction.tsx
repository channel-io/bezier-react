import React from 'react'

function SvgChainReaction(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 8c1.11 0 2.08-.604 2.6-1.5a7.015 7.015 0 014.348 5.633 1 1 0 101.984-.246 9.019 9.019 0 00-5.974-7.389A3 3 0 1012 8zm4.402 10.5a3 3 0 111.553 1.312 9.02 9.02 0 01-9.384 1.48 1 1 0 01.778-1.843 7.017 7.017 0 007.053-.949zM8 17a3 3 0 11-4.914-2.31 9.003 9.003 0 013.412-8.868 1 1 0 011.204 1.596A7 7 0 004.998 14H5a3 3 0 013 3z"
      />
    </svg>
  )
}

export default SvgChainReaction

import React from 'react'

function SvgPlusSmall(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 5a1 1 0 00-1 1v5H6a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V6a1 1 0 00-1-1z"
      />
    </svg>
  )
}

export default SvgPlusSmall

import React from 'react'

function SvgArrowRight(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12.457 21.427L11 20.057 17.632 13H3v-2h14.607L11 3.97l1.457-1.37 7.881 8.386a1.5 1.5 0 010 2.055l-7.88 8.386z"
      />
    </svg>
  )
}

export default SvgArrowRight

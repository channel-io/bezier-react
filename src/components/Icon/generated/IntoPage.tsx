import React from 'react'

function SvgIntoPage(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4.5 3h15c.827 0 1.5.673 1.5 1.5v15c0 .827-.673 1.5-1.5 1.5H12v-2h7V5H5v7H3V4.5C3 3.673 3.673 3 4.5 3z"
      />
      <path
        fill="currentColor"
        d="M13.996 15.841c0 .364 0 .545-.071.63a.3.3 0 01-.252.104c-.11-.009-.239-.137-.496-.394l-1.973-1.974-5.854 5.854-1.414-1.415 5.853-5.853-1.973-1.974c-.257-.257-.386-.385-.394-.495a.3.3 0 01.104-.252C7.61 10 7.792 10 8.156 10h5.04c.28 0 .42 0 .527.055a.5.5 0 01.219.218c.054.107.054.247.054.527v5.041z"
      />
    </svg>
  )
}

export default SvgIntoPage

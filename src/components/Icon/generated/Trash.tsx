import React from 'react'

function SvgTrash(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14 4h-4v1h4V4zm2 1h4v2h-1v13.5c0 .811-.636 1.5-1.462 1.5H6.461c-.825 0-1.46-.689-1.46-1.5V7H4V5h4V3.5A1.5 1.5 0 019.5 2h5A1.5 1.5 0 0116 3.5V5zM7 20V7h10v13H7zm2-10v7h2v-7H9zm4 7v-7h2v7h-2z"
      />
    </svg>
  )
}

export default SvgTrash

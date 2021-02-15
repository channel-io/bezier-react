import React from 'react'

function SvgBookCover(props: React.SVGProps<SVGSVGElement>) {
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
        d="M10 20h9V4H9v16h1zm-3 0H5V4h2v16zM8.5 2h11c.827 0 1.5.673 1.5 1.5v17c0 .827-.673 1.5-1.5 1.5h-15c-.827 0-1.5-.673-1.5-1.5v-17C3 2.673 3.673 2 4.5 2h4zM17 7h-6v2h6V7z"
      />
    </svg>
  )
}

export default SvgBookCover

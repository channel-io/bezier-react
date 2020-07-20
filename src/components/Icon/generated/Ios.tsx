import React from 'react'

function SvgIos(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          fill="currentColor"
          d="M18.542 10.194c2.185 0 3.045 1.554 3.045 1.554s-1.681.86-1.681 2.946c0 2.353 2.094 3.162 2.094 3.162s-1.464 4.121-3.441 4.121c-.908 0-1.614-.611-2.571-.611-.976 0-1.943.634-2.574.634-1.805 0-4.087-3.91-4.087-7.05 0-3.091 1.932-4.713 3.743-4.713 1.177 0 2.09.678 2.703.678.525 0 1.5-.721 2.769-.721zm.22-3.739s.21 1.266-.805 2.486c-1.083 1.301-2.314 1.088-2.314 1.088s-.232-1.024.676-2.221c.944-1.243 2.226-1.344 2.418-1.352z"
        />
        <path
          fill="currentColor"
          d="M13 2a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2h8zm0 3H5v14h8V5z"
        />
      </g>
    </svg>
  )
}

export default SvgIos

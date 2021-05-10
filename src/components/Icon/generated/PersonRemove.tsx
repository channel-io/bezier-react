import React from 'react'

function SvgPersonRemove(props: React.SVGProps<SVGSVGElement>) {
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
        d="M10.99 10.2a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2zm3.6-1.6a3.6 3.6 0 11-7.2 0 3.6 3.6 0 017.2 0zM4.998 20.688v-.003.003zM5.331 19a6.003 6.003 0 0111.318 0H5.33zm13.648 1.582a8 8 0 00-15.978 0 .405.405 0 00.405.418h15.168a.405.405 0 00.405-.418zM17.584 7L15.463 4.88l1.414-1.414 2.121 2.12 2.122-2.12 1.414 1.414L20.413 7l2.12 2.121-1.413 1.415-2.122-2.122-2.121 2.122-1.414-1.415 2.121-2.12z"
      />
    </svg>
  )
}

export default SvgPersonRemove

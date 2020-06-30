import React from 'react'

function SvgCode(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.796 4.14l1.88.684-5.472 15.036-1.88-.684L13.796 4.14zM6.697 7l1.474 1.385L4.773 12l3.398 3.616L6.697 17 2 12l4.697-5zm10.606 0l4.698 5-4.698 5-1.473-1.385 3.398-3.616-3.398-3.614L17.303 7z"
      />
    </svg>
  )
}

export default SvgCode

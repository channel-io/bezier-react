import React from 'react'

function SvgDragable(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm8 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-5.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm5.5 2.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-5.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM16 22a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
      />
    </svg>
  )
}

export default SvgDragable

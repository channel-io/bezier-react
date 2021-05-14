import React from 'react'

function SvgHashtag(props: React.SVGProps<SVGSVGElement>) {
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
        d="M10.679 5.516a1 1 0 01.805 1.163L11.244 8h2.967l.305-1.679a1 1 0 011.968.358L16.244 8H17.5a1 1 0 110 2h-1.62l-.727 4H16.5a1 1 0 110 2h-1.71l-.306 1.679a1 1 0 11-1.968-.358l.24-1.321H9.79l-.305 1.679a1 1 0 11-1.968-.358L7.756 16H6.5a1 1 0 110-2h1.62l.727-4H7.5a1 1 0 010-2h1.71l.306-1.679a1 1 0 011.163-.805zM13.12 14l.727-4H10.88l-.727 4h2.967z"
      />
    </svg>
  )
}

export default SvgHashtag

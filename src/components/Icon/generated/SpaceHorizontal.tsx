import React from 'react'

function SvgSpaceHorizontal(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2.354 12.354a.5.5 0 010-.708l3.963-3.963A.4.4 0 017 7.966V11h10V7.966a.4.4 0 01.683-.283l3.963 3.963a.5.5 0 010 .707l-3.963 3.964a.4.4 0 01-.683-.283V13H7v3.034a.4.4 0 01-.683.283l-3.963-3.963z"
      />
    </svg>
  )
}

export default SvgSpaceHorizontal

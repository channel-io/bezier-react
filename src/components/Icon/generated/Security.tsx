import React from 'react'

function SvgSecurity(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        d="M7.086 11.639L8.5 10.225l2.36 2.361 4.726-4.725L17 9.275l-6.14 6.14-3.774-3.776z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 5.307l-9-3.375-9 3.375V10c0 4.669 2.638 8.937 6.814 11.025L12 22.118l2.186-1.093A12.326 12.326 0 0021 10V5.307zM5 10V6.693l7-2.625 7 2.625V10c0 3.911-2.21 7.487-5.708 9.236L12 19.882l-1.292-.646A10.326 10.326 0 015 10z"
      />
    </svg>
  )
}

export default SvgSecurity

import React from 'react'

function SvgSecurityPerson(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 11.5a2 2 0 100-4 2 2 0 000 4zM8 15.739c-.009.141.111.261.254.261h7.492c.143 0 .263-.12.253-.261A4.004 4.004 0 0012.002 12a4.005 4.005 0 00-4 3.739z"
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

export default SvgSecurityPerson

import React from 'react'

function SvgEmail(props: React.SVGProps<SVGSVGElement>) {
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
        d="M20.5 19h-17A1.5 1.5 0 012 17.5v-11A1.5 1.5 0 013.5 5h17A1.5 1.5 0 0122 6.5v11a1.5 1.5 0 01-1.5 1.5zM20 7.94V7H4v.94l8 4.888 8-4.889zm0 2.343V17H4v-6.717l7.088 4.331c.56.343 1.265.343 1.826 0L20 10.284z"
      />
    </svg>
  )
}

export default SvgEmail

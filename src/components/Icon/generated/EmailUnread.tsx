import React from 'react'

function SvgEmailUnread(props: React.SVGProps<SVGSVGElement>) {
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
        d="M19.5 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm-5.604-5v2H4v.94l7.999 4.887 3.728-2.276 1.043 1.706-3.856 2.357c-.514.315-1.15.34-1.684.079l-.142-.079L4 10.283V17h16v-5h2v5.5a1.5 1.5 0 01-1.355 1.493L20.5 19h-17a1.5 1.5 0 01-1.493-1.355L2 17.5v-11a1.5 1.5 0 011.356-1.493L3.5 5h10.396z"
      />
    </svg>
  )
}

export default SvgEmailUnread

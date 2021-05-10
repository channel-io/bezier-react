import React from 'react'

function SvgPencil(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16.777 10.395L6.675 20.496l-3.398-.014v-3.146l10.29-10.152 3.21 3.211zm1.414-1.414l1.385-1.385a2.257 2.257 0 00-3.181-3.202L14.99 5.78l3.2 3.2zm2.799.03L7.5 22.5l-5.227-.023a1 1 0 01-.996-1V16.5L14.99 2.97a4.257 4.257 0 016 6.04z"
      />
    </svg>
  )
}

export default SvgPencil

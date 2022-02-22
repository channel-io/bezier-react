import * as React from 'react'
import { SVGProps } from 'react'

function SvgPrint(props: SVGProps<SVGSVGElement>) {
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
        d="M6.109 3.546C6 3.76 6 4.04 6 4.6V7h-.6c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C3 8.139 3 8.559 3 9.4v5.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164H6v2.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C6.76 21 7.04 21 7.6 21h8.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C18 20.24 18 19.96 18 19.4V17h.6c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581V9.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C19.861 7 19.441 7 18.6 7H18V4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C17.24 3 16.96 3 16.4 3H7.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437ZM16 5H8v2h8V5Zm0 9H8v5h8v-5Zm0-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      />
    </svg>
  )
}

export default SvgPrint

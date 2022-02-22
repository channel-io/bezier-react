import * as React from 'react'
import { SVGProps } from 'react'

function SvgViewOffIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M16.416 13.547a4.107 4.107 0 0 0-4.107-4.107c-.234 0-.462.024-.685.063l-1.23-1.23a8.37 8.37 0 0 1 1.915-.23c3.426 0 6.543 2.01 8.338 5.378l1.765-.94c-2.148-4.031-5.925-6.438-10.103-6.438-1.22 0-2.395.234-3.514.631L3.869 1.747 2.455 3.161l18.384 18.385 1.414-1.414-5.9-5.9c.039-.223.063-.451.063-.685Zm-8.215 0a4.107 4.107 0 0 0 4.107 4.107 4.07 4.07 0 0 0 2.421-.804l-5.724-5.723c-.5.68-.804 1.511-.804 2.42Zm-4.23-.126-1.765-.94c.967-1.814 2.276-3.278 3.79-4.362l1.429 1.427c-1.386.92-2.58 2.233-3.454 3.875Z"
      />
    </svg>
  )
}

export default SvgViewOffIcon

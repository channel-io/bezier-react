import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgVariable(props: SVGProps<SVGSVGElement>) {
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
        d="M6 7V5H5l-.176.005A3 3 0 0 0 2 8v2l-.007.117A1 1 0 0 1 1 11v2l.117.007A1 1 0 0 1 2 14v2l.005.176A3 3 0 0 0 5 19h1v-2H5l-.117-.007A1 1 0 0 1 4 16v-2l-.005-.176A2.988 2.988 0 0 0 3.236 12c.475-.53.764-1.232.764-2V8l.007-.117A1 1 0 0 1 5 7h1Zm.206 4.993c0 .744.609 1.353 1.353 1.353.745 0 1.353-.609 1.353-1.353S8.304 10.64 7.56 10.64c-.744 0-1.353.608-1.353 1.352Zm4.48 0c0 .744.61 1.353 1.354 1.353.745 0 1.353-.609 1.353-1.353s-.609-1.352-1.353-1.352-1.353.608-1.353 1.352Zm5.835 1.353a1.356 1.356 0 0 1-1.353-1.353c0-.744.608-1.352 1.353-1.352.744 0 1.353.608 1.353 1.352 0 .744-.61 1.353-1.353 1.353ZM23 11a1 1 0 0 1-.993-.883L22 10V8a3 3 0 0 0-2.824-2.995L19 5h-1v2h1a1 1 0 0 1 .993.883L20 8v2c0 .768.289 1.47.764 2a2.988 2.988 0 0 0-.759 1.824L20 14v2a1 1 0 0 1-.883.993L19 17h-1v2h1a3 3 0 0 0 2.995-2.824L22 16v-2a1 1 0 0 1 .883-.993L23 13v-2Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgVariable)

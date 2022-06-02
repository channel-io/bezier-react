import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgViewOff(props: SVGProps<SVGSVGElement>) {
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
        d="M16.416 13.547a4.107 4.107 0 0 0-4.107-4.107c-.234 0-.462.024-.685.063l-1.23-1.23a8.37 8.37 0 0 1 1.915-.23c3.123 0 5.989 1.67 7.83 4.517.3.463.903.65 1.39.391.487-.26.675-.868.381-1.335-2.206-3.508-5.732-5.573-9.601-5.573-1.22 0-2.395.234-3.514.631l-4.22-4.22a1 1 0 1 0-1.413 1.414l16.97 16.971a1 1 0 1 0 1.414-1.414l-5.193-5.193c.039-.223.063-.451.063-.685ZM8.201 13.547a4.107 4.107 0 0 0 4.107 4.107 4.07 4.07 0 0 0 2.421-.804l-5.724-5.723c-.5.68-.804 1.511-.804 2.42ZM3.088 12.95c-.487-.259-.675-.867-.38-1.334.9-1.42 2.022-2.591 3.289-3.497l1.428 1.427a10.373 10.373 0 0 0-2.947 3.014c-.3.463-.902.65-1.39.39Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgViewOff)

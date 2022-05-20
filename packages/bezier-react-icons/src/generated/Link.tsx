import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgLink(props: SVGProps<SVGSVGElement>) {
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
        d="M12.975 6.633a1 1 0 1 1-1.414-1.414l1.652-1.652a5.351 5.351 0 0 1 7.567 7.567l-3.304 3.304a5.351 5.351 0 0 1-7.567 0 1 1 0 0 1 1.414-1.414 3.351 3.351 0 0 0 4.74 0l3.303-3.304a3.351 3.351 0 0 0-4.739-4.739l-1.652 1.652Z"
      />
      <path
        fill="currentColor"
        d="M11.372 17.714a1 1 0 0 1 1.414 1.415l-1.652 1.652a5.351 5.351 0 0 1-7.567-7.568L6.871 9.91a5.351 5.351 0 0 1 7.567 0 1 1 0 0 1-1.414 1.415 3.351 3.351 0 0 0-4.739 0l-3.304 3.304a3.351 3.351 0 0 0 4.74 4.738l1.651-1.652Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgLink)

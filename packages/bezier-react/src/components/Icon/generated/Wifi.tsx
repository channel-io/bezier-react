import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgWifi(props: SVGProps<SVGSVGElement>) {
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
        d="M8.98 16.015c-.242.183-.25.534-.04.754l2.697 2.848a.5.5 0 0 0 .726 0l2.697-2.848c.21-.22.202-.57-.04-.754A4.978 4.978 0 0 0 12 15c-1.134 0-2.18.378-3.02 1.015ZM16.44 14.588a.529.529 0 0 0 .718-.033L18.5 13.14c.21-.22.2-.57-.03-.767A9.96 9.96 0 0 0 12 10a9.96 9.96 0 0 0-6.468 2.373.527.527 0 0 0-.031.767l1.34 1.415c.19.2.506.208.72.033A6.971 6.971 0 0 1 12 13c1.685 0 3.231.595 4.44 1.588Z"
      />
      <path
        fill="currentColor"
        d="M19.883 10.952a.517.517 0 0 0 .714-.027l1.341-1.415c.209-.22.2-.57-.028-.77A14.943 14.943 0 0 0 12 5a14.943 14.943 0 0 0-9.91 3.74.535.535 0 0 0-.028.77l1.341 1.415c.19.201.506.209.714.027A11.954 11.954 0 0 1 12 8c3.017 0 5.774 1.114 7.883 2.952Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgWifi)

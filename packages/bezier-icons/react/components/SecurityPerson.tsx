import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSecurityPerson(props: SVGProps<SVGSVGElement>) {
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
        d="M12.0007 11.5C13.1046 11.5 14 10.6043 14 9.5C14 8.3957 13.1046 7.5 12.0007 7.5C10.8954 7.5 10 8.3957 10 9.5C10 10.6043 10.8954 11.5 12.0007 11.5Z"
      />
      <path
        fill="currentColor"
        d="M8.00049 15.7388C7.99135 15.8802 8.11135 16 8.25421 16H15.7458C15.8887 16 16.0087 15.8802 15.9995 15.7388C15.8646 13.6504 14.1252 12 12.0006 12C9.87481 12 8.13535 13.6504 8.00049 15.7388Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 5.30701L12 1.93201L3 5.30701V10C3 14.6688 5.63784 18.937 9.81378 21.0249L12 22.118L14.1862 21.0249C18.3622 18.937 21 14.6688 21 10V5.30701ZM5 10V6.69301L12 4.06801L19 6.69301V10C19 13.9113 16.7902 17.4869 13.2918 19.2361L12 19.882L10.7082 19.2361C7.20984 17.4869 5 13.9113 5 10Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSecurityPerson)

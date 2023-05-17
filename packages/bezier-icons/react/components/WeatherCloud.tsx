import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgWeatherCloud(props: SVGProps<SVGSVGElement>) {
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
        d="M6.019 10.2324C4.354 10.2324 3 11.5864 3 13.2524V13.5964C3 15.2614 4.354 16.6174 6.019 16.6174H16.921C19.17 16.6174 21 14.7874 21 12.5374C21 10.2874 19.17 8.45737 16.921 8.45737H15.722L15.433 7.96237C14.713 6.73337 13.448 6.00037 12.049 6.00037C10.116 6.00037 8.45 7.45137 8.172 9.37537L8.049 10.2324H6.019ZM16.921 18.6174H6.019C3.251 18.6174 1 16.3654 1 13.5964V13.2524C1 10.4844 3.251 8.23237 6.019 8.23237H6.382C7.125 5.76737 9.424 4.00037 12.049 4.00037C13.938 4.00037 15.723 4.92837 16.834 6.45737H16.921C20.273 6.45737 23 9.18437 23 12.5374C23 15.8894 20.273 18.6174 16.921 18.6174Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgWeatherCloud)

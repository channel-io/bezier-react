import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgString(props: SVGProps<SVGSVGElement>) {
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
        d="M2 7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V7ZM6.4099 7C6.17156 7 5.96635 7.16823 5.91961 7.40194L4.11961 16.4019C4.05773 16.7113 4.29437 17 4.6099 17H5.59009C5.82843 17 6.03364 16.8318 6.08038 16.5981L6.39999 15H9.59999L9.91961 16.5981C9.96635 16.8318 10.1716 17 10.4099 17H11.3901C11.7056 17 11.9423 16.7113 11.8804 16.4019L10.0804 7.40194C10.0336 7.16823 9.82843 7 9.59009 7H8.99999H7.99999H6.99999H6.4099ZM7.59999 9L6.79999 13H9.19999L8.39999 9H7.59999ZM19.5 7.5C19.5 7.22386 19.2761 7 19 7H13.5C13.2239 7 13 7.22386 13 7.5V8.5C13 8.77614 13.2239 9 13.5 9H17.197L13.0989 14.5051C13.0347 14.5913 13 14.696 13 14.8036V16.5C13 16.7761 13.2239 17 13.5 17H19C19.2761 17 19.5 16.7761 19.5 16.5V15.5C19.5 15.2239 19.2761 15 19 15H15.301L19.401 9.49497C19.4653 9.40867 19.5 9.30393 19.5 9.19631V7.5Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgString)

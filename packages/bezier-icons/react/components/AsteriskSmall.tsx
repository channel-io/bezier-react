import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgAsteriskSmall(props: SVGProps<SVGSVGElement>) {
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
        d="M12 5.5C12.5523 5.5 13 5.94772 13 6.5V10.268L16.2632 8.38397C16.7415 8.10783 17.3531 8.27171 17.6292 8.75C17.9053 9.22829 17.7415 9.83988 17.2632 10.116L14 12L17.2631 13.884C17.7414 14.1601 17.9053 14.7717 17.6292 15.25C17.353 15.7283 16.7414 15.8922 16.2631 15.616L13 13.7321V17.5C13 18.0523 12.5523 18.5 12 18.5C11.4477 18.5 11 18.0523 11 17.5V13.7321L7.73689 15.616C7.2586 15.8922 6.64701 15.7283 6.37086 15.25C6.09472 14.7717 6.2586 14.1601 6.73689 13.884L10 12L6.73686 10.116C6.25857 9.83988 6.09469 9.22829 6.37084 8.75C6.64698 8.27171 7.25857 8.10783 7.73686 8.38397L11 10.268V6.5C11 5.94772 11.4477 5.5 12 5.5Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgAsteriskSmall)

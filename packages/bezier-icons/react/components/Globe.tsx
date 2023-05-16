import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgGlobe(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.334 19.263c.819-1.691 1.297-3.966 1.404-6.263h3.192a8.012 8.012 0 0 1-4.596 6.263ZM4.069 13h3.193c.108 2.297.587 4.573 1.406 6.264A8.012 8.012 0 0 1 4.07 13Zm4.6-8.264C7.848 6.426 7.37 8.702 7.261 11H4.07a8.01 8.01 0 0 1 4.6-6.264ZM9.261 11c.204-4.303 1.691-7 2.739-7 1.048 0 2.534 2.697 2.738 7H9.261Zm2.739 8.999c-1.047 0-2.535-2.696-2.739-7h5.476c-.204 4.304-1.69 7-2.737 7Zm7.93-9h-3.193c-.107-2.296-.585-4.571-1.404-6.262A8.012 8.012 0 0 1 19.93 11ZM12 2C6.485 2 2 6.487 2 12c0 5.515 4.484 10 10 10 5.514 0 10-4.485 10-10 0-5.513-4.486-10-10-10Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgGlobe)

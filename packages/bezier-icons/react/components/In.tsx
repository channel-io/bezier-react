import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgIn(props: SVGProps<SVGSVGElement>) {
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
        d="M10.379 15.4139L12.7929 13H3.00012C2.44784 13 2.00012 12.5523 2.00012 12C2.00012 11.4477 2.44784 11 3.00012 11H12.7937L10.379 8.58531C9.9885 8.19479 9.9885 7.56162 10.379 7.1711C10.7695 6.78057 11.4027 6.78057 11.7932 7.1711L15.5611 10.939C16.1467 11.5245 16.1467 12.4747 15.5611 13.0602L11.7932 16.8281C11.4027 17.2186 10.7695 17.2186 10.379 16.8281C9.9885 16.4376 9.9885 15.8044 10.379 15.4139Z"
      />
      <path
        fill="currentColor"
        d="M18 2C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H13C12.4477 22 12 21.5523 12 21C12 20.4477 12.4477 20 13 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H13C12.4477 4 12 3.55228 12 3C12 2.44772 12.4477 2 13 2H18Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgIn)

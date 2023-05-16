import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChatCheckFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M20.822 16.683c-.246.461-.265 1.011-.099 1.507l.638 1.915a1 1 0 0 1-1.264 1.265l-1.37-.457-.553-.184c-.493-.164-1.037-.145-1.496.1-1.949 1.039-4.275 1.461-6.73.967-4.002-.805-7.166-4.093-7.819-8.121A10.013 10.013 0 0 1 13.664 2.137c4.03.652 7.318 3.817 8.123 7.817.494 2.455.074 4.78-.965 6.729Zm-13.46-5.705 3.041 2.92 6.178-5.804 1.369 1.457-7.561 7.106-4.412-4.236 1.385-1.443Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChatCheckFilled)

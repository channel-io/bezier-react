import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSpaceVertical(props: SVGProps<SVGSVGElement>) {
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
        d="M12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.36568 18.3657C7.86171 17.8617 8.21864 17 8.93136 17H11V6.99995H8.93136C8.21864 6.99995 7.86171 6.13824 8.36568 5.63427L11.2929 2.70706C11.6834 2.31654 12.3166 2.31654 12.7071 2.70706L15.6343 5.63427C16.1383 6.13824 15.7813 6.99995 15.0686 6.99995H13V17H15.0686C15.7813 17 16.1383 17.8617 15.6343 18.3657L12.7071 21.2929Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSpaceVertical)

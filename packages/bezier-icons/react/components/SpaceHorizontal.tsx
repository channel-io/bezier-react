import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSpaceHorizontal(props: SVGProps<SVGSVGElement>) {
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
        d="M2.70714 12.7071C2.31661 12.3166 2.31661 11.6834 2.70714 11.2929L5.63435 8.36568C6.13832 7.86171 7.00003 8.21864 7.00003 8.93136V11H17V8.93136C17 8.21864 17.8618 7.86171 18.3657 8.36568L21.2929 11.2929C21.6835 11.6834 21.6835 12.3166 21.2929 12.7071L18.3657 15.6343C17.8618 16.1383 17 15.7813 17 15.0686V13H7.00003V15.0686C7.00003 15.7813 6.13832 16.1383 5.63435 15.6343L2.70714 12.7071Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSpaceHorizontal)

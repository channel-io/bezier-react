import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgBold(props: SVGProps<SVGSVGElement>) {
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
        d="M6 3C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H14C17.0376 21 19.5 18.5376 19.5 15.5C19.5 13.7352 18.6688 12.1646 17.3766 11.1581C18.0788 10.2971 18.5 9.19775 18.5 8C18.5 5.23858 16.2614 3 13.5 3H6ZM13.5 10C14.6046 10 15.5 9.10457 15.5 8C15.5 6.89543 14.6046 6 13.5 6H8V10H13.5ZM8 13V18H14C15.3807 18 16.5 16.8807 16.5 15.5C16.5 14.1193 15.3807 13 14 13H8Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBold)

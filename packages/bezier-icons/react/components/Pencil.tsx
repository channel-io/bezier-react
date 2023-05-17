import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPencil(props: SVGProps<SVGSVGElement>) {
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
        d="M16.7767 10.395L6.67525 20.4964L3.2773 20.4815L3.27729 17.3363L13.5662 7.18447L16.7767 10.395ZM18.1909 8.98074L19.5758 7.59587C20.4571 6.71451 20.4571 5.28554 19.5758 4.40418C18.6986 3.527 17.2779 3.52224 16.3948 4.39352L14.9899 5.77973L18.1909 8.98074ZM20.99 9.01008L7.50004 22.5L2.27293 22.4771C1.72236 22.4747 1.27731 22.0277 1.27731 21.4771L1.27728 16.5001L14.9901 2.96986C16.6557 1.32646 19.3354 1.33544 20.99 2.98997C22.6524 4.65238 22.6524 7.34767 20.99 9.01008Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPencil)

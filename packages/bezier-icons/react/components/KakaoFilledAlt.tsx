import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgKakaoFilledAlt(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2C5.92938 2 1 5.86375 1 10.6762C1 13.77 3.0625 16.4856 6.15625 18.0325C6.11819 18.1673 6.04025 18.4389 5.94236 18.7801C5.61586 19.918 5.06736 21.8296 5.03563 22.02C5.02916 22.0687 5.03524 22.1183 5.05328 22.164C5.07133 22.2097 5.10075 22.2501 5.13875 22.2812C5.1801 22.2986 5.22451 22.3076 5.26937 22.3076C5.31424 22.3076 5.35865 22.2986 5.4 22.2812C5.74375 22.2331 9.415 19.655 10.0475 19.2081C10.6943 19.2996 11.3468 19.3455 12 19.3456C18.0775 19.3456 23 15.4681 23 10.6762C23 5.88437 18.0706 2 12 2Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgKakaoFilledAlt)

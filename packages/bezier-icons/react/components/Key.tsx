import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgKey(props: SVGProps<SVGSVGElement>) {
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
        d="M12.9577 11.0403C11.9817 10.0643 11.9817 8.48127 12.9577 7.50527C13.9347 6.52827 15.5167 6.52827 16.4937 7.50527C17.4697 8.48127 17.4697 10.0643 16.4937 11.0403C15.5167 12.0173 13.9337 12.0173 12.9577 11.0403ZM18.9707 5.02727C16.6267 2.68427 12.8287 2.68427 10.4857 5.02727C8.63869 6.87427 8.25369 9.62227 9.31769 11.8523L1.99969 19.1693V21.9983H4.82869L5.53569 21.2913V19.1693H7.65669L8.36369 18.4623V16.3413H10.4857L12.1457 14.6803C14.3757 15.7443 17.1247 15.3593 18.9707 13.5133C21.3137 11.1693 21.3137 7.37127 18.9707 5.02727Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgKey)

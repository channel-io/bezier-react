import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChannelUpFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M15.2135 10.8077C14.3685 10.8077 14.0145 10.1967 14.0145 8.7027C14.0145 7.2077 14.3685 6.5977 15.2135 6.5977C16.0585 6.5977 16.4115 7.2077 16.4115 8.7027C16.4115 10.1967 16.0585 10.8077 15.2135 10.8077ZM8.7865 10.8077C7.9415 10.8077 7.5885 10.1967 7.5885 8.7027C7.5885 7.2077 7.9415 6.5977 8.7865 6.5977C9.6315 6.5977 9.9845 7.2077 9.9845 8.7027C9.9845 10.1967 9.6315 10.8077 8.7865 10.8077ZM20.7235 18.1877C20.5575 17.6917 20.5765 17.1417 20.8225 16.6807C21.8605 14.7327 22.2815 12.4067 21.7875 9.95271C20.9825 5.95171 17.6925 2.78671 13.6645 2.13571C6.8375 1.03071 1.0235 6.84571 2.1295 13.6727C2.7825 17.7007 5.9465 20.9897 9.9465 21.7937C12.4025 22.2877 14.7295 21.8667 16.6785 20.8267C17.1375 20.5817 17.6805 20.5617 18.1745 20.7267C18.7115 20.9057 19.4285 21.1447 20.0975 21.3677C20.8795 21.6287 21.6225 20.8847 21.3615 20.1027L20.7235 18.1877Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChannelUpFilled)

import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChatCheck(props: SVGProps<SVGSVGElement>) {
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
        d="M18.8674 17.7642C18.6494 17.1082 18.7174 16.3922 19.0604 15.7482C19.9444 14.0932 20.2114 12.2282 19.8344 10.3542C19.1874 7.14318 16.5804 4.63318 13.3444 4.10918C12.8934 4.03618 12.4434 4.00018 11.9984 4.00018C9.87737 4.00018 7.87137 4.81818 6.34937 6.33818C4.50837 8.17518 3.69037 10.7232 4.10637 13.3272C4.64837 16.7132 7.40937 19.4222 10.8224 19.9152C12.5334 20.1622 14.2384 19.8662 15.7484 19.0612C16.3904 18.7172 17.1054 18.6482 17.7634 18.8672L19.4194 19.4192L18.8674 17.7642ZM20.8254 16.6892C20.7774 16.7782 20.7064 16.9562 20.7654 17.1322L21.6334 19.7352C21.8134 20.2782 21.6754 20.8662 21.2704 21.2702C20.8664 21.6752 20.2774 21.8112 19.7354 21.6332L17.1304 20.7652C16.9564 20.7062 16.7794 20.7762 16.6904 20.8242C15.2344 21.6022 13.6364 22.0002 12.0004 22.0002C11.5144 22.0002 11.0254 21.9652 10.5364 21.8942C6.26638 21.2782 2.81038 17.8842 2.13238 13.6432C1.61338 10.3972 2.63538 7.21918 4.93638 4.92218C7.23738 2.62518 10.4154 1.61118 13.6644 2.13518C17.7174 2.79118 20.9854 5.93518 21.7954 9.96018C22.2654 12.2942 21.9304 14.6212 20.8254 16.6892ZM7.36254 10.978L10.4035 13.898L16.5805 8.09399L17.9495 9.55099L10.3885 16.657L5.97754 12.421L7.36254 10.978Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChatCheck)

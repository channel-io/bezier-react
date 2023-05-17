import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChatCheckFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M20.8223 16.683C20.5763 17.144 20.5573 17.694 20.7233 18.19L21.3613 20.105C21.6223 20.886 20.8793 21.63 20.0973 21.37C19.6395 21.2172 19.1583 21.0569 18.7279 20.9135C18.5302 20.8476 18.3433 20.7853 18.1743 20.729C17.6813 20.565 17.1373 20.584 16.6783 20.829C14.7293 21.868 12.4033 22.29 9.94729 21.796C5.94629 20.991 2.78229 17.703 2.12929 13.675C1.02329 6.848 6.83729 1.033 13.6643 2.137C17.6933 2.789 20.9823 5.954 21.7873 9.954C22.2813 12.409 21.8613 14.734 20.8223 16.683ZM7.36248 10.978L10.4035 13.898L16.5805 8.09401L17.9495 9.55101L10.3885 16.657L5.97748 12.421L7.36248 10.978Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChatCheckFilled)

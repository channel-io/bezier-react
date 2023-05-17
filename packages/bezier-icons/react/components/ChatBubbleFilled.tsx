import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChatBubbleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M20.7233 18.19C20.5573 17.694 20.5763 17.144 20.8223 16.683C21.8613 14.734 22.2813 12.409 21.7873 9.954C20.9823 5.954 17.6933 2.789 13.6643 2.137C6.8373 1.033 1.0233 6.848 2.1293 13.675C2.7823 17.703 5.9463 20.991 9.9473 21.796C12.4033 22.29 14.7293 21.868 16.6783 20.829C17.1373 20.584 17.6813 20.565 18.1743 20.729C18.7113 20.908 19.4293 21.147 20.0973 21.37C20.8793 21.63 21.6223 20.886 21.3613 20.105L20.7233 18.19Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChatBubbleFilled)

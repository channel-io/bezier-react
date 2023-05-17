import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChatQuestionFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M20.8223 16.683C20.5763 17.144 20.5573 17.694 20.7233 18.19L21.3613 20.105C21.6223 20.886 20.8793 21.63 20.0973 21.37C19.6395 21.2172 19.1583 21.0569 18.7279 20.9135C18.5302 20.8476 18.3433 20.7853 18.1743 20.729C17.6813 20.565 17.1373 20.584 16.6783 20.829C14.7293 21.868 12.4033 22.29 9.94729 21.796C5.94629 20.991 2.78229 17.703 2.12929 13.675C1.02329 6.848 6.83729 1.033 13.6643 2.137C17.6933 2.789 20.9823 5.954 21.7873 9.954C22.2813 12.409 21.8613 14.734 20.8223 16.683ZM12.8307 14.541H10.9299V13.8327C10.9299 12.6772 11.5552 11.5937 12.6016 10.9334C13.469 10.3871 13.9392 9.99397 13.9392 9.48575C13.9392 8.47229 12.9388 7.92505 11.9984 7.92505C10.9639 7.92505 10.0575 8.65438 10.0575 9.48575H8.15665C8.15665 7.60991 9.91543 6.0242 11.9984 6.0242C14.1523 6.0242 15.8401 7.54488 15.8401 9.48575C15.8401 11.1395 14.4475 12.0179 13.6151 12.5411C13.379 12.6902 12.8307 13.1144 12.8307 13.8327V14.541ZM13.1849 16.9288C13.1849 17.6161 12.6286 18.1723 11.9413 18.1723C11.255 18.1723 10.6978 17.6161 10.6978 16.9288C10.6978 16.2415 11.255 15.6852 11.9413 15.6852C12.6286 15.6852 13.1849 16.2415 13.1849 16.9288Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChatQuestionFilled)

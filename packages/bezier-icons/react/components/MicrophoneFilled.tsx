import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMicrophoneFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2C9.79086 2 7.99999 3.79086 7.99999 6V13C7.99999 15.2091 9.79086 17 12 17C14.2091 17 16 15.2091 16 13V6C16 3.79086 14.2091 2 12 2ZM11 20.9381C7.38061 20.4868 4.51209 17.6177 4.06164 13.998C3.99344 13.45 4.44771 13 4.99999 13C5.55228 13 5.99126 13.4511 6.08225 13.9958C6.5566 16.8356 9.02554 19 12 19C14.9745 19 17.4434 16.8356 17.9177 13.9958C18.0087 13.4511 18.4477 13 19 13C19.5523 13 20.0066 13.45 19.9383 13.998C19.4879 17.6177 16.6194 20.4868 13 20.9381V23H11V20.9381Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMicrophoneFilled)

import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgFacebook(props: SVGProps<SVGSVGElement>) {
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
        d="M12.0002 2.00012C6.47718 2.00012 2.00018 6.47712 2.00018 12.0001C2.00018 16.9861 5.65418 21.1091 10.4292 21.8641V14.8661H7.88218V12.0001H10.4292V10.3461C10.4292 10.0491 9.92718 4.73212 16.4342 6.09512V8.58512H14.9612C14.1922 8.58512 13.5692 9.20812 13.5692 9.97712V10.3461V12.0001H16.3282L15.9252 14.8661H13.5692V21.8651C18.3452 21.1101 22.0002 16.9871 22.0002 12.0001C22.0002 6.47712 17.5222 2.00012 12.0002 2.00012Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgFacebook)

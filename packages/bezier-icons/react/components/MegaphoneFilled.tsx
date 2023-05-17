import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMegaphoneFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M20.1382 2.01807C19.9962 2.01807 19.8502 2.05407 19.7112 2.13307L13.2012 5.86007C13.0702 5.93507 12.9232 5.97407 12.7732 5.97407H4.0002C3.4482 5.97407 3.0002 6.42207 3.0002 6.97407V15.0001C3.0002 15.5521 3.4482 16.0001 4.0002 16.0001H6.6682L5.7602 20.3991C5.6962 20.7091 5.9332 21.0001 6.2502 21.0001H9.5712C9.9502 21.0001 10.2782 20.7331 10.3542 20.3621L11.2552 16.0001H12.7732C12.9232 16.0001 13.0702 16.0391 13.2012 16.1141L19.7112 19.8411C19.8502 19.9201 19.9962 19.9561 20.1382 19.9561C20.5872 19.9561 21.0002 19.5961 21.0002 19.0941V2.88007C21.0002 2.37807 20.5872 2.01807 20.1382 2.01807Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMegaphoneFilled)

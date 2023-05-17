import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChevronDownDouble(props: SVGProps<SVGSVGElement>) {
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
        d="M19.6508 6.75934C20.0701 6.39991 20.1187 5.76861 19.7592 5.34929C19.3998 4.92996 18.7685 4.8814 18.3492 5.24082L12 10.683L5.65078 5.24082C5.23145 4.8814 4.60015 4.92996 4.24073 5.34929C3.88131 5.76861 3.92987 6.39991 4.3492 6.75934L11.3492 12.7593C11.7237 13.0803 12.2763 13.0803 12.6508 12.7593L19.6508 6.75934Z"
      />
      <path
        fill="currentColor"
        d="M19.6508 14.7593C20.0701 14.3999 20.1187 13.7686 19.7592 13.3493C19.3998 12.93 18.7685 12.8814 18.3492 13.2408L12 18.683L5.65078 13.2408C5.23145 12.8814 4.60015 12.93 4.24073 13.3493C3.88131 13.7686 3.92987 14.3999 4.3492 14.7593L11.3492 20.7593C11.7237 21.0803 12.2763 21.0803 12.6508 20.7593L19.6508 14.7593Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChevronDownDouble)

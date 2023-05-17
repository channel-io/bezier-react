import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgFunnelRemove(props: SVGProps<SVGSVGElement>) {
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
        d="M15 12.8284V11H14H13.4423H10.5577C10.3697 10.6342 10.1247 10.2962 9.82843 10L5 5.17157V4H13V2H4C3.44772 2 3 2.44772 3 3V5.17157C3 5.70201 3.21071 6.21071 3.58579 6.58579L8.41421 11.4142C8.78929 11.7893 9 12.298 9 12.8284V21.382C9 21.5372 9.03615 21.6903 9.10557 21.8292C9.35256 22.3232 9.95324 22.5234 10.4472 22.2764L14.4472 20.2764C14.786 20.107 15 19.7607 15 19.382V13V12.8284ZM13 13V18.763L11 19.763V13H13ZM14.4628 3.8788L16.5841 6.00012L14.4628 8.12144L15.877 9.53566L17.9983 7.41434L20.1197 9.53566L21.5339 8.12144L19.4126 6.00012L21.5339 3.8788L20.1197 2.46459L17.9983 4.58591L15.877 2.46459L14.4628 3.8788Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgFunnelRemove)

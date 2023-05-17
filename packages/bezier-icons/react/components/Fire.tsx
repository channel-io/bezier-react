import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgFire(props: SVGProps<SVGSVGElement>) {
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
        d="M12.0002 18.0001C9.7942 18.0001 8.0002 16.2061 8.0002 14.0001C8.0002 13.1251 8.1882 12.5061 8.6112 11.8941C8.7892 12.3361 9.0192 12.7641 9.3002 13.1681C10.5372 14.9501 12.6452 16.0571 14.8012 16.0571C15.0202 16.0571 15.2362 16.0461 15.4492 16.0251C14.7522 17.2061 13.4672 18.0001 12.0002 18.0001ZM20.0002 14.0001C20.0002 9.24412 17.0002 5.95412 17.0002 5.95412C17.6372 8.33112 17.4812 9.88112 16.9342 10.8841C15.7432 13.0641 12.3482 11.3961 13.2102 9.06612C14.8012 4.76612 13.6412 4.09312 12.0002 1.00012C12.0002 1.00012 12.1512 2.72412 8.5942 6.25512C8.3602 6.48812 8.1222 6.70912 7.8822 6.92412C5.9592 8.65812 4.0002 10.0241 4.0002 14.0001C4.0002 18.4111 7.5892 22.0001 12.0002 22.0001C16.4112 22.0001 20.0002 18.4111 20.0002 14.0001Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgFire)

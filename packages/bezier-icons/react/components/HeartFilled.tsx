import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgHeartFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M20.3351 4.96665C19.9291 4.56065 19.3961 4.23565 18.8191 3.97465C16.4261 2.89265 13.2961 3.68065 12.0001 6.13265C10.7031 3.68065 7.5731 2.89265 5.1811 3.97465C4.6041 4.23565 4.0711 4.56065 3.6651 4.96665C1.5121 7.11965 1.4601 10.3947 3.4321 12.7647C5.5551 15.3157 9.1511 18.6707 11.3351 20.6427C11.7151 20.9867 12.2841 20.9867 12.6651 20.6427C14.8491 18.6707 18.4451 15.3157 20.5681 12.7647C22.5391 10.3947 22.4881 7.11965 20.3351 4.96665Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgHeartFilled)

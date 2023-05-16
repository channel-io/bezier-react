import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgContract(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.94 4.057a1 1 0 0 0-1.415 0L14.793 7.79l-.608-.607c-.685-.686-1.028-1.029-1.322-1.052a.8.8 0 0 0-.671.278C12 6.633 12 7.118 12 8.087v2.31c0 .56 0 .84.109 1.053a1 1 0 0 0 .437.438c.214.108.494.108 1.054.108h2.31c.97 0 1.454 0 1.678-.191a.8.8 0 0 0 .278-.671c-.023-.295-.366-.637-1.051-1.323l-.608-.607L19.94 5.47a1 1 0 0 0 0-1.414ZM11.995 15.91c0 .97 0 1.454-.191 1.678a.8.8 0 0 1-.671.278c-.295-.023-.637-.366-1.323-1.051l-.607-.608L5.47 19.94a1 1 0 1 1-1.414-1.414l3.732-3.732-.607-.608c-.686-.685-1.029-1.028-1.052-1.322a.8.8 0 0 1 .278-.671C6.633 12 7.118 12 8.087 12h2.31c.56 0 .84 0 1.053.109a1 1 0 0 1 .438.437c.108.214.108.494.108 1.054v2.31Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgContract)

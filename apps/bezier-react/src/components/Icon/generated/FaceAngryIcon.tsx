import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgFaceAngryIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4 12c0 4.411 3.59 8 8 8 4.411 0 8-3.589 8-8 0-4.41-3.589-8-8-8-4.41 0-8 3.59-8 8Zm-2 0C2 6.478 6.477 2 12 2c5.522 0 10 4.478 10 10s-4.478 10-10 10C6.477 22 2 17.522 2 12Zm7.818-1.074v.009c0 1.608-.38 2.265-1.29 2.265-.908 0-1.288-.657-1.288-2.265 0-.53.046-.948.135-1.282l-1.242-.648a1 1 0 0 1 .925-1.773l3.767 1.964a1 1 0 1 1-.924 1.773l-.083-.043Zm2.188 2.782h-.002c-2.232 0-3.338 1.326-3.64 2.11a.988.988 0 0 0 .556 1.268c.5.212 1.08-.033 1.302-.527.039-.087.421-.85 1.781-.85h.002c1.339 0 1.725.745 1.771.846a1 1 0 0 0 1.859-.736c-.299-.783-1.401-2.109-3.629-2.11Zm4.936-6.477a1 1 0 0 1 .925 1.774l-1.269.661c.086.332.131.745.131 1.268 0 1.61-.38 2.265-1.289 2.265-.907 0-1.287-.655-1.288-2.258l-.052.028a1.001 1.001 0 0 1-.925-1.774l3.767-1.964Z"
      />
    </svg>
  )
}

export default createIcon(SvgFaceAngryIcon)

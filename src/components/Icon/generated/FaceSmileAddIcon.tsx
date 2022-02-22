import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgFaceSmileAddIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M18 1h2v3h3v2h-3v3h-2V6h-3V4h3V1Zm-5 1.05c-.329-.033-.662-.05-1-.05C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.338-.017-.671-.05-1h-2.012A8 8 0 1 1 13 4.062V2.049Zm-4.214 9.775c-.845 0-1.199-.61-1.199-2.105s.354-2.106 1.2-2.106c.844 0 1.197.611 1.197 2.106 0 1.495-.353 2.105-1.198 2.105Zm3.208 5.883h-.004c-4.307-.004-5.49-3.46-5.539-3.607a.999.999 0 0 1 1.897-.632c.035.1.82 2.237 3.643 2.24h.003c2.864 0 3.635-2.174 3.655-2.23v-.002a.998.998 0 1 1 1.9.625c-.049.147-1.238 3.606-5.555 3.606Zm2.021-7.988c0 1.495.353 2.105 1.199 2.105.845 0 1.198-.61 1.198-2.105s-.353-2.106-1.198-2.106c-.846 0-1.199.611-1.199 2.106Z"
      />
    </svg>
  )
}

export default createIcon(SvgFaceSmileAddIcon)

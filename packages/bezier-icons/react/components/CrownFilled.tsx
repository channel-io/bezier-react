import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCrownFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M2.26992 7.88934L3.63205 17.4242C3.84319 18.9022 5.10895 20 6.6019 20H17.3981C18.8911 20 20.1568 18.9022 20.368 17.4242L21.7301 7.88935C21.8442 7.09079 21.0144 6.49275 20.2929 6.8535L16.7896 8.60517C16.3385 8.83071 15.7901 8.68506 15.5103 8.26544L12.8321 4.24803C12.4362 3.6543 11.5638 3.6543 11.168 4.24803L8.48969 8.26544C8.20994 8.68506 7.66151 8.83071 7.21043 8.60517L3.70709 6.8535C2.98559 6.49275 2.15585 7.09079 2.26992 7.88934Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCrownFilled)

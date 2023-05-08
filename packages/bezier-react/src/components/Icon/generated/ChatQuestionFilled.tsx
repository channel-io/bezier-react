import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgChatQuestionFilled')
function SvgChatQuestionFilled(props: SVGProps<SVGSVGElement>) {
  const Svg = (
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
        d="M20.822 16.683c-.246.461-.265 1.011-.099 1.507l.638 1.915a1 1 0 0 1-1.264 1.265l-1.37-.457-.553-.184c-.493-.164-1.037-.145-1.496.1-1.949 1.039-4.275 1.461-6.73.967-4.002-.805-7.166-4.093-7.819-8.121A10.013 10.013 0 0 1 13.664 2.137c4.03.652 7.318 3.817 8.123 7.817.494 2.455.074 4.78-.965 6.729Zm-7.991-2.142H10.93v-.708c0-1.156.625-2.24 1.672-2.9.867-.546 1.337-.939 1.337-1.447 0-1.014-1-1.561-1.94-1.561-1.035 0-1.942.73-1.942 1.56h-1.9c0-1.875 1.758-3.46 3.841-3.46 2.154 0 3.842 1.52 3.842 3.46 0 1.655-1.393 2.533-2.225 3.056-.236.15-.784.573-.784 1.292v.708Zm.354 2.388a1.243 1.243 0 1 1-2.486.001 1.243 1.243 0 0 1 2.486-.001Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgChatQuestionFilled)

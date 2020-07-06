import React from 'react'

function SvgCall(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.035 20.994l-.527-.08A19.58 19.58 0 013.085 4.488l-.08-.523a.456.456 0 01.384-.52l2.78-.423a1.991 1.991 0 012.209 1.406l.786 2.668c.206.7.014 1.455-.502 1.97l-1.387 1.388a17.417 17.417 0 006.27 6.271l1.389-1.388a1.99 1.99 0 011.97-.502l2.668.786a1.992 1.992 0 011.406 2.208l-.043.28-.38 2.501a.456.456 0 01-.52.384"
      />
    </svg>
  )
}

export default SvgCall

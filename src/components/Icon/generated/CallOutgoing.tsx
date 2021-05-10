import React from 'react'

function SvgCallOutgoing(props: React.SVGProps<SVGSVGElement>) {
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
        d="M19.508 20.914l.527.08a.458.458 0 00.52-.384l.38-2.502.043-.279a1.992 1.992 0 00-1.406-2.208l-2.667-.786a1.993 1.993 0 00-1.971.502l-1.388 1.388a17.412 17.412 0 01-6.271-6.27l1.387-1.389a1.989 1.989 0 00.502-1.97l-.786-2.668A1.99 1.99 0 006.17 3.022l-2.781.422a.456.456 0 00-.383.521l.079.523a19.58 19.58 0 0016.423 16.426zM14 3h5.5c.827 0 1.5.673 1.5 1.5V10h-2V6.418l-5.293 5.29-1.414-1.416L17.59 5H14V3z"
      />
    </svg>
  )
}

export default SvgCallOutgoing

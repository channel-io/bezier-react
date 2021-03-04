import React from 'react'

function SvgMegaphone(props: React.SVGProps<SVGSVGElement>) {
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
        d="M19 17.129l-4.806-2.751a2.856 2.856 0 00-1.42-.378H9V7.974h3.773c.498 0 .99-.131 1.421-.378L19 4.845v12.284zM5 14h2V7.974H5V14zM20.138 2.018a.86.86 0 00-.427.115l-6.51 3.727a.86.86 0 01-.428.114H4a1 1 0 00-1 1V15a1 1 0 001 1h.668l-.908 4.399a.5.5 0 00.49.601h2.321a.8.8 0 00.783-.638L8.255 16h4.518a.86.86 0 01.428.114l6.51 3.727a.86.86 0 001.29-.747V2.88a.862.862 0 00-.863-.862z"
      />
    </svg>
  )
}

export default SvgMegaphone

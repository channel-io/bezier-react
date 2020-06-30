import React from 'react'

function SvgBot(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 5.998a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2v-10a2 2 0 012-2h16zm0 2H4v10h16v-10zm-11.826 2.46c1.01 0 1.431.728 1.431 2.514 0 1.787-.421 2.516-1.431 2.516s-1.432-.729-1.432-2.516c0-1.786.421-2.515 1.432-2.515zm7.68 0c1.01 0 1.432.728 1.432 2.514 0 1.787-.422 2.516-1.432 2.516s-1.432-.729-1.432-2.516c0-1.786.422-2.515 1.432-2.515zM12.024 2a3 3 0 013 3h-6a3 3 0 013-3z"
      />
    </svg>
  )
}

export default SvgBot

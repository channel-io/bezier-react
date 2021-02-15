import React from 'react'

function SvgPieChart(props: React.SVGProps<SVGSVGElement>) {
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
        d="M22 12H12V2c5.514 0 10 4.486 10 10zm-10 8c3.625 0 6.841-2.515 7.742-6.007h2.048c-.007.034-.012.068-.017.102-.006.043-.012.085-.022.127C20.725 18.728 16.624 22 12 22 6.486 22 2 17.514 2 12c0-4.623 3.271-8.725 7.778-9.75.04-.01.08-.016.12-.021.032-.005.063-.009.094-.015v2.048C6.508 5.17 4 8.382 4 12c0 4.411 3.589 8 8 8z"
      />
    </svg>
  )
}

export default SvgPieChart

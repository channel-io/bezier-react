import React from 'react'

function SvgPieChart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.992 2.214v2.048C6.508 5.17 4 8.382 4 12c0 4.411 3.589 8 8 8 3.625 0 6.841-2.515 7.742-6.007h2.048c-.015.076-.022.154-.039.23C20.725 18.727 16.624 22 12 22 6.486 22 2 17.514 2 12c0-4.623 3.271-8.725 7.778-9.75.07-.018.143-.022.214-.036zM12 2c5.514 0 10 4.486 10 10H12z"
      />
    </svg>
  )
}

export default SvgPieChart

import * as React from "react"

const UserIcon = (props) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#333"
    strokeWidth={0.6}
    {...props}
  >
    <path
      d="M11.092 13.413c-.587.174-1.28.254-2.094.254h-4c-.813 0-1.506-.08-2.093-.254.147-1.733 1.927-3.1 4.093-3.1 2.167 0 3.947 1.367 4.094 3.1Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.998.333h-4C1.665.333.332 1.667.332 5v4c0 2.52.76 3.9 2.573 4.413.147-1.733 1.927-3.1 4.093-3.1 2.167 0 3.947 1.367 4.093 3.1C12.905 12.9 13.665 11.52 13.665 9V5c0-3.333-1.333-4.667-4.667-4.667Zm-2 8.114a2.39 2.39 0 0 1 0-4.78 2.39 2.39 0 0 1 0 4.78Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default UserIcon

import React from 'react'

const TabHeading = ({title,className=""}) => {
  return (
    <h1 className={`text-[#0F1629] font-semibold text-2xl ${className}`}>{title}</h1>
  )
}

export default TabHeading
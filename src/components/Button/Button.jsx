import React from 'react'

const Button = ({text,className,type,icon=""}) => {
  return (
    
    <div>
        <button className={className} type={type}>{`${text}${icon}`}</button>
    </div>
  )
}

export default Button
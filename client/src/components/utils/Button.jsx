import React from 'react'

function Button({children , onClick, className , type, ...props}) {
  return (
    <button type={type} onClick={onClick} {...props} className={`${className} px-3 py-2.5 text-sm w-full rounded-xl `} >{children}</button>
  )
}

export default Button
import React from 'react'

const Button = ({style, id, name, icon}) =>{
  return(
    <div>
      <button style={style} id={id}>
        {name}
        {icon}
      </button>
    </div>
  )
}

export default Button
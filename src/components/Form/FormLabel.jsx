import React from 'react'

const FormLabel = ({labelFor, labelName }) =>{
  return (
    <div>
      <label for={labelFor}  >{labelName} </label>
    </div>
  )
}

export default FormLabel
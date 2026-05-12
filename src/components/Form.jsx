import React from 'react'

const form = ({placeholder, type, whenitype, name}) => {
  return (
    <div>
        <input name ={name} 
        placeholder={placeholder} type={type} onChange={whenitype}/>
    </div>
  )
}

export default form

import React from 'react'

const UserInfo = () => {
  return (
    <>
        <div>UserInfo</div>
        <div>
            <h3>Department: {props.department}</h3>
            <h3>Course: {props.course} React</h3>
            <h3>Institution: {props.institution}</h3>
        </div>
    </>
  )
}

export default UserInfo

import React from 'react'
import style from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <>
    <div className={`${style.navbar}`}>
        <div>
            <h3>SQI</h3>
        </div>
        <div className="d-flex gap.4">
            <h3>About</h3>
            <h3>Home</h3>
            <h3>Contact</h3>
        </div>
        <div className="btn-"></div>
    </div>
    </>
  )
}

export default Navbar

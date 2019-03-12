import React from 'react'
import '../imgs/react-marvel.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark" style={{color: 'white'}}>
    <img src="../imgs/react-marvel.png" height="33" width="120" alt=""/>
      <span className="navbar-brand h1" style={{color: 'red'}}>Marvel React App </span>
    </nav>
  )
}

export default Navbar

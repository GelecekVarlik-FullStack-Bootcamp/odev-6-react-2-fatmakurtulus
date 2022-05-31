import React from 'react'


import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div>
    
      <Link to="/Login" >Login</Link>
      <Link to="/Register">Register</Link>
      <Link to="/Todo">Todo</Link>
      <Link to="/Category">Category</Link>
      <Link to="/State">State</Link>
    </div>
  )
}

export default Nav
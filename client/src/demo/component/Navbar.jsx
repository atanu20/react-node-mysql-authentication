import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark">
         <div className="container">
  <NavLink className="navbar-brand text-white" to="/">Navbar</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto ">
      <li className="nav-item active">
        <NavLink to="/" className="nav-link text-white" >Home </NavLink>
      </li>
      <li className="nav-item active">
        <NavLink to="/login" className="nav-link text-white" >Login</NavLink>
      </li>
      
      
    </ul>
  
  </div>
  </div>
</nav>
            
            
        </>
    )
}

export default Navbar;

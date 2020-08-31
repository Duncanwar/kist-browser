import React, {  useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const NavBar = () => {
  const authContext =  useContext(AuthContext)
  // authContext.isAdmin()
 const renderList = () => {
 
   if(authContext.authState.token){
     console.log(authContext.authState.token)
     return[
     <li><button onClick={authContext.logOut} >logout</button></li>,
     
     ]
   }else
   {
     return [
      <li>  <Link to='/login'>Login</Link></li>,
      <li><Link to="/signup">Signup</Link></li>]
     
   }
 }

 

 return(
  // <!-- Header area -->
 
  <div className=''>
  <header className="header-area ">

<div className="main-header-area">
  <div className="classy-nav-container breakpoint-off">

    <nav className="classy-navbar justify-content-between" id="pocaNav">

      {/* <!-- Logo --> */}
      <NavLink className="nav-brand" to="/home"><img src="assets/img/core-img/lo-go.png.png" alt="" className="img-fluid"  id="black-logo"/></NavLink>
      <NavLink className="nav-brand" to="/home" ><img src="assets/img/core-img/white-logo.png" alt="" className="img-fluid" id="white-logo"/></NavLink>

      {/* <!-- Navbar Toggler --> */}
      <div className="classy-navbar-toggler">
        <span className="navbarToggler"><span></span><span></span><span></span></span>
      </div>

      {/* <!-- Menu --> */}
      <div className="classy-menu">

        {/* <!-- Menu Close Button --> */}
        <div className="classycloseIcon">
          <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
        </div>

        {/* <!-- Navbar link --> */}
        <div className="classynav">
          <ul id="nav">
            <li className="current-item"><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/course">Course</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li  ><NavLink to="/play-list.html">My Course</NavLink></li>
          </ul>

        </div>
        {/* <!-- Nav End --> */}
      </div>
    </nav>
  </div>
</div>
</header>

  </div>
 )   
}

export default NavBar
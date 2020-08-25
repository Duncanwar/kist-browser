import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useHistory, Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const NavBar = () => {
  const authContext =  useContext(AuthContext)

 const renderList = () => {
   
   if(authContext.authState.token){
     console.log(authContext.authState.token)
     return[
     <li><button onClick={authContext.logOut}>logout</button></li>,
     
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
  <header class="navs header-area">

    <div class="main-header-area">
      <div class="classy-nav-container breakpoint-off">

        <nav class="classy-navbar justify-content-between" id="pocaNav">

          {/* <!-- Logo --> */}
          <Link class="nav-brand" to="/home"><img src="assets/img/core-img/lo-go.png.png" alt="" class="img-fluid"  id="black-logo"/></Link>
          <Link class="nav-brand" to="/home" ><img src="assets/img/core-img/white-logo.png" alt="" class="img-fluid" id="white-logo"/></Link>
    
          {/* <!-- Navbar Toggler --> */}
          <div class="classy-navbar-toggler">
            <span class="navbarToggler"><span></span><span></span><span></span></span>
          </div>

          {/* <!-- Menu --> */}
          <div class="classy-menu">

            {/* <!-- Menu Close Button --> */}
            <div class="classycloseIcon">
              <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
            </div>

            {/* <!-- Navbar link --> */}
            <div class="classynav">
              <ul class="current-item" id="nav">
              <li class="current-item"><NavLink to="/home">Home</NavLink></li>
      <li class=""><NavLink to="/course">Course</NavLink></li>
                {renderList()}
              </ul>

            </div>
            {/* <!-- Nav End --> */}
          </div>
        </nav>
      </div>
    </div>
  </header>
 )   
}

export default NavBar
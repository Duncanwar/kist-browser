import React, {  useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const NavBar = () => {
  const authContext =  useContext(AuthContext)
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
 
  <div className='row'>
  <header class="navs header-area col-sm-12">

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
      <li className=""><NavLink to="/admin">dashboard</NavLink></li>
                {/* {renderList()} */}
                {authContext.authState.token ? <li><button  onClick={authContext.logOut} >logout</button></li> : [
                  <li>  <Link to='/login'>Login</Link></li>,
                  <li><Link to="/signup">Signup</Link></li>
                ] }
                <li><NavLink to=''></NavLink></li>
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
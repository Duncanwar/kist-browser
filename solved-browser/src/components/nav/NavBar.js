import React from 'react';
import { useHistory, Link } from 'react-router-dom';

const NavBar = () => {
   // const history = useHistory();
 
//  const renderList = () => {
//      return ([
//       <li>  <Link to='/login'>Login</Link></li>,
//       <li><Link to="/signup">Signup</Link></li>]
//      )
//  }
 
 return(
  // <!-- Header area -->
  <header class="header-area">

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
              <ul id="nav">
                <li class="current-item"><Link to="/home">Home</Link></li>
                <li><Link to="/course">Course</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
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
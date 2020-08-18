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
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#target">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active" href="t#">Home <span class="sr-only">(current)</span></a>
      <li>  <Link to='/login'>Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
      <li><Link class="nav-link" to="/course">Course</Link></li>
    </div>
  </div>
</nav>
 )   
}

export default NavBar
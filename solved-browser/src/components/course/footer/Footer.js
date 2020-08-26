import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
  
        <footer class="">
          <hr/>
   <div class="container">
     <div class="row">
 
     <hr />
       <div class="col-12 col-sm-6 col-lg-6  ">
         <div class="single-footer-widget mb-80">
           <h4 class="widget-title">About Us</h4>
 
           <p>It is Link long established fact that a reader will be distracted by the readable content.</p>
           <div class="copywrite-content">
             <p>&copy;Copyright &copy;{new Date().getFullYear()} All rights reserved  <Link to="/" target="_blank">SolveD</Link></p>          </div>
         </div>
       </div>
 
 
 
       <div class="col-12 col-sm-6 col-lg-3">
         <div class="single-footer-widget mb-80">
 
           <h4 class="widget-title">Lastest courses</h4>
 
 
           <div class="single-latest-courses">
             <p class="courses-date">December 8, 2018</p>
             <Link to="#" class="courses-title">Driver in the air</Link>
           </div>
 
           <div class="single-latest-courses">
             <p class="courses-date">December 8, 2018</p>
             <Link to="#" class="courses-title">Driver in the air</Link>
           </div>
         </div>
       </div>
 
 
       <div class="col-12 col-sm-6 col-lg-3">
         <div class="single-footer-widget mb-80">
 
           <h4 class="widget-title">Follow Us</h4>
 
           <div class="app-download-button mt-30">
             <Link to="#"><img src="assets/img/core-img/app-store.png" alt=""/></Link>
             <Link to="#"><img src="assets/img/core-img/google-play.png" alt=""/></Link>
           </div>
         </div>
       </div>
 
     </div>
   </div>
   {/* <!-- footer end --> */}
 </footer>
    )
}

export default Footer;
import React from 'react';

const Footer = () => {
    return(
        <footer class="footer-area section-padding-80-0">
   <div class="container">
     <div class="row">
 
     
       <div class="col-12 col-sm-6 col-lg-6  ">
         <div class="single-footer-widget mb-80">
           <h4 class="widget-title">About Us</h4>
 
           <p>It is a long established fact that a reader will be distracted by the readable content.</p>
           <div class="copywrite-content">
             <p>&copy;Copyright &copy;{document.write(new Date().getFullYear())} All rights reserved  <a href="#" target="_blank">SolveD</a></p>          </div>
         </div>
       </div>
 
 
 
       <div class="col-12 col-sm-6 col-lg-3">
         <div class="single-footer-widget mb-80">
 
           <h4 class="widget-title">Lastest courses</h4>
 
 
           <div class="single-latest-courses">
             <p class="courses-date">December 8, 2018</p>
             <a href="#" class="courses-title">Driver in the air</a>
           </div>
 
           <div class="single-latest-courses">
             <p class="courses-date">December 8, 2018</p>
             <a href="#" class="courses-title">Driver in the air</a>
           </div>
         </div>
       </div>
 
 
       <div class="col-12 col-sm-6 col-lg-3">
         <div class="single-footer-widget mb-80">
 
           <h4 class="widget-title">Follow Us</h4>
 
           <div class="app-download-button mt-30">
             <a href="#"><img src="assets/img/core-img/app-store.png" alt=""/></a>
             <a href="#"><img src="assets/img/core-img/google-play.png" alt=""/></a>
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
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
  
        <footer className="">
          <hr/>
   <div className="container">
     <div className="row">
 
     <hr />
       <div className="col-12 col-sm-6 col-lg-6  ">
         <div className="single-footer-widget mb-80">
           <h4 className="widget-title">About Us</h4>
 
           <p>It is Link long established fact that a reader will be distracted by the readable content.</p>
           <div className="copywrite-content">
             <p>&copy;Copyright &copy;{new Date().getFullYear()} All rights reserved  <Link to="/" target="_blank">SolveD</Link></p>          </div>
         </div>
       </div>
 
 
 
       <div className="col-12 col-sm-6 col-lg-3">
         <div className="single-footer-widget mb-80">
 
           <h4 className="widget-title">Lastest courses</h4>
 
 
           <div className="single-latest-courses">
             <p className="courses-date">December 8, 2018</p>
             <Link to="#" className="courses-title">Driver in the air</Link>
           </div>
 
           <div className="single-latest-courses">
             <p className="courses-date">December 8, 2018</p>
             <Link to="#" className="courses-title">Driver in the air</Link>
           </div>
         </div>
       </div>
 
 
       <div className="col-12 col-sm-6 col-lg-3">
         <div className="single-footer-widget mb-80">
 
           <h4 className="widget-title">Follow Us</h4>
 
           <div className="app-download-button mt-30">
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
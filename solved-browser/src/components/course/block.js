import React from 'react'
import { Link } from 'react-router-dom'

const Block = () =>{
    return(
        <div className="">
          <div className="breadcumb-area bg-img bg-overlay course" style={{backgroundImage: "url('assets/img/bg-img/2.jpg')"}}>
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <h2 className="title mt-70">Course</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="breadcumb--con">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to=""><i className="fa fa-home"></i> Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Course</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div> 
        {/* <!-- Latest course area --> */}
        <section className="poca-latest-epiosodes section-padding-80" id="course">
          <div className="container">
            <div className="row">
              {/* <!-- Section Heading --> */}
              <div className="col-12">
                <div className="section-heading text-center">
                  <h2>Latest Course</h2>
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </div>
        
          {/* <!-- Projects Menu --> */}
          <div className="container">
            <div className="poca-projects-menu mb-30 wow fadeInUp" data-wow-delay="0.3s">
              <div className="text-center portfolio-menu">
                <button className="btn active" data-filter="*">All</button>
                <button className="btn" data-filter=".moto">Moto</button>
                <button className="btn" data-filter=".media">Bus</button>
                <button className="btn" data-filter=".tech">Taxi</button>
                <button className="btn" data-filter=".Truck">Truck</button>
              </div>
            </div>
          </div>
          </section>
          </div>
       
    )
}

export default Block
import React from 'react'

const Block = () =>{
    return(
        <div class="">
          <div class="breadcumb-area bg-img bg-overlay course" style={{backgroundImage: "url('assets/img/bg-img/2.jpg')"}}>
          <div class="container h-100">
            <div class="row h-100 align-items-center">
              <div class="col-12">
                <h2 class="title mt-70">Course</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="breadcumb--con">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#"><i class="fa fa-home"></i> Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Course</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div> 
        {/* <!-- Latest course area --> */}
        <section class="poca-latest-epiosodes section-padding-80" id="course">
          <div class="container">
            <div class="row">
              {/* <!-- Section Heading --> */}
              <div class="col-12">
                <div class="section-heading text-center">
                  <h2>Latest Course</h2>
                  <div class="line"></div>
                </div>
              </div>
            </div>
          </div>
        
          {/* <!-- Projects Menu --> */}
          <div class="container">
            <div class="poca-projects-menu mb-30 wow fadeInUp" data-wow-delay="0.3s">
              <div class="text-center portfolio-menu">
                <button class="btn active" data-filter="*">All</button>
                <button class="btn" data-filter=".moto">Moto</button>
                <button class="btn" data-filter=".media">Bus</button>
                <button class="btn" data-filter=".tech">Taxi</button>
                <button class="btn" data-filter=".Truck">Truck</button>
              </div>
            </div>
          </div>
          </section>
          </div>
       
    )
}

export default Block
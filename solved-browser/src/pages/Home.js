import React from 'react';
import { Link } from 'react-router-dom';
import LatestCourse from './LatestCourse';
import Process from './Process';


const Home = () => {
    return (
        <div>
            
           
  <section className="welcome-area">
      
    {/* <!-- Welcome Slides --> */}
    <div className="welcome-slides owl-carousel">

      {/* <!-- Single Welcome Slide --> */}
      <div className="welcome-welcome-slide bg-img bg-overlay" style={{backgroundImage: "url('assets/img/bg-img/1.jpg')" }}/>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              {/* <!-- Welcome Text --> */}
              <div className="welcome-text">
                <h2 data-animation="fadeInUp" data-delay="100ms">Get Strated with our App</h2>
                <h5 data-animation="fadeInUp" data-delay="300ms">Please schedule Link podcast post, to make it visible here.</h5>
                <div className="welcome-btn-group">
                  <Link to="#categories" className="btn poca-btn m-2 ml-0 active" data-animation="fadeInUp" data-delay="500ms">Start Train Yourself</Link>
                  </div>
              </div>
              {/* <!-- Welcome course Area --> */}
              <div className="poca-course-area mt-100 d-flex align-items-center flex-wrap" data-animation="fadeInUp" data-delay="900ms">
                <div className="poca-course-thumbnail">
                  <img src="assets/img/bg-img/4.jpg" alt=""/>
                </div>


                <div className="poca-course-content">
                  <span className="course-published-date">December 9, 2018</span>
                  <h2>Course about driving</h2>


                  {/* <!-- course Player --> */}
                  <div className="poca-course-player">
                    <audio preload="auto" controls>
                      <source src="assets/audio/dummy-audio.mp3"/>
                    </audio>
                  </div>

                  
                  {/* <!--  Download --> */}
                  <div className="likes-share-download d-flex align-items-center justify-content-between">
                    <div>
                      <Link to="#"><i className="fa fa-download" aria-hidden="true"></i> Download (12)</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


  </section>

{/* // <!-- Categories --> */}
<section id="categories">
	<div class="weekly">
		<div class="parallax_background parallax-window" data-parallax="scroll"  data-speed="0.8"></div>
		<div class="container">
			<div class="row row-eq-height">
				
			
				<div class="col-lg-6">
					<div class="weekly_content d-flex flex-column align-items-start justify-content-lg-center justify-content-start">
						<div>
							<div class="weekly_title"><h1>Get updated with Our Course</h1></div>
							<div class="weekly_text">
								<p>Cras congue et risus eget congue. Integer id justo non orci suscipit cursus a scelerisque libero. Fusce in tortor mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas euismod sed magna.</p>
							</div>
							<div class="shops d-flex flex-row align-items-start justify-content-start flex-wrap ">
								<div class="button_border"><a href="#" >Taxi</a></div>
								<div class="button_border"><a href="#" >Bus</a></div>
                <div class="button_border"><a href="#" >Moto</a></div>
                <div class="button_border"><a href="#" >Trucks</a></div>

							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-6">
					<div class="weekly_image">
						<img src="assets/img/bg-img/1.jpg" alt=""/>
					</div>
				</div>
			</div>
		</div>
  </div>
</section>
  {/* <!-- Categories end --> */}
  <LatestCourse />
  <Process />
</div>

        
    );
};

export default Home;
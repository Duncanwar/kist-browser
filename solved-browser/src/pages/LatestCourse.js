import React from 'react';
import {Link} from 'react-router-dom'


const LatestCourse = () => {
    return (
        <div>
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

    <div className="container">
      <div className="row poca-portfolio">

      {/* <!-- Single gallery Item --> */}
      <Link href="course-desc.html">
        <div className="col-12 col-md-6 single_gallery_item moto wow fadeInUp" data-wow-delay="0.2s">
          {/* <!-- Welcome course Area --> */}
          <div className="poca-course-area style-2 d-flex align-items-center flex-wrap">
            <div className="poca-course-thumbnail">
  
              <img src="assets/img/bg-img/moto-1.jpg" alt=""/>
            </div>
  
  
            <div className="poca-course-content text-center">
              <span className="course-published-date mb-2">December 9, 2018</span>
              <h2>course about driving</h2>
  
              {/* <!-- course Player --> */}
              <div className="poca-course-player">
                <audio preload="auto" controls>
                  <source src="assets/audio/dummy-audio.mp3"/>
                </audio>
              </div>
              {/* <!-- Likes, Share & Download --> */}
              <div className="likes-share-download d-flex align-items-center justify-content-between">
                <ul className="files-action">
                  <li className="dropdown  ">
                      <Link href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></Link>
                      <div className="dropdown-menu">
                          <Link className="dropdown-item" href="#">new</Link>
                          <Link className="dropdown-item" href="#" data-toggle="modal" data-target="#addtoplaylist">Add to playlist  </Link>
                      </div>
                  </li>
              </ul>

  
                <div>
  
                  <Link href="#"><i className="fa fa-download" aria-hidden="true"></i> Download (12)</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
  
        {/* <!-- Single gallery Item --> */}
        <Link href="course-desc.html">
        <div className="col-12 col-md-6 single_gallery_item moto wow fadeInUp" data-wow-delay="0.2s">
          {/* <!-- Welcome course Area --> */}
          <div className="poca-course-area style-2 d-flex align-items-center flex-wrap">
            <div className="poca-course-thumbnail">
  
              <img src="assets/img/bg-img/moto-2.jpg" alt=""/>
            </div>
            <div className="poca-course-content text-center">
              <span className="course-published-date mb-2">December 9, 2018</span>
              <h2>course about driving</h2>
  
              {/* <!-- course Player --> */}
              <div className="poca-course-player">
                <audio preload="auto" controls>
                  <source src="assets/audio/dummy-audio.mp3"/>
                </audio>
              </div>
              {/* <!-- Likes, Share & Download --> */}
              <div className="likes-share-download d-flex align-items-center justify-content-between">
  
                <div>
  
                  <Link href="#"><i className="fa fa-download" aria-hidden="true"></i> Download (12)</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Link>
  
        {/* <!-- Single gallery Item --> */}
        <Link href="course-desc.html">
        <div className="col-12 col-md-6 single_gallery_item media wow fadeInUp" data-wow-delay="0.2s">
          {/* <!-- Welcome course Area --> */}
          <div className="poca-course-area style-2 d-flex align-items-center flex-wrap">
            <div className="poca-course-thumbnail">
  
              <img src="assets/img/bg-img/7.jpg" alt=""/>
            </div>
            <div className="poca-course-content text-center">
              <span className="course-published-date mb-2">December 9, 2018</span>
              <h2>course about driving</h2>
  
              {/* <!-- course Player --> */}
              <div className="poca-course-player">
                <audio preload="auto" controls>
                  <source src="assets/audio/dummy-audio.mp3"/>
                </audio>
              </div>
              {/* <!-- Likes, Share & Download --> */}
              <div className="likes-share-download d-flex align-items-center justify-content-between">
  
                <div>
  
                  <Link href="#"><i className="fa fa-download" aria-hidden="true"></i> Download (12)</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Link>
  
        {/* <!-- Single gallery Item --> */}
        <Link href="course-desc.html">
        <div className="col-12 col-md-6 single_gallery_item media wow fadeInUp" data-wow-delay="0.2s">
          {/* <!-- Welcome course Area --> */}
          <div className="poca-course-area style-2 d-flex align-items-center flex-wrap">
            <div className="poca-course-thumbnail">
  
              <img src="assets/img/bg-img/8.jpg" alt=""/>
            </div>
            <div className="poca-course-content text-center">
              <span className="course-published-date mb-2">December 9, 2018</span>
              <h2>course about driving</h2>
  
              {/* <!-- course Player --> */}
              <div className="poca-course-player">
                <audio preload="auto" controls>
                  <source src="assets/audio/dummy-audio.mp3"/>
                </audio>
              </div>
              {/* <!-- Likes, Share & Download --> */}
              <div className="likes-share-download d-flex align-items-center justify-content-between">
  
                <div>
  
                  <Link href="#"><i className="fa fa-download" aria-hidden="true"></i> Download (12)</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Link>
  
        {/* <!-- Single gallery Item --> */}
        <Link href="course-desc.html">
        <div className="col-12 col-md-6 single_gallery_item tech  wow fadeInUp" data-wow-delay="0.2s">
          {/* <!-- Welcome course Area --> */}
          <div className="poca-course-area style-2 d-flex align-items-center flex-wrap">
            <div className="poca-course-thumbnail">
  
              <img src="assets/img/bg-img/Copy of 10.jpg" alt=""/>
            </div>
            <div className="poca-course-content text-center">
              <span className="course-published-date mb-2">December 9, 2018</span>
              <h2>course about driving!</h2>
  
              {/* <!-- course Player --> */}
              <div className="poca-course-player">
                <audio preload="auto" controls>
                  <source src="assets/audio/dummy-audio.mp3"/>
                </audio>
              </div>
              {/* <!-- Likes, Share & Download --> */}
              <div className="likes-share-download d-flex align-items-center justify-content-between">
  
                <div>
  
                  <Link href="#"><i className="fa fa-download" aria-hidden="true"></i> Download (12)</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Link>
  
        {/* <!-- Single gallery Item --> */}
        <Link href="course-desc.html">
        <div className="col-12 col-md-6 single_gallery_item tech  fadeInUp" data-wow-delay="0.2s">
          {/* <!-- Welcome course Area --> */}
          <div className="poca-course-area style-2 d-flex align-items-center flex-wrap">
            <div className="poca-course-thumbnail">
  
              <img src="assets/img/bg-img/10.jpg" alt=""/>
            </div>
            <div className="poca-course-content text-center">
              <span className="course-published-date mb-2">December 9, 2018</span>
              <h2>course about driving </h2>
  
              {/* <!-- course Player --> */}
              <div className="poca-course-player">
                <audio preload="auto" controls>
                  <source src="assets/audio/dummy-audio.mp3"/>
                </audio>
              </div>
              {/* <!-- Likes, Share & Download --> */}
              <div className="likes-share-download d-flex align-items-center justify-content-between">
  
                <div>
  
                  <Link href="#"><i className="fa fa-download" aria-hidden="true"></i> Download (12)</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Link>
                {/* <!-- Single gallery Item --> */}
                <Link href="course-desc.html">
                <div className="col-12 col-md-6 single_gallery_item Truck wow fadeInUp" data-wow-delay="0.2s">
                  {/* <!-- Welcome course Area --> */}
                  <div className="poca-course-area style-2 d-flex align-items-center flex-wrap">
                    <div className="poca-course-thumbnail">
        
                      <img src="assets/img/bg-img/5.jpg" alt=""/>
                    </div>
        
        
                    <div className="poca-course-content text-center">
                      <span className="course-published-date mb-2">December 9, 2018</span>
                      <h2>course about driving</h2>
        
                      {/* <!-- course Player --> */}
                      <div className="poca-course-player">
                        <audio preload="auto" controls>
                          <source src="assets/audio/dummy-audio.mp3"/>
                        </audio>
                      </div>
                      {/* <!-- Likes, Share & Download --> */}
                      <div className="likes-share-download d-flex align-items-center justify-content-between">
        
                        <div>
        
                          <Link href="#"><i className="fa fa-download" aria-hidden="true"></i> Download (12)</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </Link>
        
                {/* <!-- Single gallery Item --> */}
                <Link href="course-desc.html">
                <div className="col-12 col-md-6 single_gallery_item entre Truck wow fadeInUp" data-wow-delay="0.2s">
                  {/* <!-- Welcome course Area --> */}
                  <div className="poca-course-area style-2 d-flex align-items-center flex-wrap">
                    <div className="poca-course-thumbnail">
        
                      <img src="assets/img/bg-img/6.jpg" alt=""/>
                    </div>
                    <div className="poca-course-content text-center">
                      <span className="course-published-date mb-2">December 9, 2018</span>
                      <h2>course about driving</h2>
        
                      {/* <!-- course Player --> */}
                      <div className="poca-course-player">
                        <audio preload="auto" controls>
                          <source src="assets/audio/dummy-audio.mp3"/>
                        </audio>
                      </div>
                      {/* <!-- Likes, Share & Download --> */}
                      <div className="likes-share-download d-flex align-items-center justify-content-between">
        
                        <div>
        
                          <Link href="#"><i className="fa fa-download" aria-hidden="true"></i> Download (12)</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </Link>
  
      </div>
    </div>
  
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <Link href="Course.html" className="btn poca-btn mt-70">Load More</Link>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Latest course end --></Link> */}

  {/* <!-- process end --> */}
        </div>
    );
};

export default LatestCourse;
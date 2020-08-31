import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Axios from 'axios';
import Block from './block'
import { Footer } from '..';

const  Course = () => {
    const [data,setData] = useState([])
    useEffect( ()=>{
       getAllCourse()
    },[])
    const getAllCourse = async() => {
        const response = await Axios('/api/v1/courses')
        const res = response.data;
        setData(res.data)
    }
    return (
      <div className="course">
   <Block />
 { data.map(course => {
        return(
        <div>
        
            <div class="row poca-portfolio">
        
              {/* <!-- Single gallery Item --> */}
              <a href="course-desc.html">
              <div class="col-12 col-md-6 single_gallery_item moto wow fadeInUp" data-wow-delay="0.2s">
                {/* <!-- Welcome course Area --> */}
                <div class="poca-course-area style-2 d-flex align-items-center flex-wrap">
                  <div class="poca-course-thumbnail">
        
                    <img src={course.coursePhoto} alt=""/>
                  </div>
        
        
                  <div class="poca-course-content text-center">
                    <span class="course-published-date mb-2">December 9, 2018</span>
        <h2>{course.courseName}</h2>
        
                    {/* <!-- course Player --> */}
                    <div class="poca-course-player">
                      <audio preload="auto" controls>
                        <source src={course.courseAudio} />
                      </audio>
                    </div>
                    {/* <!-- Likes, Share & Download --> */}
                    <div class="likes-share-download d-flex align-items-center justify-content-between">
        
                      <div>
        
                        <Link to="/"><i class="fa fa-download" aria-hidden="true"></i> Download (12)</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            </div>
            </div>
 ) })};
 </div>

    );
}

export default Course;
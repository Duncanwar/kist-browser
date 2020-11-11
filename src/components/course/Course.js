import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Axios from 'axios';
import Block from './block'


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
        <div className="thumbnails">
        
            <div className="row poca-portfolio thumbnails ">
        
              {/* <!-- Single gallery Item --> */}
              <a href="course-desc.html">
              <div className="col-12 col-md-6 single_gallery_item moto wow fadeInUp" data-wow-delay="0.2s">
                {/* <!-- Welcome course Area --> */}
                <div className="poca-course-area style-2 d-flex align-items-center flex-wrap">
                  <div className="poca-course-thumbnail">
        
                    <img className=""src={course.coursePhoto} alt=""/>
                  </div>
        
        
                  <div className="poca-course-content text-center">
                    <span className="course-published-date mb-2">December 9, 2018</span>
        <h2>{course.courseName}</h2>
        
                    {/* <!-- course Player --> */}
                    <div className="poca-course-player">
                      <audio preload="auto" controls>
                        <source src={course.courseAudio} />
                      </audio>
                    </div>
                    {/* <!-- Likes, Share & Download --> */}
                    <div className="likes-share-download d-flex align-items-center justify-content-between">
        
                      <div>
        
                        <Link to="/"><i className="fa fa-download" aria-hidden="true"></i> Download (12)</Link>
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
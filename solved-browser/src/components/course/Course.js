import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Axios from 'axios';

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
<div class="row row-cols-1 row-cols-md-2">
 { data.map(course => {
        return(
            
<div class="col mb-4">
 <div class="card">
 <h5 class="card-title"><Link to={'/course/'+ course.courseName}>{course.courseName}</Link></h5>
   <img src={course.coursePhoto} class="card-img-top thumbnail" alt=""/>
   <div class="card-body">
        
        <p class="card-text">Igiciro <b>{course.coursePrice}</b></p>
        <audio  controls>
            <source a src={course.courseAudio}/>
            
        </audio>
       
        
   </div>
 </div>
</div>
        )
    })
 
    }
 
  </div>
    );
}

export default Course;
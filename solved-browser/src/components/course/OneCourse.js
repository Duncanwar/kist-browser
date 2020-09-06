import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';

const OneCourse = () => {
const [course,setCourse] = useState('');
const {courseName} = useParams();

useEffect(()=> {
    getOneCourse()
}, [])

const getOneCourse = async() => {
    console.log(courseName)
    const response = await Axios(`/api/v1/courses/${courseName}`);
    console.log(response);
    setCourse(response.data)
}
return(
    <div class="row row-cols-1 row-cols-md-2">
 { course.map(course => {
        return(
            
<div class="col mb-4">
 <div class="card">
       <Link to={`/course/${courseName}`}> <h5 class="card-title">{course.courseName}</h5> </Link>
   <img src={course.coursePhoto} class="card-img-top thumbnail" alt=""/>
   <div class="card-body">
        
        <p class="card-text">Igiciro <b>{course.coursePrice}</b></p>
        <audio autoPlay controls>
            <source a src={course.courseAudio}/>
            
        </audio>
       
        
   </div>
 </div>
</div>
        )
    })
 
    }
 
  </div>
)
}

export default OneCourse;
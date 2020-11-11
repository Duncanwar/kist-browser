import React, { useState, useEffect } from 'react';

const CreateCourse = () => {
    const [courseName,setCourseName]= useState('');
    const [coursePhoto,setCoursePhoto] = useState('');
    const [courseAudio,setCourseAudio] = useState('');
    const [coursePrice, setCoursePrice] = useState('');

useEffect(()=>{

})

    return (
        <div>
           <div className="signup">
          
          <div class="form-group">
            <label for="drivingLicense">Driving License</label>
            <input type="text" class="form-control" id="drivingNumber" aria-describedby="emailHelp"/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
          <button type="submit" class="btn btn-primary" >Login</button>
        
        
        </div>
        </div>
    );
};

export default CreateCourse;
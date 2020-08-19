import React, { useState } from 'react';
import axios from 'axios';
import M from 'materialize-css'
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history =  useHistory();
  const [drivingLicenseNumber,setDrivingLicenseNumber] = useState('');
  const [password,setPassword] = useState('');

  const login = async() => {
    const response =  await axios.post('/auth/driver/login',{
      drivingLicenseNumber,
      password
    },
    {headers:{
      'Content-Type':'application/json'
    }},) 
const data = response.data;
console.log(data)
if(data.error){
  M.toast({html: data.error})
}
else{
  console.log(data.message);
  M.toast({html:data.message})
  history.push('/course');
}
  }
    return(
        <div className="signup">
          
  <div class="form-group">
    <label for="drivingLicense">Driving License</label>
    <input type="text" class="form-control" id="drivingNumber" value={drivingLicenseNumber} onChange={(e)=> setDrivingLicenseNumber( e.target.value)} aria-describedby="emailHelp"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e)=> setPassword(e.target.value)}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={()=> login()}>Login</button>


</div>
    )
}

export default Login;
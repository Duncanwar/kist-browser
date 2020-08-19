import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import M from 'materialize-css'

const SignUp = () => {

const history = useHistory();
const [drivingLicenseNumber, setDrivingLicenseNumber] = useState('');
const [password,setPassword] = useState('');

const postDataBySignUp = async () => {
  const response = await  axios.post('/api/v1/auth/driver/signup',
    { drivingLicenseNumber,
        password
    },    
    { headers: {  
            "Content-Type":"application/json"
    }},  
  ) 
  console.log(response)
    const data = await response.data ;
    if(data.error){
        M.toast({html:data.error, classes: 'rounded'})
    }
    else{
      
      M.toast({html:data.message})
      history.push('/login')
    }
 
}


    return(
        <div className="signup">
            
  <div class="form-group">
    <label for="drivingLicense">Driving License</label>
    <input type="text" class="form-control" id="drivingNumber" aria-describedby="emailHelp" value={drivingLicenseNumber} onChange={(e)=> setDrivingLicenseNumber(e.target.value)}/>

  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword( e.target.value )}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={()=>postDataBySignUp()}>Register</button>

</div>
    )
}

export default SignUp;
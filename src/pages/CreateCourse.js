import React, { useState, useEffect } from 'react';
import Axios from "axios";
import {useHistory} from "react-router-dom";
import M from "materialize-css";

const CreateCourse = () => {
  const history = useHistory();
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [password,setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [type, setType] = useState('');

    useEffect(()=>{
});

const saveData = async () => {
  await Axios.post('https://pvs-backend.herokuapp.com/adrielsoft/visitor',{
    firstName,lastName,phone,password,status,type
  });
  M.toast({html:"invalid email", classes:["rounded","valign-wrapper","center-align"] })
}
    return (
        <div>
           <div className="signup">
          <div class="form-group">
            <h1> Register For A Visit</h1>
            <label for="drivingLicense">First Name</label>
            <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" class="form-control" id="fistName" aria-describedby="emailHelp"/>
          </div>
          <div class="form-group">
            <label for="drivingLicense">Last Name</label>
            <input value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" class="form-control" id="lastName" aria-describedby="emailHelp"/>
          </div> 
          <div class="form-group">
            <label for="drivingLicense"> Phone</label>
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" class="form-control" id="phone" aria-describedby="emailHelp"/>
          </div> 
          <div class="form-group">
            <label for="exampleInputPassword">Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="password"/>
          </div>
          <div class="form-group">
            <label for="drivingLicense"> Type</label>
            <input value={type} onChange={(e)=>setType(e.target.value)} type="text" class="form-control" id="Type" aria-describedby="emailHelp"/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword">Status</label>
            <input value={status} onChange={(e)=>setStatus(e.target.value)} type="text" class="form-control" id="status"/>
          </div>
          <button type="submit" class="btn btn-primary" onClick={()=> saveData()}> Register </button>
        </div>
      </div>
    );
};

export default CreateCourse;
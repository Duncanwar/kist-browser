import React, { useEffect, useState } from 'react';
import Axios from 'axios';


const Users = () => {
const [users,setUsers] = useState([])
    useEffect(()=>{
       allUsers() 
    },[])
    const allUsers = async() =>{
        const user = await (await Axios.get('/api/v1/allUsers')).data;
        setUsers(user.data)
        console.log(user.data)
    }
    return (

<div>
<table class="table table-dark">
  <thead>
     
    <tr>
    <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
{users.map((user,i) => {
     return(
    
  <tbody>
    <tr>
    <th scope="row">{i}</th>
     <td>{user.role}</td>
     <td>{user.drivingLicenseNumber}</td>
     <td>{}</td>
    </tr>
    </tbody>
    
    )
     })}
     </table>
        </div>
    );
};

export default Users;